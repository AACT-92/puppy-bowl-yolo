import { useState, useEffect } from "react";
import { AllPlayers } from "../api";
import  PlayerListName  from "./PlayerListName";
import  CreatePlayer  from "../components/CreatePlayer"

export const Players = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("") 

    useEffect(() => {
        async function getPlayers() {
          const APIResponse = await AllPlayers();
          if (APIResponse.success) {
            setPlayers(APIResponse.data.players);
          } else {
            setError(APIResponse.error.message);
          }
        }
        getPlayers();
      }, []);
    
      const playersToDisplay = searchParam
        ? players.filter((player) =>
            player.name.toLowerCase().includes(searchParam)
          )
        : players;
      return (
        <div>
          <div>
            <label>
              Search:{" "}
              <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
              />
            </label>
          </div>
          <CreatePlayer players={players} setPlayers={setPlayers} />
          {error && <p>{error}</p>}
          {playersToDisplay.map((player) => {
            return <PlayerListName key={player.id} player={player} />;
          })}
        </div>
      );
}

export default Players
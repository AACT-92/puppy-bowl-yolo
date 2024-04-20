import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSinglePlayer } from "../api";
import PlayerCard from "./PlayerCard";

export const SinglePlayer=() => {
  const { id } = useParams();

  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPlayer() {
      const APIResponse = await getSinglePlayer(id);
      if (APIResponse.success) {
        setPlayer(APIResponse.data.player);
      } else {
        setError(error.message);
      }
    }
    getPlayer();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {player && <PlayerCard player={player} />}
    </div>
  );
}
 export default SinglePlayer 
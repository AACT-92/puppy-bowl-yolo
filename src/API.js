const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A";

export async function getPlayers() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}

export async function getPlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlayer(player) {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(error);
  }
}

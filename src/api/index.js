const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A";

export async function AllPlayers() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const getSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
      headers: {
        'Content-Type': 'application.json' , 
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlayer(name, breed) {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    await response.json();
  } catch (error) {
    console.error(error);
  }
}



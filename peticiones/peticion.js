const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0a0a986a4cmsh5a13bc30f563b55p1fa06cjsn5551f8e2c3e7",
    "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
  },
};

export const getChampions = async (role) => {
  const champions = await (
    await fetch(
      `https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10&role=${role}`,
      options
    )
  ).json();
  console.log(champions);
};

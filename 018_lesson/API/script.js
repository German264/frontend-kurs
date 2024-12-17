document.addEventListener("DOMContentLoaded", async () => {
    try {
      // Загружаем данные персонажа с ID = 2
      const characterResponse = await fetch('https://rickandmortyapi.com/api/character/2');
      const characterData = await characterResponse.json();
  
       // Загружаем данные о локации
       const locationResponse = await fetch(characterData.location.url);
       const locationData = await locationResponse.json();
  
       // Загружаем данные о первом эпизоде
       const firstEpisodeResponse = await fetch(characterData.episode[0]);
       const firstEpisodeData = await firstEpisodeResponse.json();
  
      // Вставляем данные в HTML
      const characterInfo = document.getElementById('characterInfo');
      characterInfo.innerHTML = `
        <img src="${characterData.image}" alt="${characterData.name}" width="200">
        <h2>${characterData.name}</h2>
        <p><strong>Status:</strong> ${characterData.status}</p>
        <p><strong>Origin:</strong> ${characterData.origin.name}</p>
        <p><strong>Location:</strong> ${locationData.name}</p>
        <p><strong>First Episode:</strong> ${firstEpisodeData.name} (${firstEpisodeData.air_date})</p>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('characterInfo').textContent = 'Failed to load character data.';
    }
  });
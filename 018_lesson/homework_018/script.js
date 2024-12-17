document.addEventListener("DOMContentLoaded", () => {
  function fetchCharacter() {
    const characterId = 2; // ID персонажа
    const characterInfoDiv = document.getElementById("character-info");

    fetch(`https://rickandmortyapi.com/api/character/2`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Character not found!");
        }
        return response.json();
      })
      .then((data) => {
        // Отображение данных о персонаже в HTML
        const characterHTML = `
                <img src="${data.image}" alt="${data.name}" />
                <h2>${data.name}</h2>
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Origin:</strong> ${data.origin.name}</p>
            `;
        characterInfoDiv.innerHTML = characterHTML;
      })
      .catch((error) => {
        characterInfoDiv.innerHTML = `<p>${error.message}</p>`;
      });
  }
  fetchCharacter();

  function fetchCharacterGallery() {
    const characterGalleryDiv = document.getElementById("character-gallery");

    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch characters!");
        }
        return response.json();
      })
      .then((data) => {
        // Очищаем старый контент
        characterGalleryDiv.innerHTML = "";

        // Генерируем элементы для каждого персонажа
        data.results.map((character) => {
          const characterDiv = document.createElement("divGallery");

          // Добавляем содержимое
          characterDiv.innerHTML = `
              <img src="${character.image}" alt="${character.name}" />
              <h2>${character.name}</h2>
              <p><strong>Status:</strong> ${character.status}</p>
              <p><strong>Origin:</strong> ${character.origin.name}</p>
            `;

          // Добавляем персонажа в галерею
          characterGalleryDiv.appendChild(characterDiv);
        });
      })
      .catch((error) => {
        characterGalleryDiv.innerHTML = `<p>${error.message}</p>`;
      });
  }
  fetchCharacterGallery();
});

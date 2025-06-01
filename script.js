localStorage.setItem('filmData', JSON.stringify(filmData));

    const container = document.getElementById("movie-container");

    filmData.forEach(film => {
      const card = document.createElement("a");
      card.className = "movie-card";
      card.href = `player.html?slug=${encodeURIComponent(film.slug)}`;
      card.innerHTML = `
        <img src="${film.image}" alt="${film.title}" />
        <span>${film.title}</span>
      `;
      container.appendChild(card);
    });

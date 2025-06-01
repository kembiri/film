localStorage.setItem('filmData', JSON.stringify(filmData));

const container = document.getElementById("movie-container");

filmData.forEach(film => {
  const episodeCount = Array.isArray(film.episodes) ? film.episodes.length : 1;

  const card = document.createElement("a");
  card.className = "movie-card";
  card.href = `player.html?slug=${encodeURIComponent(film.slug)}`;
  card.innerHTML = `
    <div class="card-wrapper">
      <span class="episode-badge">${episodeCount}</span>
      <img src="${film.poster}" alt="${film.title}" />
    </div>
    <span class="movie-title">${film.title}</span>
  `;
  container.appendChild(card);
});

    fetch('film.json')
      .then(response => response.json())
      .then(data => {
        const allFilms = [...data.dramas, ...data.movies];
        localStorage.setItem('filmData', JSON.stringify(allFilms));
        renderList(data.dramas, 'drama-list');
        renderList(data.movies, 'movie-list');
      });
  
    function renderList(data, containerId) {
      const container = document.getElementById(containerId);
      data.forEach(item => {
        const epsCount = item.episodes ? item.episodes.length : 1;
        const poster = item.poster || "";
        const link = document.createElement('a');
        link.href = `player.html?slug=${encodeURIComponent(item.slug)}`;
        link.innerHTML = `
          <div class="list-anime">
            <img src="${poster}" alt="${item.title}">
            <p>${item.title}</p>
            <span class="eps">${epsCount}</span>
          </div>
        `;
        container.appendChild(link);
      });
    }

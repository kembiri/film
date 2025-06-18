// Simpan ke localStorage
localStorage.setItem('filmData', JSON.stringify(filmData));

// Ambil elemen
const serialList = document.getElementById("serial-list");
const movieList = document.getElementById("movie-list");
const typeFilter = document.getElementById("typeFilter");
const genreFilter = document.getElementById("genreFilter");
const countryFilter = document.getElementById("countryFilter");

// Ambil semua jenis unik
const allTypes = [...new Set(filmData.map(f => f.type))];
const allGenres = [...new Set(filmData.flatMap(f => f.genre))];
const allCountries = [...new Set(filmData.map(f => f.country))];

// Isi filter
allTypes.forEach(type => {
  const opt = document.createElement("option");
  opt.value = type;
  opt.textContent = type;
  typeFilter.appendChild(opt);
});

allGenres.forEach(genre => {
  const opt = document.createElement("option");
  opt.value = genre;
  opt.textContent = genre;
  genreFilter.appendChild(opt);
});

allCountries.forEach(country => {
  const opt = document.createElement("option");
  opt.value = country;
  opt.textContent = country;
  countryFilter.appendChild(opt);
});

function renderFilms(data) {
  // Kosongkan kontainer
  serialList.innerHTML = "";
  movieList.innerHTML = "";

  data.forEach(film => {
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

    if (film.type === "Serial") {
      serialList.appendChild(card);
    } else if (film.type === "Movie") {
      movieList.appendChild(card);
    }
  });
}

function applyFilters() {
  const selectedType = typeFilter.value;
  const selectedGenre = genreFilter.value;
  const selectedCountry = countryFilter.value;

  const filtered = filmData.filter(film => {
    const matchType = selectedType ? film.type === selectedType : true;
    const matchGenre = selectedGenre ? film.genre.includes(selectedGenre) : true;
    const matchCountry = selectedCountry ? film.country === selectedCountry : true;
    return matchType && matchGenre && matchCountry;
  });

  renderFilms(filtered);
}

typeFilter.addEventListener("change", applyFilters);
genreFilter.addEventListener("change", applyFilters);
countryFilter.addEventListener("change", applyFilters);

// Tampilkan semua saat awal
renderFilms(filmData);

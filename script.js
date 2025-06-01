    const container = document.getElementById("movie-container");
    const modal = document.getElementById("movieModal");
    const iframe = document.getElementById("movieIframe");
    const closeBtn = document.querySelector(".close");

    movies.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" />
        <span>${movie.title}</span>
      `;
      card.addEventListener("click", () => {
        iframe.src = movie.url;
        modal.style.display = "flex";
      });
      container.appendChild(card);
    });

    closeBtn.onclick = function () {
      modal.style.display = "none";
      iframe.src = "";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        iframe.src = "";
      }
    };

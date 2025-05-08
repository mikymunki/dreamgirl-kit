
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery-container");
  const sampleModels = [
    { name: "Luna AI", image: "https://via.placeholder.com/300x400", link: "#" },
    { name: "Ava Neural", image: "https://via.placeholder.com/300x400", link: "#" }
  ];
  gallery.innerHTML = sampleModels.map(model => `
    <div class="card">
      <img src="${model.image}" alt="${model.name}" loading="lazy" />
      <h4>${model.name}</h4>
      <a href="${model.link}" class="cta-button">Clone Now</a>
    </div>
  `).join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("model-feed");
  fetch("https://creators.deepfake.com/api/top_models5/")
    .then(res => res.json())
    .then(data => {
      feed.innerHTML = data.map(model => `
        <div class="model-card">
          <h3>${model.name}</h3>
          <img src="${model.image}" alt="${model.name}" loading="lazy" width="100%">
          <p>${model.bio || ""}</p>
          <a href="${model.clone_url}?ref=13001710" target="_blank">Clone</a>
          <button onclick="saveFav('${model.name}')">♡</button>
        </div>
      `).join('');
    });
});

function saveFav(name) {
  let favs = JSON.parse(localStorage.getItem("favs") || "[]");
  if (!favs.includes(name)) favs.push(name);
  localStorage.setItem("favs", JSON.stringify(favs));
  alert("Saved " + name);
}

document.getElementById("scroll-top").onclick = () => window.scrollTo({top:0,behavior:'smooth'});
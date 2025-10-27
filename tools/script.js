async function loadDictionary() {
  const res = await fetch("preschool_dictionary.json");
  const data = await res.json();
  window.dictionaryData = data;
  renderDictionary("en");
}

function renderDictionary(lang) {
  const container = document.getElementById("dictionaryContainer");
  container.innerHTML = "";

  window.dictionaryData.forEach(entry => {
    const card = document.createElement("div");
    card.className = "word-card";

    const icon = document.createElement("div");
    icon.className = "word-icon";
    icon.textContent = entry.icon || "📷";

    const text = document.createElement("div");
    text.className = "word-text";
    text.textContent = entry.translations[lang] || entry.word;

    const alt = document.createElement("div");
    alt.className = "word-alt";
    alt.textContent = entry.image_alt || "";

    card.appendChild(icon);
    card.appendChild(text);
    container.appendChild(card);
  });
}

document.getElementById("langSelect").addEventListener("change", (e) => {
  renderDictionary(e.target.value);
});

loadDictionary();

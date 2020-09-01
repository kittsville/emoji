const searchElement = document.getElementById("search");
const emojis = Array.from(document.getElementsByTagName("img"));
let searchTimer;

searchElement.addEventListener("input", resetSearchTimer);

searchElement.disabled = false;

function resetSearchTimer() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(filterEmoji, 20);
}

function filterEmoji() {
  const searchTerm = searchElement.value.toLowerCase();
  emojis.forEach(emoji => {
    emoji.hidden = !emoji.src.toLowerCase().includes(searchTerm);
  });
}

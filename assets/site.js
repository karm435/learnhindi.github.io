// Plays the vowel recordings in the hero. One sound plays at a time.
let current;
for (const button of document.querySelectorAll(".sound")) {
  button.addEventListener("click", () => {
    if (current) {
      current.audio.pause();
      current.button.classList.remove("is-playing");
    }
    const audio = new Audio(button.dataset.src);
    current = { audio, button };
    button.classList.add("is-playing");
    const done = () => button.classList.remove("is-playing");
    audio.addEventListener("ended", done);
    audio.play().catch(done);
  });
}

// Builds the support address only when someone asks for it, so the address
// never appears in the page source for crawlers to collect.
for (const button of document.querySelectorAll("[data-mail-user]")) {
  button.addEventListener("click", () => {
    const reverse = (value) => [...value].reverse().join("");
    const address = `${reverse(button.dataset.mailUser)}@${reverse(button.dataset.mailHost)}`;
    const link = document.createElement("a");
    link.href = `mailto:${address}?subject=${encodeURIComponent("Learn Hindi support")}`;
    link.textContent = address;
    button.replaceWith(link);
    link.focus();
  });
}

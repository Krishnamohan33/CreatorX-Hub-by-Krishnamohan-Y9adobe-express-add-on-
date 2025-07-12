// code.js

export function handlePromoForm(event) {
  event.preventDefault();

  const gameTitle = document.getElementById('game-title').value.trim();
  const genre = document.getElementById('genre').value;
  const fileInput = document.getElementById('screenshot');
  const previewBox = document.querySelector('.preview-box');

  if (!gameTitle || !fileInput.files.length) {
    previewBox.innerHTML = `<p style="color: #ff5555;">Please enter a title and upload a screenshot.</p>`;
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const imageURL = reader.result;

    // Mock promo layout
    previewBox.innerHTML = `
      <div style="position: relative; border: 2px solid #00ffcc; border-radius: 8px; overflow: hidden;">
        <img src="${imageURL}" alt="Game Screenshot" style="width: 100%; height: auto;" />
        <div style="
          position: absolute;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          width: 100%;
          padding: 10px;
          font-size: 16px;
          font-weight: bold;
        ">
          ${gameTitle} – ${genre}
        </div>
      </div>
    `;
  };

  reader.readAsDataURL(fileInput.files[0]);
}

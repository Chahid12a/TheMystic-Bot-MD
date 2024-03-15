document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('commandInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      if (this.value === '.texte') {
        displayText('هذا هو النص الذي تريد عرضه.');
      }
    }
  });
});

function displayText(text) {
  document.getElementById('displayText').innerText = text;
}

window.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('file-input');
  const convertedText = document.getElementById('converted-text');

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      const convertedContents = contents.toUpperCase();
      convertedText.value = convertedContents;
    };

    reader.readAsText(file);
  });
});

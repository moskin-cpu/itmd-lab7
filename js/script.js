function init(){
  const entryButton = document.getElementById('entrybutton');
  const entryInput = document.getElementById('entryinput');
  const textOutput = document.getElementById('textoutput');

  entryButton.addEventListener('click', () => {
    const inputValue = entryInput.value;
    alert(`Debarlaben: ${inputValue}`);
    textOutput.textContent = inputValue;
  });
}

window.addEventListener('load', init);

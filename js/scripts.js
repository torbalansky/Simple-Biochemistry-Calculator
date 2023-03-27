document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#calculator');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const molarityInput = document.querySelector('#molarity');
  const molarmassInput = document.querySelector('#molarmass');
  const volumeInput = document.querySelector('#volume');
  const massInput = document.querySelector('#mass');

  const molarity = parseFloat(molarityInput.value);
  const molarmass = parseFloat(molarmassInput.value);
  const volume = parseFloat(volumeInput.value);
  const mass = molarity * molarmass * volume;

  if (isNaN(molarity) || isNaN(molarmass) || isNaN(volume)) {
    alert('Please enter valid values for all fields.');
    return;
  }

  massInput.value = mass.toFixed(4).replace(/\.?0+$/, '');

});

const form2 = document.querySelector('#solution-prep-calculator');
form2.addEventListener('submit', (event) => {
  event.preventDefault();

  const initialConcentrationInput = document.querySelector('#initial-concentration');
  const finalConcentrationInput = document.querySelector('#final-concentration');
  const finalVolumeInput = document.querySelector('#final-volume');
  const initialVolume = finalVolumeInput.value / (initialConcentrationInput.value / finalConcentrationInput.value);

  if (initialConcentrationInput.value === "" || finalConcentrationInput.value === "" || finalVolumeInput.value === "") {
    alert("Please enter valid values for all fields.");
    return;
  }

  if (finalConcentrationInput.value > initialConcentrationInput.value) {
    alert('Error: Final concentration cannot be greater than initial concentration.');
    return;
  }

  document.querySelector('#initial-volume').value = initialVolume.toFixed(4).replace(/\.?0+$/, '');
});

});

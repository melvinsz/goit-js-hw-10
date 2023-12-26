import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectRef = document.querySelector('.breed-select');
const catInfoRef = document.querySelector('.cat-info');
const loaderRef = document.querySelector('.loader');
const errorRef = document.querySelector('.error');

loaderRef.style.display = 'block';
errorRef.style.display = 'none';

fetchBreeds()
  .then(response => {
    loaderRef.style.display = 'none';
    response.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat.id;
      option.text = cat.name;
      selectRef.add(option);
    });
  })
  .catch(error => {
    console.log(error);
    errorRef.style.display = 'block';
  });

selectRef.addEventListener('change', onSelect);

function onSelect() {
  loaderRef.style.display = 'block';
  errorRef.style.display = 'none';
  catInfoRef.innerHTML = '';
  fetchCatByBreed(selectRef.value)
    .then(response => {
      const { breeds, url } = response[0];

      const catInfoHTML = `
        <img src="${url}" width="200" alt="${breeds[0].name}" />
        <p>Breed: ${breeds[0].name}</p>
        <p>Description: ${breeds[0].description}</p>
        <p>Temperament: ${breeds[0].temperament}</p>
      `;
      catInfoRef.innerHTML = catInfoHTML;
    })
    .catch(error => {
      console.log(error);
      errorRef.style.display = 'block';
    })
    .finally(() => {
      loaderRef.style.display = 'none';
    });
}

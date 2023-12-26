import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_ZqkPZdnm8M2IBBynHnrZfRNutcYiFbP6y5w4UNAeDKCesMRPy3Fufof5I2mjVbZE';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => error);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => error);
}

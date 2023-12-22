export default function fetchCountries(name) {
  const queryParams = 'name,capital,population,flags,languages';
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?${queryParams}`
  ).then(response => response.json());
}

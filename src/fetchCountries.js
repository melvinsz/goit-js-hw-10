import Notiflix from 'notiflix';

export default function fetchCountries(name) {
  const queryParams = 'name.official,capital,population,flags.svg,languages';
  return fetch(`https://restcountries.com/v3.1/name/${name}?${queryParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

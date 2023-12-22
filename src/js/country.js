import '../css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const ref = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

ref.input.addEventListener('input', debounce(inputFetch, DEBOUNCE_DELAY));

function inputFetch() {
  const name = ref.input.value.trim();
  if (name !== '') {
    fetchCountries(name)
      .then(countries => {
        if (countries.length > 0) {
          renderMarkup(countries);
        } else {
          Notiflix.Notify.failure('Oops, there is no country with that name');
          ref.countryList.innerHTML = '';
          ref.countryInfo.innerHTML = '';
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, something went wrong');
      });
  } else {
    ref.countryList.innerHTML = '';
    ref.countryInfo.innerHTML = '';
  }
}

function renderMarkup(countries) {
  if (countries.length === 1) {
    appendInfoMarkup(countries[0]);
  } else if (countries.length >= 2 && countries.length <= 10) {
    appendListMarkup(countries);
  } else {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

function appendInfoMarkup(country) {
  const { name, capital, population, flags, languages } = country;
  const language = Object.values(languages).join(', ');

  const infoMarkup = `<h1><span><img src='${flags.svg}' height='15'></span> ${name.official}</h1></span> <p>Capital: ${capital}</p> <p>Population: ${population}</p> <p>Languages: ${language}</p>`;
  ref.countryInfo.innerHTML = infoMarkup;
  ref.countryList.innerHTML = '';
}

function appendListMarkup(countries) {
  const listMarkup = countries
    .map(country => {
      const { name, flags } = country;
      return `<li><h1><span><img src='${flags.svg}' height='15'></span>${name.official}</h1></li>`;
    })
    .join('');
  ref.countryList.innerHTML = listMarkup;
  ref.countryInfo.innerHTML = '';
}

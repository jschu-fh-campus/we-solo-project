import '../styles/tailwind.css';
import '../styles/style.scss';

import setupHeader from './header';
import setupPokemonList from './pokemon-list';
import setupFavourites from './favourites';
import setupRandomFrom from './random-form';

window.addEventListener('load', () => {
    setupHeader();
  
    if (document.getElementById('main-pokemon-list') != null) {
      setupPokemonList();
    }
  
    if (document.getElementById('main-favourites') != null) {
      setupFavourites();
    }
  
    if (document.getElementById('main-random-form') != null) {
      setupRandomFrom();
    }
  });

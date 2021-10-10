import '../styles/tailwind.css';
import '../styles/style.scss';

import setupHeader from './header';
import setupItemList from './items';
import setupFavourites from './favourites';
import setupRandomFrom from './random-form';

window.addEventListener('load', () => {
    setupHeader();
  
    if (document.getElementById('main-items') != null) {
      setupItemList();
    }
  
    if (document.getElementById('main-favourites') != null) {
      setupFavourites();
    }
  
    if (document.getElementById('main-random-form') != null) {
      setupRandomFrom();
    }
  });

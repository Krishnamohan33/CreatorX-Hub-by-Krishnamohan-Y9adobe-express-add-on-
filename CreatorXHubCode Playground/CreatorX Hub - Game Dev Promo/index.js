// index.js

import { handlePromoForm } from './code.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.promo-form');
  form.addEventListener('submit', handlePromoForm);
});

import { renderSearchFormBlock, callback, collectSearchParams, search } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData(), getFavoritesAmount())
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
  document
    .getElementById("search-form-block")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      search(collectSearchParams(), callback);
    });
})

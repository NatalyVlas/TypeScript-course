import { renderBlock } from './lib.js'

localStorage.user = JSON.stringify({
  userName: 'Wade Warren',
  avatarUrl: '/img/avatar.png'
})
localStorage.favoritesAmount = JSON.stringify({
  favoriteItemsAmount: 3
})

export function getUserData(user: unknown) {
  console.log(JSON.parse(localStorage.getItem('user')))
}
export function getFavoritesAmount(favoritesAmount: unknown) {
  console.log(JSON.parse(localStorage.getItem('favoritesAmount')))
}


export function renderUserBlock(userName: string, avatarUrl: string, favoriteItemsAmount?: number) {
  const favoritesCaption = (favoriteItemsAmount >= 1) ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = (favoriteItemsAmount >= 1) ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

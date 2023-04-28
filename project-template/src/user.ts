import { renderBlock } from './lib.js'
import { FavouritePlace } from "./search-results.js";

export class User {
  public userName: string;
  public avatarUrl: string;

  constructor(userName: string, avatarUrl: string) {
    this.userName = userName;
    this.avatarUrl = avatarUrl;
  }
}

export function getUserData(): User {
  const user: unknown = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    console.log("Data not found");
    return null;
  }
  if (user instanceof User) {
    return user;
  } else {
    return null;
  }
}

export function getFavoritesAmount(): number {
  const favoriteItems: FavouritePlace[] = JSON.parse(localStorage.getItem("favoriteItems"));
  if (favoriteItems?.length === 0) {
    console.log("Data not found");
    return null;
  }
  return favoriteItems?.length;
}


export function renderUserBlock(user: User, favoriteItemsAmount?: number): void {
  const favoritesCaption = (favoriteItemsAmount >= 1) ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = (favoriteItemsAmount >= 1) ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${user?.avatarUrl}" alt=avatar" />
      <div class="info">
          <p class="name">${user?.userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

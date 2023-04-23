import { renderBlock } from './lib.js'

const date = new Date();
const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
const date2 = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
const lastDate = new Date(date.getTime() + 60 * 24 * 60 * 60 * 1000);

export function renderSearchFormBlock() {

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date"
            value="${tomorrow.getFullYear()}-0${tomorrow.getMonth() + 1}-${tomorrow.getDate()}"
            min="${tomorrow.getFullYear()}-0${tomorrow.getMonth() + 1}-${tomorrow.getDate() + 1}" 
            max="${lastDate.getFullYear()}-0${lastDate.getMonth() + 1}-${lastDate.getDate()}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date"
            value="${date2.getFullYear()}-0${date2.getMonth() + 1}-${date2.getDate()}"
            min="${date2.getFullYear()}-0${date2.getMonth() + 1}-${date2.getDate()}"
            max="${lastDate.getFullYear()}-0${lastDate.getMonth() + 1}-${lastDate.getDate()}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

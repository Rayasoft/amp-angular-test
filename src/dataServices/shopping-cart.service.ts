import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IShoppingCart, ShoppingCartModel } from 'src/Models/shopping.cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCartItems: IShoppingCart[];

  constructor() {
    this._shoppingCartItems = [];
  }

  // this method gets shopping cart items in the local storage (memory)
  get(): Observable<IShoppingCart[]> {
    let observable: Observable<IShoppingCart[]>;
    observable = of<IShoppingCart[]>(this._shoppingCartItems);
    return observable;
  }

  put(item: IShoppingCart): Observable<IShoppingCart[]> {
    const index: number = this._shoppingCartItems.findIndex( x => x.name === item.name);
    // if item exist just increase the qty
    if (index > -1) {
        this._shoppingCartItems[index].qty += item.qty;
        let newTotalPrice = item.totalPrice * 1;
        newTotalPrice += this._shoppingCartItems[index].totalPrice * 1;
        this._shoppingCartItems[index].totalPrice = newTotalPrice;
    } else {
      this._shoppingCartItems.push(item);
    }
    return this.get();
  }
  delete(item: IShoppingCart): Observable<IShoppingCart[]> {
    const index: number = this._shoppingCartItems.findIndex( x => x.name === item.name);
    // if item exist just increase the qty
    if (index > -1) {
        this._shoppingCartItems.splice(index, 1);
    }
    return this.get();
  }
}

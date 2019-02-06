import { IInventory } from './inventory.model';

export interface IShoppingCart {
    // item: IInventory;
    name: string;
    qty: number;
    totalPrice: number;
    retailPrice: number;
}

export class ShoppingCartModel implements IShoppingCart {
    name: string;
    qty: number;
    totalPrice: number;
    retailPrice: number;
    constructor() {}
}

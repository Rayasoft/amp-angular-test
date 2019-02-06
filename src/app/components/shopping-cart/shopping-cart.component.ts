import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

import { IInventory, InventoryModel } from 'src/Models/inventory.model.js';
import { InventoryService } from 'src/dataServices/inventory.service';
import { ShoppingCartService } from 'src/dataServices/shopping-cart.service';
import { ShoppingCartModel, IShoppingCart } from 'src/Models/shopping.cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  // shopping cart table fields to sho
  // Note: action column is used to delete an item from the shopping cart items list
  readonly displayedColumns: string[] = ['name', 'totalPrice', 'qty', 'action'];

  // form variables
  shoppingCartFG: FormGroup;
  // lookups
  inventoryItems: IInventory[];
  // data list and models
   shoppingCartList: IShoppingCart[];
   dataSource:  MatTableDataSource<IShoppingCart>;

  constructor(fb: FormBuilder, private inventoryService: InventoryService, private shoppingCartService: ShoppingCartService) {

    // create form variable group
    this.shoppingCartFG = fb.group({
      name: [undefined, Validators.required],
      price: [0],
      qty: [1],
    });

    // load lookup and data
    this.setDatasource();
    this.loadData();
  }
  ngOnInit() {
  }
  setDatasource() {
    this.dataSource = new MatTableDataSource<IShoppingCart>(this.shoppingCartList);
  }
    // load lookup data
  loadData() {
    this.inventoryService.get().subscribe(
      data => {
        this.inventoryItems = [];
          if (data['inventory'] !== undefined) {
            this.inventoryItems = data['inventory'] as InventoryModel[];
          }
      },
      error => { console.log('Error:', error); }
    );
      this.shoppingCartService.get().subscribe(
        data => {
          this.shoppingCartList = Object.assign(data);
          this.setDatasource();
        }
        );
  }
  // form events/actions
  get isFormValid(): boolean { // check if form is valid to enable Add button
    return this.shoppingCartFG.valid;
  }
  resetGroceryValue() {  // reset form values to add a grocery
    this.shoppingCartFG.patchValue({
        name: undefined,
        price: 0,
        qty: 1
    });
    this.shoppingCartFG.markAsUntouched();
  }
  private setPrice(inQty: number, inPrice: number) {
    const price: number = inQty * inPrice;
    this.shoppingCartFG.get('price').setValue(parseFloat(price.toString()).toFixed(2));
  }
  groceryHasChanged(item: IInventory) {
    const qty = this.shoppingCartFG.get('qty').value;
    this.setPrice(qty , item.price);
  }
  qtyHasChanged() {
    const groceryItem = this.shoppingCartFG.get('name').value;
    if (groceryItem) {
      const qty = this.shoppingCartFG.get('qty').value;
      this.setPrice(qty , groceryItem.price);
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getTotalCost() {
    if (this.shoppingCartList) {
      return this.shoppingCartList.map(t => t.totalPrice).reduce((acc, value) => (acc * 1) + (value * 1), 0);
    }
    return 0;
  }
  // shopping cart actions
  addGrocery() {
    const grocery = this.shoppingCartFG.get('name').value as IInventory;
    // create new shoppingcart to add
    const newShoppingCartItem = new ShoppingCartModel();
    newShoppingCartItem.name = grocery.name;
    newShoppingCartItem.qty = this.shoppingCartFG.get('qty').value as number;
    newShoppingCartItem.totalPrice = this.shoppingCartFG.get('price').value as number;
    newShoppingCartItem.retailPrice = grocery.price;
    // update shopping cart
    this.shoppingCartService.put(newShoppingCartItem).subscribe(
      data => {
        this.shoppingCartList  = Object.assign(data);
        this.setDatasource();
        this.resetGroceryValue();
      });
  }
  removeSelectedRows(item) {
    this.shoppingCartService.delete(item).subscribe(
      data => {
        this.shoppingCartList = Object.assign(data);
        this.setDatasource();
      }
      );
  }
}

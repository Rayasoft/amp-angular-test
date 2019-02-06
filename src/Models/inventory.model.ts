export interface IInventory {
    name: string;
    price: number;
    category: string[];
}

export class InventoryModel implements IInventory {
    name: string;
    price: number;
    category: string[];

    constructor() {
        this.category = [];
    }
}

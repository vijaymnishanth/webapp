export class UndyedYarnPurchase {
    uypId: number;
    yarnTypeId: number;
    yarnCountId: number;
    supplierId: number;
    purchaseDate: Date;
    quantity: number;

    constructor() {
        this.uypId = null;
        this.yarnCountId = 0;
        this.yarnTypeId = 0;
        this.supplierId = 0;
        this.purchaseDate = new Date();
        this.quantity = null;

    }
}

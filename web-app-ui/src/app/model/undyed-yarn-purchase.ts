import { Count } from './count';
import { YarnType } from './yarn-type';
export class UndyedYarnPurchase {
    uypId: number;
    yarnType: YarnType;
    count: Count;
    supplier: number;
    purchaseDate: Date;
    quantity: number;

    constructor() {
        this.uypId = null;
        this.yarnType = new YarnType();
        this.count = new Count();
        this.supplier = null;
        this.purchaseDate = new Date();
        this.quantity = null;

    }
}

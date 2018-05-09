import { Count } from './count';
import { YarnType } from './yarn-type';
export class UndyedYarnDyeing {
    uypId: number;
    yarnType: YarnType;
    count: Count;
    purchaseDate: Date;
    quantity: number;
    dyeingDeliveryChallanNo: string;

    constructor() {
        this.uypId = null;
        this.yarnType = new YarnType();
        this.count = new Count();
        this.purchaseDate = new Date();
        this.quantity = null;
        this.dyeingDeliveryChallanNo = null;

    }
}

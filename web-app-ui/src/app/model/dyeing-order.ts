import { Shade } from './shade';
export class DyeingOrder {
    dyeingOrderId: number;
    dyeingOrderNo: string;
    orderDate: Date;
    shadeId: number;
    shade: Shade;
    countId: number;
    description: string;
    quantity: number;
    customer: string;

    constructor() {
        this.dyeingOrderId = null;
        this.dyeingOrderNo = null;
        this.orderDate = new Date();
        this.shadeId = null;
        this.shade = new Shade();
        this.countId = 0;
        this.description = null;
        this.quantity = null;
        this.customer = null;
    }
}

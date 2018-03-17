import { Count } from './count';
import { Shade } from './shade';
export class DyeingOrder {
    dyeingOrderId: number;
    dyeingOrderNo: string;
    orderDate: Date;
    shadeId: number;
    shade: Shade;
    count: Count;
    description: string;
    quantity: number;
    customer: string;

    constructor() {
        this.dyeingOrderId = null;
        this.dyeingOrderNo = null;
        this.orderDate = new Date();
        this.shadeId = null;
        this.shade = new Shade();
        this.count = new Count();
        this.description = null;
        this.quantity = null;
        this.customer = null;
    }
}

export class DyeingOrderReceived {
    dorId: number;
    dyeingOrderId: number;
    receivedDate: Date;
    receivedQuantity: number;
    dyeingChallanNo: string;

    constructor() {
        this.dorId = null;
        this.dyeingChallanNo = null;
        this.receivedDate = new Date();
        this.receivedQuantity = null;
        this.dyeingChallanNo = null;
    }
}

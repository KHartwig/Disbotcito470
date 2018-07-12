export class Item {
	id: number;
    itemname: string;
    category: string;
    quantity: Number;
    ownerId: Number;
    createdDate: Date;
    status: string;


    constructor(
    ){
        this.itemname = ""
        this.category = ""
        this.quantity = 1
        this.ownerId = 0
        this.createdDate = new Date()
        this.status = "Non Done"
    }
}



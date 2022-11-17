// product
"use strict"

class Product{

    constructor(productId, name, unitPrice, dateSupplied){
        this.productId=productId;
        this.name=name;
        this.unitPrice=unitPrice;
        this.dateSupplied=dateSupplied;

    }

    //Getter
    get productId(){ return this._productId;}
    get name(){ return this._name;}
    get unitPrice(){ return this._unitPrice;}
    get dateSupplied(){ return this._dateSupplied;}

    //setter

    set productId(value){this._productId=value;}
    set name(value){this._name=value;}
    set unitPrice(value){this._unitPrice=value;}
    set dateSupplied(value){this._dateSupplied=value;}


    toString(){
        return `
        {
            productId: ${this._productId},
            Name: ${this._name},
            Unit price : ${this._unitPrice},
            Date Supplied: ${this._dateSupplied}
        }
        
        `;
    }
}                                                                       

const products=[
    new Product(101,"Apple", 1.55, new Date(2022,10,15)),
    new Product(102,"Bananas",0.5,new Date(2022,10,18)),
    new Product(103,"Carrots",1.9,new Date(2022,10,14)),
];

products[0].name="Apple"; //calling a Setter
products.forEach(p=> console.log(p.toString));
const carrots=products[2];
console.log(carrots.dateSupplied);//calling a getter
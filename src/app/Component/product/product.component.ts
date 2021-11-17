import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../ViewModel/icategory'
import {IProduct} from '../../ViewModel/iproduct';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

  public date = Date.now();
  public IsPurshased:boolean=false;
  public selectedDevice :number=0 ;
  public ProductList:IProduct[];
  public SelectedProduct :IProduct[]=[];
  public CategoryList:ICategory[];
  ClientName:string="" ;
  constructor( ) { 

   this.ProductList=[
      {
      ID : 1 ,
      Name :"Iphone 7" ,
    	Quantity : 20,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
     },

     {
      ID : 2 ,
      Name :"Iphone 7" ,
    	Quantity : 1,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
     },

     {
      ID : 3 ,
      Name :"Iphone 13 pro max" ,
    	Quantity : 0,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
     },
    {
      ID : 4 ,
      Name :"Samsung s8" ,
    	Quantity : 10,
    	Price : 200 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
    },
    {
      ID : 5 ,
      Name :"Oppo f7" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
    },
    {
      ID : 6 ,
      Name :"Toushiba Alarabi" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2 ,      
    },
    {
      ID : 7 ,
      Name :"LG 2886E6" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },
    {
      ID : 8 ,
      Name :"Sony 6F566" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },

    {
      ID : 9 ,
      Name :"Sony 6F566" ,
    	Quantity : 1,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },

    ]

    this.CategoryList=[
      {
        ID:1,
        Name:"phones",

      },
      {
        ID:2,
        Name:"TV",

      },

      
    ]
    
  this.onChange() ;
}


onChange() {

  if (this.selectedDevice==0)
         this.SelectedProduct=this.ProductList;
     else
       this.SelectedProduct = this.ProductList.filter((product)=>product.CateogryID==this.selectedDevice)

}

decreadeQuantity(item:IProduct){


  this.SelectedProduct.map(Item=>{
    if(Item.ID==item.ID)
     Item.Quantity--;
  })
  
}


}

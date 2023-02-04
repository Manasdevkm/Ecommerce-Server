//1 import monggoose
const mongoose = require('mongoose');
const { stringify } = require('querystring');

//2 definer connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
            console.log('connected to mongoDB');
})

//3 model creation 
const Product=mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }


})
  // create a new collection in mongodb- create a model
  const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    image:String,  
    description:String
    

      })

// 4 export

module.exports={
    Product,
    Wishlist
}
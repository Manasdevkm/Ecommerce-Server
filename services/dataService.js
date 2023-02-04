const { default: mongoose } = require('mongoose')
const db = require('./db')

// get all the products from db

const getProducts =()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No products found'
                }
            }

        }
    )
    }
    // addtowishlist details to store to db
    const addtowishlist = (id,title,price,description,image)=>{

        return db.Wishlist.findOne({id}).then(
            (result)=>{
                if(result){
                    return{
                        status:false,
                        statusCode:401,
                        message:'product already added'
                    }
                }
                else{


            const newProduct= new db.Wishlist({
                id,title,price,description,image
            })
            newProduct.save()
            return{
                status:true,
                statusCode:200,
                message:'product added successfully'
            }
                }
            }
        )
        }

        // // get wishlist products from db
        const getwishlist=()=>{
            return db.Wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                            status:true,
                            statusCode:200,
                            products:result
                        }
                    }
                    else{
                        return{
                            status:false,
                            statusCode:404,
                            message:'wishlist is empty'
                        }
                    }
        
                }
            )
            }
//delete the wishlist product from db

            const deletewish =(id)=>{
                return db.Wishlist.deleteOne({id}).then(
                    (result)=>{
                        if(result){
                            return{
                                status:true,
                                statusCode:200,
                                message:"Product removed successfully"
                                
                            }
                        }
                        else{
                            return{
                                status:false,
                                statusCode:404,
                                message:'Product not found'
                            }
                        }
            
                    }
                )
                }

    module.exports={
        getProducts,
        addtowishlist,
        getwishlist,
        deletewish

    }
    
    
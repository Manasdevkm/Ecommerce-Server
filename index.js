const express=require('express')

const cors=require('cors')
// data service import
const dataService = require('./services/dataService')
const app = express();

// to parse JSON
app.use(express.json())


// setup a port number

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

// 

app.use(cors({
    origin:'http://localhost:4200'
}))

// API to get all products

app.get('/all-products',(req,res)=>{   
    dataService.getProducts().then(
        result=>{

        res.status(result.statusCode).json(result)
    }
    )
})


// API call to add to products
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image,).then(
    result=>{

        res.status(result.statusCode).json(result)
    })  
   
})

// API call to get wishlist products
app.get('/getwishlist', (req,res) => {
    dataService.getwishlist().then
    (result => {
            res.status(result.statusCode).json(result)
    })  
   
})

// API to delete wishlist products

app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
    result =>{
            res.status(result.statusCode).json(result)
    }
    )  
   
})
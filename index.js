import express from 'express';
const app = express();
app.use(express.json());
let products =[
    {
        id:1,
        name:"Headphone",
        price:4500,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7JLSUlK8hNjztyibsGRp42KQSdAWNTh5cVrAQBGBEQ&s=10",
        desc:"A comfortable and high quality headset.",
    },
        {
        id:2,
        name:"Laptop",
        price:45000,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XSqMQZ75T5sX8wgSBPO3ToWcDTiYKJ26k19ajlyP5Q&s=10",
        desc:"A comfortable and high quality Laptop.",
    }
]

app.get("/products",(req,res)=>{
    try{
res.status(200).json(products);
    }
    
    catch(error){
        console.log(error);
res.status(500).json({message:"something went Wrong"})
    }
});
app.post("/products",(req,res)=>{
    const newProduct = req.body;
products.push(newProduct);
res.status(201).json(newProduct);
});



















app.listen(5050,()=>{
    console.log("server is running on port 5050")
})
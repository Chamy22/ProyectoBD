import express from 'express';
const app = express()
app.use(express.urlencoded({extended:true}))


const products = [
    {id:"1",title: "Producto 1",
    description: "Descripcion de producto 1",
    price: 50.80,
    thumbnail: "ruta/imagen2.jpg",
    code: "P2",
    stock: 5},
    {id:"2",title: "Producto 2",
    description: "Descripcion de producto 2",
    price: 39.50,
    thumbnail: "ruta/imagen1.jpg",
    code: "P1",
    stock: 10},
    {id:"3",title: "Producto 3",
    description: "Descripcion de producto 3",
    price: 60,
    thumbnail: "ruta/imagen3.jpg",
    code: "P3",
    stock: 8},
    {id:"4",title: "Producto 4",
    description: "Descripcion de producto 4",
    price: 80,
    thumbnail: "ruta/imagen4.jpg",
    code: "P4",
    stock: 7},
    {id:"5",title: "Producto 5",
    description: "Descripcion de producto 5",
    price: 32.68,
    thumbnail: "ruta/imagen5.jpg",
    code: "P5",
    stock: 3},
    {id:"6",title: "Producto 6",
    description: "Descripcion de producto 6",
    price: 110,
    thumbnail: "ruta/imagen6.jpg",
    code: "P6",
    stock: 18},
    {id:"7",title: "Producto 7",
    description: "Descripcion de producto 7",
    price: 96.3,
    thumbnail: "ruta/imagen7.jpg",
    code: "P7",
    stock: 35},
    {id:"8",title: "Producto 8",
    description: "Descripcion de producto 8",
    price: 60,
    thumbnail: "ruta/imagen8.jpg",
    code: "P8",
    stock: 5},
    {id:"9",title: "Producto 9",
    description: "Descripcion de producto 9",
    price: 20,
    thumbnail: "ruta/imagen9.jpg",
    code: "P9",
    stock: 45},
    {id:"10",title: "Producto 10",
    description: "Descripcion de producto 10",
    price: 300,
    thumbnail: "ruta/imagen10.jpg",
    code: "P10",
    stock: 12},4
]

 app.get('/Product',(req,res) =>{
    res.send({products})
}),

app.get('/:idProduct', (req,res) =>{
    let idProduct = req.params.idProduct;

    let product = products.find(u=>u.id===idProduct);
    if(!product) return res.send({error:"Product no encontrado"})

    res.send({product})
}),

app.listen(8080, ()=> console.log('Servidor arriba en el puerto 8080')) 
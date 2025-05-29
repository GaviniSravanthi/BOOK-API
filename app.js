const express=require('express');
const app=express();
const PORT=3000;

//middleware
app.use(express.json());
//Book routes
const bookRoutes=require('./books');
app.use('/books',bookRoutes);
//start server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});

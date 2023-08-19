const mongoose=require('mongoose');
const database_address=process.env.DATABASE_ADDRESS;
mongoose.connect(database_address)
.then(()=>{
    console.log('Database connected');
})
.catch(()=>{
    console.log('Database not connected');
})

module.exports=mongoose;
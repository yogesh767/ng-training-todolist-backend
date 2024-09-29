const express =require('express')
const todosRouter=require('./routers/todosRouter')
const cors=require('cors')
require('dotenv').config()



const app = express();

const PORT=process.env.PORT
console.log(process.env.PORT) 
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({origin:true}))

app.use("/todos",todosRouter); // todos router

app.listen(PORT,()=> {
    console.log("server is up and running on port ",PORT)
})

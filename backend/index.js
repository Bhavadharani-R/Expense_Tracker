const express = require('express')
const cors = require('cors');
const {db} = require('./db/db')
const {readdirSync} = require('fs')
const app = express();
const userRoutes = require('./routes/Users');
const authRoutes = require('./routes/auth')


require('dotenv').config()


const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' +route)))

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const server = () =>{
   db()
   app.listen(PORT, ()=>{
    console.log('listening to port:', PORT)
   })
}
server()





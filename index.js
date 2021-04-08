const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000
const path = require('path')

app.use('/api/',(_,res)=>{
    res.json({data:`API is accounted for`})
})
app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))


app.listen(port, () => {
    console.log(`server is alive on port ${port}`)
})

// console.log('Houston, we have liftoff')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
const express = require('express') 
const cors = require('cors')
const app = express() 
const PORT = proccess.env.PORT || 3050
app.use(express.json())
app.use(cors())


app.get("/") = (req,res)=>{
    res.send("welcome to home page")
}

app.get("/about") = (req,res)=>{
    res.send("welcome to abut page")
}

app.listen(PORT, () => {
    console.log('server running on port', PORT)
})
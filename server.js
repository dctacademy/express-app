const express = require('express') 
const cors = require('cors')
const app = express() 
const PORT = proccess.env.PORT || 3050
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log('server running on port', PORT)
})
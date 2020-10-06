const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000


app.get('' , (req,res,next)=> {
    res.json({
        success:true,
        data:'api çalışıyor'
    })
})


app.listen(PORT, ()=> {
     console.log('asşldkfsaşlkdfj')
})
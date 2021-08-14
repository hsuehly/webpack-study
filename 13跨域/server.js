const express = require("express")

const app = express()

app.listen(3000,()=> {
  console.log("服务器启动")
})

app.get('/api/users',(req,res)=> {
  res.json({
    name: 'web前端'
  })
})
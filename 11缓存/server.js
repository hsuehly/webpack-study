
const express = require("express")

const app = express()

//托管静态资源                  // 缓存时长为一小时
app.use(express.static("dist",{maxAge: 1000*3600}))

app.listen(8080,()=>{
  console.log("服务器启动")
});
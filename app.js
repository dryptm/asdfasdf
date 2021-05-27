const express= require("express")
const bodyparser= require("body-parser")
const app= express()
app.use(express.static("public"))

app.get("/",function(request,response){
response.sendFile(__dirname+"/index.html")
})



app.listen(process.env.PORT|| 3000, function(){
  console.log("server started on 3000")
})

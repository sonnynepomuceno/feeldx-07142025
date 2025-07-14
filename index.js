const express=require('express')

const app =express()
const port= process.env.PORT || 8090
const router=express.Router()

app.use(express.static(`${__dirname}/dist`))

app.engine('.html',require('ejs').renderFile)

app.set('views',`${__dirname}/dist`)

router.get('/*',(req,res,next) =>{
    res.sendfile(`${__dirname}/dist/index.html`)
})

app.use('/',router)

app.listen(port)
console.log('App running in port',port)
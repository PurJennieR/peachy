const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json()) 

const port = 8000
let users = []
let count = 1

// path = / เรียกข้อมูลทั้งหมด
app.get('/users',(req,res)=>{
   const fillter = users.map(user=>{
    return {
        id:user.id,
        firstname : user.firstname,
        lastname : user.lastname,
        fullname : user.firstname + " " + user.lastname
    }
   })
   res.json(fillter)
})

//สร้างข้อมูล และ กำหนด ID ให้ข้อมูล
app.post('/user',(req,res)=>{
    let user = req.body
    user.id = count
    count += 1
    users.push(user)

    res.json({
        message : 'add complete',
        data : user
    })
})

// เรียกข้อมูลออกมาโดยระบุตามไอดี
app.get('/users/:id',(req,res)=>{
    let id = req.params.id
    res.send(id)
})

// Update ข้อมูล โดยใช้ path และ id เพื่อระบุข้อมูลที่จะแก้ 
app.put('/users/:id',(req,res)=>{
    let id = req.params.id
    let updateUser = req.body

    // หา users จาก id ที่ส่งมา
    let selecetindex = users.findIndex(user.id == id)

    // update user นั้น
    users[selecetindex].firstname = updateUser.firstname || users[selecetindex].firstname
    users[selecetindex].lastname = updateUser.lastname || users[selecetindex].lastname
    users[selecetindex].age = updateUser.age || users[selecetindex].age
    users[selecetindex].gender = updateUser.gender || users[selecetindex].gender

    res.json({
        massage : 'Update user complate !!' ,
        data :{
            user : updateUser,
            indexUpdate : selecetindex
        }
    })
})


app.listen(port,(req,res)=>{
    console.log("https run at " + port)
}

app.delete('/users/:id',(req,res)=>{
    let id = req.params.id
    let selecetindex = user.findIndex(user => user.id == id)

    user.splice(selecetindex,1)

    res.json
        message ; "delete complete",
        indexDelete ; selecetindex
})
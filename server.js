import { PrismaClient } from '@prisma/client'
import express from 'express'


const prisma = new PrismaClient()

const app = express()
app.use(express.json())




app.get('/usuario',(req, res) => {


    res.status(200).json(users)
})


app.post('/usuario', async(req,res) => {
  await prisma.user.create({
    data: {
        email:req.body.email,
        age:req.body.age,
        name:req.body.name
    

    }
  })

    res.status(201).json({mensagem:"usuario cadastrado com sucesso"})
})


app.listen(3000)
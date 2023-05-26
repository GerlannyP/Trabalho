 import Fastify from 'fastify' 
 import cors from '@fastify/cors' 
 import { PrismaClient } from '@prisma/client' 
  
 const prisma = new PrismaClient() 
 const fastify = Fastify() 
 fastify.register(cors, {  
    
 }) 
  
 fastify.post('/cadastro', async (req, res) => {
   const UrsoPolar = await prisma.ursopolar.create({ 
     data: { 
       nome: req.body.Nome, 
       idade: req.body.Idade, 
       tamanho: req.body.tamanho
     } 
   }) 
   res.send('Criado com sucesso') 
 }) 
  
 fastify.get('/busca/:nome',async(req , res) => { 
   let nome = req.params.nome 
   let UrsoPolar = await prisma.ursopolar.findMany({ 
     where: { 
       nome: { 
         contains: nome 
       } 
     } 
   }) 
   reply.send(ursopolar) 
 }) 
  
 fastify.get('/busca/todos', async(req , res) => { 
   let nome = req.params.nome 
   let UrsoPolar  = await prisma.ursopolar.findMany() 
   reply.send(ursopolar) 
 }) 
  
 fastify.put('/atualizar/:nome', async(req, res) =>{ 
   let nome = req.params.nome 
   await prisma.UrsoPolar.update({ 
     where: { 

       nome: nome 
     }, 
     data: { 
       nome: req.body.Nome, 
       idade: req.body.Idade, 
       tamanho: req.body.tamanho 
     } 
   }) 
  
   let mostrar = await prisma.ursopolar.findUnique({ 
     where: { 
       nome: req.body.Nome 
     } 
   }) 
   reply.send(mostrar) 
 }) 
  
  
 fastify.delete('/deletar/:nome', async(req , res) => { 
   let nome = req.params.nome 
   let UrsoPolar = await prisma.ursopolar.delete({ 
     where: { 
       nome: nome 
     } 
   }) 
   reply.send("Urso Polar apagado com sucesso") 
 }) 
  
 fastify.listen({ port: 3000 }) 
 console.log('Online')

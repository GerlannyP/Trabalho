import Fastify from 'fastify' 
 import cors from '@fastify/cors' 
 import { PrismaClient } from '@prisma/client' 
  
 const prisma = new PrismaClient() 
 const fastify = Fastify() 
 fastify.register(cors, {  
    
 }) 
  
 fastify.post('/cadastro', async(req : any, reply : any) => { 
   const UrsoPolar = await prisma.UrsoPolar.create({ 
     data: { 
       nome: req.body.Nome, 
       idade: req.body.Idade, 
       tamanho: req.body.tamanho
     } 
   }) 
   reply.send('Criado com sucesso') 
 }) 
  
 fastify.get('/busca/:nome', async(req: any, reply : any) => { 
   let nome = req.params.nome 
   let UrsoPolar = await prisma.UrsoPolar.findMany({ 
     where: { 
       nome: { 
         contains: nome 
       } 
     } 
   }) 
   reply.send(UrsoPolar) 
 }) 
  
 fastify.get('/busca/todos', async(req: any, reply : any) => { 
   let nome = req.params.nome 
   let UrsoPolar = await prisma.UrsoPolar.findMany() 
   reply.send(UrsoPolar) 
 }) 
  
 fastify.put('/atualizar/:nome', async(req: any, reply : any) => { 
   let nome = req.params.nome 
   await prisma.UrsoPolar.update({ 
     where: { 
       nome: nome 
     }, 
     data: { 
       nome: req.body.Nome,  
       idade: req.body.Idade, 
       vacinado: req.body.Vacinado 
     } 
   }) 
  
   let mostrar = await prisma.UrsoPolar.findUnique({ 
     where: { 
       nome: req.body.Nome 
     } 
   }) 
   reply.send(mostrar) 
 }) 
  
  
 fastify.delete('/deletar/:nome', async(req: any, reply : any) => { 
   let nome = req.params.nome 
   let UrsoPolar= await prisma.UrsoPolar.delete({ 
     where: { 
       nome: nome 
     } 
   }) 
   reply.send("UrsoPolar apagado com sucesso") 
 }) 
  
 fastify.listen({ port: 3000 }) 
 console.log('Online')

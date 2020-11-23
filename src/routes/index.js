const express = require('express') //configuração de rota. importando arquivo
const routes = express.Router()//metodo router, faz com que a variavel seja responsavel pelas rotas

const HomeController = require('../app/controllers/HomeController')

const products = require('./products')
const users = require('./users')

routes.use('/users', users)


// Home
routes.get('/', HomeController.index)

routes.use('/products', products)
routes.use('/users', users)

// Alias
routes.get('/ads/create', function (req,res){
    return res.redirect("/products/create") /// está redirecionando para a instructors
})


// Alias
routes.get('/accounts', function (req,res){
    return res.redirect("/users/login") /// está redirecionando para a instructors
})


module.exports = routes//exportando arquivos
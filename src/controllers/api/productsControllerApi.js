const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const productsControllerApi = {
    list: (req, res) => {
            db.Product.findAll()
                .then(products => {
                    let respuesta = {
                        meta : {
                            status : 200,
                            total : products.length,
                            url : 'api/products'
                        },
                        data : products
                    }
                    res.json(respuesta)
                })
        },
    
    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(products => {
            let respuesta = {
                meta : {
                    status : 200,
                    total : products.length,
                    url : 'api/products/detail/:id'
                },
                data : products
            }
            res.json(respuesta)
        })
},
    byCategory: (req, res) => {
        db.Product.findAll({
            where: { category_id: req.params.category_id }
        })
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products/:category_id'
                },
                data: products
            }
                res.json(respuesta);
        })
        .catch(error => console.log(error))
    },


    create: (req,res) => {
        const { name, price, discount, category_id, description, packaging_id, stock , image } = req.body;
        
        db.Product.create(
            {
                name: name,
                price: price,
                discount: discount,
                category_id: category_id,
                description: description,
                packaging_id: packaging_id,
                image: image,
                stock: JSON.parse(stock),
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
        .catch(error => res.send(error))    
    },


    update: (req,res) => {
        let productsId = req.params.id;

        const { name, price, discount, category_id, description, packaging_id, stock , image } = req.body;

        db.Product.update(
            {
                name: name,
                price: price,
                discount: discount,
                category_id: category_id,
                description: description,
                packaging_id: packaging_id,
                image: image,
                stock: JSON.parse(stock),
            },
            {
                where: {id: [productsId]}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/products/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },

    destroy: (req,res) => {
        let productsId = req.params.id;
        db.Product.destroy(
            {where: {id: productsId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/products/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
}

module.exports = productsControllerApi;
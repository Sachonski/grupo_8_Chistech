const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const salesControllerApi = {
    list: (req, res) => {
        db.Sale.findAll()
            .then(sales => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: sales.length,
                        url: 'api/sales'
                    },
                    data: sales
                }
                res.json(respuesta)
            })
    },

    sales: (req, res) => {
        db.Sale.findAll({
            group: ["invoice"]
        })
            .then(sales => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: sales.length,
                        url: 'api/sales/sales'
                    },
                    data: sales
                }
                res.json(respuesta)
            })
    },

    top5: (req, res) => {
            sequelize.query('select products.name , count(*) AS cantidad  from sales inner join products on sales.product_id=products.id  group by sales.product_id ORDER BY cantidad DESC LIMIT 5', { raw: true })
            .then(sales => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: sales.length,
                        url: 'api/sales/top5'
                    },
                    data: sales
                }
                res.json(respuesta);
            })
            .catch(error => console.log(error))
    },

    last: (req, res) => {
        db.Sale.findAll({
            order: [
                ['date', 'DESC']
            ],
            limit: 5
        })
            .then(sales => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: sales.length,
                        url: 'api/sales/last'
                    },
                    data: sales
                }
                res.json(respuesta)
            })
    },


    update: (req, res) => {
        let productsId = req.params.id;

        const { name, price, discount, category_id, description, packaging_id, stock, image } = req.body;

        db.Sale.update(
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
                where: { id: [productsId] }
            })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/sales/update/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/sales/update/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },

    destroy: (req, res) => {
        let productsId = req.params.id;
        db.Sale.destroy(
            { where: { id: productsId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/sales/destroy/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/sales/destroy/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },

    
    categories: (req, res) => {
        db.Category.findAll()
            .then(Cat => {
                let respuesta = {
                    meta : {
                        status : 200,
                        total : Cat.length,
                        url : 'api/sales/category'
                    },
                    data : Cat
                }
                res.json(respuesta)
            })
    },
    

}

module.exports = salesControllerApi;
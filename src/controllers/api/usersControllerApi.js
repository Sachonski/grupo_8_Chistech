const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");
const bcryptjs = require("bcryptjs");

const usersControllerApi = {
  list: (req, res) => {
    db.User.findAll()
      .then((users) => {
        let respuesta = {
          meta: {
            status: 200,
            total: users.length,
            url: "api/users",
          },
          data: users,
        };
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },

  detail: (req, res) => {
    db.User.findByPk(req.params.id)
      .then((users) => {
        let respuesta = {
          meta: {
            status: 200,
            total: users.length,
            url: "api/users/detail/:id",
          },
          data: users,
        };
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },

  create: (req, res) => {
    let user = req.body;

    let { first_name, last_name, user_name, birth, password, email, admin } =
      user;

    db.User.create({
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
      email: email,
      birth: birth,
      password: bcryptjs.hashSync(password, 10),
      admin: admin,
    })
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/users/create",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/users/create",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },

  update: (req, res) => {
    let id = req.params.id;
    let user = req.body;

    db.User.update(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        user_name: user.user_name,
        email: user.email,
        birth: user.birth,
        password: bcryptjs.hashSync(user.password, 10),
      },
      {
        where: { id: [id] },
      }
    )
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/users/update/:id",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/users/update/:id",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },

  destroy: (req, res) => {
    let usersId = req.params.id;
    db.User.destroy({ where: { id: usersId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/users/destroy/:id",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/users/destroy/:id",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = usersControllerApi;

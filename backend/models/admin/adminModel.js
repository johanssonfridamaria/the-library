const Admin = require('./adminSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');

exports.registerAdmin = (req, res) => {

  Admin.find({ email: req.body.email })
    .then(exists => {
      if (exists.length > 0) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address is already taken'
        })
      }

      const salt = bcrypt.genSaltSync(10);
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed when encrypting password'
          })
        }

        const admin = new Admin({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          passwordHash: hash
        })

        admin.save()
          .then(() => {
            res.status(201).json({
              statusCode: 201,
              status: true,
              message: 'The Admin was created successfully'
            })
          })
          .catch(() => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed to create Admin'
            })
          })
      })
    })
}
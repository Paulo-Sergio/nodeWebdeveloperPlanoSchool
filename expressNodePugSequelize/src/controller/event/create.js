const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {

  Event
    .create(req.body)
    .then(() => {
      return res.redirect('/events')
    })
    .catch(() => {
      
    })

}
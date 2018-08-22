const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {

  Event
    .update(req.body, { where: { id: req.params.id } })
    .then(() => {
      return res.redirect('/events')
    })
    .catch((err) => {
      console.log(err)
    })

}
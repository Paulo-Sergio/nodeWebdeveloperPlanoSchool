import Bill from './../schema/Bill'

export default (req, res) => {

  Bill
    .find({})
    .then((bills) => {
      if (!bills || !bills.length) {
        return res.status(404).json({ status: false, data: [] })
      }

      return res.status(200).json({ status: true, data: bills })
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).json({ status: false, data: [] })
    })

}
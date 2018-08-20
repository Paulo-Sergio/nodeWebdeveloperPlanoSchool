module.exports = (req, res) => {

  /**
   * Utilizando o passport, dentro do req já existe uma function de logout
   */
  req.logout()

  return res.redirect('/auth')
}
const Post = require('./../../models/post')
const slugify = require('slugify')

module.exports = async (req, res) => {
  req.body.slug = slugify(req.body.title, { lower: true }) // criando slug do titulo

  const post = new Post(req.body)

  try {
    const saved = await post.save()
    return res.status(201).json({ post: saved })
  } catch (err) {
    return res.status(500).json({ err })
  }

}
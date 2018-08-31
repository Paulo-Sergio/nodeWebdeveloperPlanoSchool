const Post = require('./../../models/post')

module.exports = async (req, res) => {

  try {
    const { slug } = req.params
    if (!slug) {
      return res.status(404).end()
    }

    const post = await Post.findOne({ slug })
    return res.status(200).json({ post: post || {} })

  } catch (error) {
    return res.status(500).json({ error })
  }

}
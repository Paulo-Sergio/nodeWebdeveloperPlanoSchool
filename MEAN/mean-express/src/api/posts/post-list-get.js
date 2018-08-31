const Post = require('./../../models/post')

module.exports = async (req, res) => {

  try {
    
    const posts = await Post.find({})
    return res.status(200).json({ posts })

  } catch (error) {
    return res.status(500).json({ error })
  }

}
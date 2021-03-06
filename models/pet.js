const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  postedBy: String,
  comment: String
}, {
  timestamps: true
})

const petSchema = new Schema({
  name: String,
  type: String,
  age: Number,
  comments: [commentSchema],
  owner: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

module.exports = mongoose.model("Pet", petSchema)
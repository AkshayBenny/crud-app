const mongoose = require('mongoose')
const { Schema } = mongoose

const ProjectSchema = new Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
})

module.exports = mongoose.model('Project', ProjectSchema)

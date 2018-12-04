const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  github: { type: String, required: true },
  link: String,
  img: { type: String },
  hasSite: { type: Boolean }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

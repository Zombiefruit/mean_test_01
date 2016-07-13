var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

// Defining a model called post, with certain properties, and then registering it
// with the global mongoose model, so that it can be used anywhere we import mongoose
mongoose.model('Post', PostSchema);

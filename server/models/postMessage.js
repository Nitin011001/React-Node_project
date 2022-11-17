import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  Place: String,
  Describe: String,
  FullName: String,
  tags: [String],
  UploadPhoto: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

import { Document, model, Schema } from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2")
export interface Ipost extends Document {

  enabled: boolean,
  author: object,
  likes?: string[],
  content?: string,
  image?: string,
  comments?: string[],
  reports?: string[],
  disable?:string[],
}

const postSchema = new Schema({
  enabled: {
    type: Boolean,
    required: true,
  },
  author: {},
  likes: [],
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  comments: [],
  reports:[],
  disable:[]
});

postSchema.plugin(mongoosePaginate)

const Post = model<Ipost>("post", postSchema);
module.exports = Post;

const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')


let postID = 200 /// deals with id not incrementing issue
function newPostToDB(post) {
  postID++
  console.log(post.user)
  slug = uuidv1();
  return db.raw("INSERT INTO posts (id, attagory_id, post_author, title, content, slug) VALUES (?, ?, ?, ?, ?, ?)", [
    postID,
    post.params.attagory,
    post.user.id,
    post.body.title,
    post.body.content,
    slug
  ]);
}


  module.exports = {
    newPostToDB: newPostToDB
  }
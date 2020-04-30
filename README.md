# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Blog App

Your task is to build a blog using MongoDB, Mongoose, Express, and React

Your app should include the following:

- CRUD on the backend (an api where you can create, read, update, and delete blog posts)
- CRUD on the frontend (a react frontend that has axios calls that can create, read, update, and delete blog posts)

**Bonus**: 

Include the concept of a user:
- A "post" belongs to a user
- A user can have many posts

Here is an example schema:

```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }]
  },
  { timestamps: true }
)
```

```
const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true }
)
```

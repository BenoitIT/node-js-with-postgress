import express from 'express';
import {createPost,viewPost,readOnePost,viewPostByUsername} from './controllers/posts';
import {createUser,viewUser,readOne,deleteUser,updateUser} from './controllers/user';
import {createComment,readOneComment,viewCommentsByPost} from './controllers/comments.';
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({message:'app opned'})
})
app.post('/api/users/newuser',createUser);
app.get('/api/users/all',viewUser);
app.get('/api/users/:id',readOne);
app.post('/api/posts/newpost',createPost);
app.get('/api/post/all',viewPost); 
app.get('/api/post/:id',readOnePost);
app.delete('/api/users/:id',deleteUser);
app.patch('/api/users/:id',updateUser);
app.get('/api/users/posts/:id',viewPostByUsername);
app.post('/api/posts/newcomment',createComment);
app.get('/api/posts/comments/:id',readOneComment);
app.get('/api/posts/:id/comments',viewCommentsByPost);
app.listen(3000,()=>console.log('listening on port'));
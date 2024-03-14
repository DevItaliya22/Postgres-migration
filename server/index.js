
import express from 'express';
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

const app = express();

const createUser = async () => {
    const newUser = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    });
    console.log('Created user:', newUser);
  };
 
  const createPost = async () => {
    const newPost = await prisma.post.create({
      data: {
        title: 'New Post',
        content: 'This is the content of the new post',
        published: true,
        authorId: 1, 
      },
    });
    console.log('Created post:', newPost);
  };
  
  createUser();
  createPost();
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

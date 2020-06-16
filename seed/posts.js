const db = require('../db/connection');
const User = require('../models/user');
const Post = require('../models/post');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const users = [
    {
      username: 'pcho90',
      email: 'pcho51990@gmail.com'
    },
    {
      username: 'oishiiiii',
      email: 'oishiiiii@gmail.com'
    },
    {
      username: 'RICEBOI',
      email: 'riceboi@gmail.com'
    },
    {
      username: 'mmbapmashida',
      email: 'mmbapmashida@gmail.com'
    }
  ];

  await User.insertMany(users);

  const pcho90 = await User.findOne({ username: 'pcho90' });
  const oishiiiii = await User.findOne({ username: 'oishiiiii' });
  const RICEBOI = await User.findOne({ username: 'RICEBOI' });

  const posts = [
    {
      title: 'Post 001',
      imgUrl:
        'https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: pcho90._id
    },
    {
      title: 'Post 002',
      imgUrl:
        'https://images.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: oishiiiii._id
    },
    {
      title: 'Post 003',
      imgUrl:
        'https://i.ibb.co/XkKm1pM/assorted-color-paint-brush-stroke-1672850.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: RICEBOI._id
    },
    {
      title: 'Post 004',
      imgUrl:
        'https://images.unsplash.com/photo-1580380853934-834251ec0e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: pcho90._id
    },
    {
      title: 'Post 005',
      imgUrl:
        'https://images.unsplash.com/photo-1531826338556-162edb086560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: oishiiiii._id
    },
    {
      title: 'Post 006',
      imgUrl:
        'https://i.ibb.co/bJrPBSQ/steve-johnson-n-WYz-Sj-Ac0e-E-unsplash-Cropped.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: RICEBOI._id
    },
    {
      title: 'Post 007',
      imgUrl:
        'https://i.ibb.co/QnZWFXJ/blue-green-and-brown-abstract-painting-3582425.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: pcho90._id
    },
    {
      title: 'Post 008',
      imgUrl:
        'https://images.unsplash.com/photo-1577915509669-e8daeb28b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: oishiiiii._id
    },
    {
      title: 'Post 009',
      imgUrl:
        'https://images.unsplash.com/photo-1575986711002-b1e7452c8b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: RICEBOI._id
    },
    {
      title: 'Post 010',
      imgUrl: 'https://i.ibb.co/jJntzzb/painting-wallpaper-1070527.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: pcho90._id
    },
    {
      title: 'Post 011',
      imgUrl:
        'https://i.ibb.co/qy7f9cb/orange-and-multicolored-abstract-painting-2784948.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: oishiiiii._id
    },
    {
      title: 'Post 012',
      imgUrl:
        'https://i.ibb.co/kh7C2M5/steve-johnson-RLy-Ez-Lmh-R98-unsplash-1-Cropped.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: RICEBOI._id
    }
  ];

  await Post.insertMany(posts);

  const postsOne = await Post.find({ user: pcho90 });
  const postsTwo = await Post.find({ user: oishiiiii });
  const postsThree = await Post.find({ user: RICEBOI });

  await pcho90.updateOne({ posts: postsOne });
  await oishiiiii.updateOne({ posts: postsTwo });
  await RICEBOI.updateOne({ posts: postsThree });

  console.log('Created users and posts!');
};

const run = async () => {
  await main();
  db.close();
};

run();

import React, {useState, useEffect} from 'react'
import './HomePage.Style.css'
import Layout from '../../shared/Layout'
import { getPosts } from '../../../services/posts'
import Post from '../../Post'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPosts();
      setPosts(response);
      console.log(response)
    }
    fetchData();
   }, []);


  return <Layout>{posts.map(post => <Post {...post} />)}</Layout>
}

export default HomePage
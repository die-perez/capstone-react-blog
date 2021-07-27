import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Post from './components/Post'
import Header from './components/Header'
import Blog from './components/Blog'
import AddPost from './components/AddPost'


function App() {
  // state holding blog posts
  const [posts, setPosts] = useState([])
      
      async function fetchPosts(){
          try {
              const url = `http://localhost:3000/posts`
              const response = await axios.get(url)
              let responseData = (response.data.posts)
              console.log(responseData)

              // set state
              setPosts(responseData)

          } catch(err) {
              console.log(err)
          }
      }

      useEffect(() => {
          fetchPosts()
      }, [])




  return (
    <div className="App">
      <Header />
        <Router>
          <Route exact path="/posts" render={() => <Blog posts={ posts } /> } />
          <Route
              path="/posts/:id"
              render={(props) => {
                  console.log(props)
                  const foundPost = posts.find(onePost => onePost.id.toString() === props.match.params.id) || {tags:[]}
                  console.log(foundPost)
                  props = { ...props, ...foundPost}
              return <Post {...props} />
              }}
          />
        </Router>
      <AddPost />
    </div>
  )
}

export default App;

import { Box } from '@mui/system';
import React, { useState } from 'react'
import Card from '../components/Card';

const RenderCards = ({data,title}) => {
  if(data?.length > 0){
    return data.map((post) => <Card key={post.id} {...post}/>)
  }

  return (
    <h3 align="center">
      {title}
    </h3>
  )
}

const Home = () => {

  // states 
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('abc');


  return (
    <Box>
      {/* heading  */}
      <Box align="center" m={3}>
        <h1>Creative Space</h1>
        <br/>
        <p>Browse through collection of innovative and unique AI generated images from user-suggested keywords!</p>
      </Box>

      {/* search image based on keyword or its description --IMPLEMENT LATER */}

      {/* image grid showcase */}
      <Box>
        {/* <h1>working</h1> */}
        {loading ? (

          //if loading is true
          <Box align="center">
            <img src={require('../assets/loading.gif')} alt="Loading..." ></img>
          </Box>
        ):(

          //if loading is false
          <>
            {searchText && (
              <h2 align="center">Showing results for {searchText} : </h2>
            )}

            <div>
              {searchText ? (
                <RenderCards
                  data = {[]}
                  title = "No search results found"
                />) : (
                <RenderCards 
                  data = {[]}
                  title = "No posts found"
                />
                )
              }
            </div>
          </>
        )}

      </Box>


    </Box>
  )
}

export default Home
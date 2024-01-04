import React, { useEffect, useState } from 'react';
import { loadAllPosts } from '../Services/PostService';
import { Row, Col } from 'reactstrap';
import PostView from './postView';

const NewFeed = () => {
  // Save the data in one post
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    // Load all the posts from the server
    loadAllPosts()
      .then((data) => {
        console.log(data);
        // Update the postContent state with the fetched data
        setPostContent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container-fluid' mt-4>
      <Row>
        <Col md={{ size:10, offset: 1 }}>
          {postContent && (
            <>
              {postContent.map((post) => (
                <PostView key={post.id} post={post} />
                
              ))}
             
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default NewFeed;

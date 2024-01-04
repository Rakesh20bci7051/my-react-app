import React from 'react';
//import { Link } from 'react-router-dom';
/*import { Card, CardBody, CardText } from 'reactstrap';

function PostView({post = { title: "This is default post title", content: "This is default content" } }) {
  return (
    <Card className='border-0 shadow-sm'>
      <CardBody>
        <h1>{post.title}</h1> 
        <CardText dangerouslySetInnerHTML={{ __html: post.content }}/>
        
        <Link className='btn btn-secondary' to={'/posts/'+post.postId}>Read More</Link>
      </CardBody>
    </Card>
  );
}

export default PostView;*/
import { Card, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function PostView({ post = { title: "This is default post title", content: "This is default content" } }) {
  // Function to extract the first 10 words from a string
  const extractFirstWords = (content, wordCount) => {
    const words = content.split(' ').slice(0, wordCount);
    return words.join(' ');
  };

  // Limit content to the first 10 words
  const limitedContent = extractFirstWords(post.content, 20);

  return (
    <Card className='border-0 shadow-sm'>
      <CardBody>
        <h1>{post.title}</h1>
        <CardText dangerouslySetInnerHTML={{ __html: limitedContent }} />
        <Link className='btn btn-secondary' to={'/posts/' + post.postId}>
          Read More
        </Link>
      </CardBody>
    </Card>
  );
}

export default PostView;





import { Link, useParams } from "react-router-dom";
import Base from "../components/Base";
import { Container, Row, Col, CardBody, CardText, Card, Button, Label, Input } from "reactstrap";
import { useEffect, useState, useRef } from "react";
import { createComment, loadPost } from "../Services/PostService";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(
    {
      content:''
    }
  )
  const editor = useRef(null);

  useEffect(() => {
    // Load post of postId
    loadPost(postId)
      .then(data => {
        console.log(data);
        setPost(data);
      })
      .catch(error => {
        console.log(error);
        toast.error("Error in loading the post");
      });
  }, []);

  // Submit comment
  const submitComment = () => {
    createComment(comment, post.postId)
      .then(data => {
       console.log(data);
       toast.success("yoy!! you commented is successfull")
       setPost({
        ...post,comment:[...post.comments,data.data]
       })
        
      })
      .catch(error => {
        console.log(error);
        toast.error("Error in submitting the comment");
      });
  };

  // Date function
  const printDate = (numbers) => {
    return new Date(numbers).toLocaleString();
  };

  return (
    <Base>
      <Container className="mt-4">
        <Link to="/"> Home</Link>
        <Row>
          <Col md={{ size: 12 }}>
            <Card>
              {post && (
                <CardBody>
                  <CardText>
                    Posted By <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b>
                  </CardText>
                  <CardText>
                    <h3>{post.title}</h3>
                  </CardText>
                  <CardText className="mt-3" dangerouslySetInnerHTML={{ __html: post.content }}>
                  </CardText>
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ size: 9, offset: 1 }}>
            <h3>Comments({post ? post.comments.length : 0})</h3>
            {post &&
              post.comments &&
              post.comments.map((c, index) => (
                <Card className="border-0 mt-2" key={index}>
                  <CardBody>
                    <p>{c?.content}</p>
                  </CardBody>
                </Card>
              ))}
            <Card className="border-0 mt-4">
              <CardBody>
            
                <Input type="textarea" placeholder="Enter your comment here"
                value={comment.content}
                onChange={(event)=>setComment({content:event.target.value})}></Input>
                <Button onClick={submitComment} className="mt-2" color="primary">
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default PostPage;

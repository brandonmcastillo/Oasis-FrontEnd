import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GA from "./GA.jpg";
import "./Post.css";
import DeleteModal from '../Forms/DeleteModal'
import PostModel from '../../models/PostModel';

// Tempoary template
export default class Post extends Component {
	state = {
		deleteModalShow: false,
		// postId: this.props.postId
	}
	
	deleteThePost = () => {
		this.props.deletePost(this.props.postId)
	}
	
  render() {
		let deleteModalClose = () => this.setState({ deleteModalShow: false})
    return (
      <div>
        <Container fluid={true}>
					<Row noGutters={false}>
						<Col xs={4} sm={4} md={4}>
						{/* Must Change to this.props.user */}
							<Image
									className="Profile-image-post"
									src={GA}
									roundedCircle
									fluid
							/>
						</Col>
						<Col xs={8} sm={8} md={8}>
							<h3>{this.props.title}</h3>
							<p>{this.props.content}</p>
							<p>{this.props.postId}</p>
								<Button variant='secondary'>Edit</Button>
								<Button 
									variant='danger' 
									onClick={()=> this.setState({ deleteModalShow: true })}
									>
								Delete</Button>

								<DeleteModal 
									deleteModalShow={this.state.deleteModalShow}
									// showId={this.showId} 
									handleClose={deleteModalClose}
									postId={this.props.postId}
									deletePost={this.deleteThePost}/>
						</Col>
					</Row>
        </Container>
      </div>
    );
  }
}
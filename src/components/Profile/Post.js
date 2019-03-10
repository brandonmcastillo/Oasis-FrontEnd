import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GA from "./GA.jpg";
import "./Post.css";
import EditModal from '../Forms/EditModal'
import DeleteModal from '../Forms/DeleteModal'
import PostModel from '../../models/PostModel';
import { debug } from "util";

// Tempoary template
export default class Post extends Component {
	state = {
		title: '',
		city: '',
		content: '',
		editModalShow: false,
		deleteModalShow: false,
	}

	editInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	editPost = (e) => {
		e.preventDefault()
		let editedPost = {
			title: this.state.title,
			content: this.state.content
		}
		this.props.editPost(this.props.postId, editedPost)
	}
	
	deleteThePost = () => {
		this.props.deletePost(this.props.postId)
	}
	
  render() {
		let editModalClose = () => this.setState({editModalShow: false})
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
							<h4>{this.props.city}</h4>
							<p>{this.props.content}</p>
								<Button 
									variant='secondary'
									onClick={()=> this.setState({editModalShow: true})}
									>Edit</Button>
								<EditModal 
									editModalShow={this.state.editModalShow}
									handleClose={editModalClose}
									postId={this.props.postId}
									onInput={this.editInput}
									editPost={this.editPost}
									title={this.props.title}
									content={this.props.content}
									/>
								
								
								<Button 
									variant='danger' 
									onClick={()=> this.setState({ deleteModalShow: true })}
									>
								Delete</Button>

								<DeleteModal 
									deleteModalShow={this.state.deleteModalShow}
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
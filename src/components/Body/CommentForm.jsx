import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // console.log(this.state);
    event.preventDefault();
    this.props.addComment(
      this.props.dishId,
      this.state.author,
      this.state.rating,
      this.state.comment
    );
    // this.props.dispatch({
    //   type: "ADD_COMMENT",
    //   payload: {
    //     dishId: this.props.dishId,
    //     author: this.state.author,
    //     rating: this.state.rating,
    //     comment: this.state.comment,
    //   },

    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
    event.target.reset();
  };
  render() {
    //console.log(this.props);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            palceholder="Enter your name"
            onChange={this.handleInput}
            required
          />
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInput}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Your comment"
            onChange={this.handleInput}
            required
          ></Input>
          <br />
          <Button type="submit">Submit Comment</Button>
        </Form>
      </div>
    );
  }
}
export default CommentForm;

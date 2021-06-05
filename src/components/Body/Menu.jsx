import React, { Component } from "react";
import MenuItem from "./MenuItem.jsx";
import DishDetails from "./dishDetails.jsx";
import { CardColumns, Modal, ModalBody, ModalFooter, Alert } from "reactstrap";
import { connect } from "react-redux";
import {
  addComment,
  fetchDishes,
  fetchComments,
} from "../../redux/actionCreators.js";
import Loading from "./Loading.jsx";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch(addComment(dishId, author, rating, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
  };
};
class Menu extends Component {
  state = {
    selectDish: null,
    modalOpen: false,
  };
  onDish = (dish) => {
    this.setState({ selectDish: dish, modalOpen: !this.state.modalOpen });
  };
  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
  }
  render() {
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errorMessage != null) {
      return <Alert color="danger">{this.props.dishes.errorMessage}</Alert>;
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
        return (
          <MenuItem
            dish={item}
            key={item.id}
            DishSelect={() => this.onDish(item)}
          />
        );
      });
      let dishDetail = null;
      if (this.state.selectDish != null) {
        const comments = this.props.comments.comments.filter((comment) => {
          return comment.dishId === this.state.selectDish.id;
        });
        dishDetail = (
          <DishDetails
            dish={this.state.selectDish}
            comments={comments}
            addComment={this.props.addComment}
            commentsIsLoading={this.props.comments.isLoading}
          />
        );
      }
      return (
        <div className="container">
          <div className="row">
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.modalOpen}>
              <ModalBody>{dishDetail}</ModalBody>
              <ModalFooter>
                <button
                  className="btn btn-secondary"
                  onClick={this.toggleModal}
                >
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

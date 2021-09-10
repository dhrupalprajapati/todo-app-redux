import React from "react";
import { ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import {
  completedTodo,
  editTodoClicked,
  editTodoSubmit,
  onEditInputText,
} from "../redux/actions/actionCreators";

class ListItem extends React.Component {
  state = { newUpdatedText: this.props.item.data };

  onEditInputTextChange = (event) => {
    const updatedText = event.target.value;
    // callback used for because setState is asynchronous
    this.setState({ newUpdatedText: updatedText }, () => {
      this.props.onEditInputText(this.props.item.id, this.state.newUpdatedText);
    });
  };

  render() {
    const item = this.props.item;
    // console.log(item);
    return (
      <>
        {item.isTodoEditButtonClicked && item.itemIndexToEdit ? (
          <>
            <ListGroup.Item>
              <InputGroup>
                <FormControl
                  value={this.state.newUpdatedText}
                  onChange={this.onEditInputTextChange}
                  style={{ backgroundColor: "##fffcf3" }}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                    onClick={() => {this.props.editTodoSubmit(item.id)}}
                >
                  Edit
                </Button>
              </InputGroup>
            </ListGroup.Item>
          </>
        ) : (
          <>
            <ListGroup.Item>
              <span
                style={{
                  textDecoration: item.isTodoCompleted
                    ? "line-through"
                    : "none",
                }}
                className="align-middle"
              >
                {item.data}
              </span>
              <span style={{ float: "right" }}>
                <Button
                  variant="outline-success"
                  onClick={() => {
                    this.props.editTodoClicked(item.id);
                  }}
                >
                  &#10003;
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    this.props.completedTodo(item.id);
                  }}
                >
                  X
                </Button>
              </span>
            </ListGroup.Item>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.header.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completedTodo: (id) => dispatch(completedTodo(id)),
    editTodoClicked: (id) => dispatch(editTodoClicked(id)),
    onEditInputText: (id, newUpdatedText) =>
      dispatch(onEditInputText(id, newUpdatedText)),
    editTodoSubmit: (id) => dispatch(editTodoSubmit(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

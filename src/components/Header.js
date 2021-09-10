import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/actionCreators";

class Header extends React.Component {
    state = {item: ''}

    render() {
        const item = this.state.item;
        return(
            <div>
                <h1 className="text-center">Todo App</h1>
                <h5>Add todo</h5>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Add items.." type="text" value={this.state.item} onChange={e => {this.setState({item: e.target.value})}} />
                    {/* {console.log(this.state.item)} */}
                </InputGroup>
                <Button varient="primary" onClick={() => {this.props.addTodo(item); this.setState({item:''})}}>
                    Submit
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: item => dispatch(addTodo(item))
    }
}

export default connect(null, mapDispatchToProps) (Header);
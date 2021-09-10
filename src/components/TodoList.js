import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import ListItem from "./ListItem";

const TodoList = (props) => {
  const items = props.items;
  return (
    <>
      <span className="container mt-3">
        <ListGroup>
          {items.map(item => {
            return <ListItem key={item.id} item={item} />;
          })}
        </ListGroup>
      </span>
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.header.items,
});

export default connect(mapStateToProps, null)(TodoList);

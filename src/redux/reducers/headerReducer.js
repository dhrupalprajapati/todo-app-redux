const initialState = {
  items: [],
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const {
        id,
        data,
        isTodoCompleted,
        isTodoEditButtonClicked,
        itemIndexToEdit,
      } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            id: id,
            data: data,
            isTodoCompleted: isTodoCompleted,
            isTodoEditButtonClicked: isTodoEditButtonClicked,
            itemIndexToEdit: itemIndexToEdit,
          },
        ],
      };
    }

    case "COMPLETED_TODO": {
      const idToUpdate = action.payload;

      const updatedItems = state.items.filter((item) => {
        if (item.id === idToUpdate) {
          item.isTodoCompleted = true;
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    case "EDIT_TODO_CLICKED": {
      const idToEdit = action.payload;
      const updatedItems = state.items.filter((item) => {
        if (item.id === idToEdit) {
          item.isTodoEditButtonClicked = true;
          item.itemIndexToEdit = item.id;
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    case "EDIT_INPUT_TEXT": {
      const { id, data } = action.payload;
      const updatedItems = state.items.filter((item) => {
        if (item.id === id) {
          item.data = data;
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    case "EDIT_TODO_SUBMITTED": {
      const updatedItems = state.items.filter(item => {
          if(item.id === action.payload) {
              item.isTodoEditButtonClicked = false;
              item.itemIndexToEdit = ''
          }
          return item;
      });

      return {
          ...state,
          items: updatedItems
      }
  }

    default:
      return state;
  }
};

export default headerReducer;

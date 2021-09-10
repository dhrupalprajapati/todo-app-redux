export const addTodo = data => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            isTodoCompleted: false,
            isTodoEditButtonClicked: false,
            itemIndexToEdit:''
        }
    }
}

export const completedTodo = id => {
    return {
        type: 'COMPLETED_TODO',
        payload: id
    }
}

export const editTodoClicked = id => {
    return {
        type: 'EDIT_TODO_CLICKED',
        payload: id
    }
}

export const onEditInputText = (id, newUpdatedText) => {
    return {
        type: 'EDIT_INPUT_TEXT',
        payload: {
            id: id,
            data: newUpdatedText
        }
    }
}

export const editTodoSubmit = id => {
    return {
        type: 'EDIT_TODO_SUBMITTED',
        payload: id
    }
}
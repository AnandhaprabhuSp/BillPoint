export const homeAction = (data) => dispatch => {
    dispatch({
        type: 'GET_DATA',
        payload: data
    })
}

export const addUserAction = (data) => dispatch => {
    dispatch({
        type: 'ADD_USER',
        payload: data
    })
}

export const editUserAction = (data) => dispatch => {
    dispatch({
        type: 'EDIT_USER',
        payload: data
    })
}


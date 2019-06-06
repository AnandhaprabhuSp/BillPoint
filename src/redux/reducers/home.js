const home = (state = { sample: { same: "temp" } }, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                users: action.payload
            }
        case 'ADD_USER':
            return {
                users: state.users.concat(action.payload)
            }
        case 'EDIT_USER':
            return {
                users: state.users.concat(action.payload)
            }
        default:
            return state
    }
}

export default home;
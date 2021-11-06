const initialState = {
    name: 'Rifki'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Ramadhan'
        }
    }
    return state;
}

export default globalReducer;
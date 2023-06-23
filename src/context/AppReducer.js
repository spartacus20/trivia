export const AppinitalState = {
    index: 0
}

export const actionTypes = {
    UPDATE_INDEX: "UPDATE_INDEX"
}

export const appReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_INDEX: 
            let newindex = state.index + 1 
            return {...state, index: newindex}
        default: 
            return state; 
    }
}
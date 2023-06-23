export const AppinitalState = {
    index: 0,
    modal: true,
    selected: "", 

}

export const actionTypes = {
    UPDATE_INDEX: "UPDATE_INDEX",
    MODAL_HANDLER: "MODAL_HANDLER",
}

export const appReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_INDEX: 
            let newindex = state.index + 1 
            return {...state, index: newindex}
        case actionTypes.MODAL_HANDLER:

            return {...state, modal: action.modal, selected: action.selected}
        default: 
            return state; 
    }
}
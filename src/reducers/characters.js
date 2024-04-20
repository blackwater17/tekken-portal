const charactersReducerDefaultState = []

const charactersReducer = (state = charactersReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_CHARACTER":
            return [
                ...state,
                action.character
            ]

        case "ADD_ALL_CHARACTERS":
            return action.characters.map(obj => {
                return {...obj};
            })

        default:
            return state;
    }
}

export default charactersReducer;
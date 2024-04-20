const movesReducerDefaultState = []

const movesReducer = (state = movesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_MOVE":
            return [
                ...state,
                action.move
            ]

        case "ADD_ALL_MOVES":
            return action.moves.map(obj => {
                return {...obj};
            })

        default:
            return state;
    }
}

export default movesReducer;

export const addMove = (
    {
        move_name = "Unknown_Move_Name",
        command = "Unknown Command",
        hit_level = "Unknown hit level",
        damage = "Unknown damage",
        startup_frame = "Unknown startup frame",
        block_frame = "Unknown block frame",
        hit_frame = "Unknown hit frame",
        ch_hit_frame = "Unknown CH hit frame",
        notes = "Unknown notes"
    } = {}
    ) => ({
        type: "ADD_MOVE",
        move: {
            move_name,
            command,
            hit_level,
            damage,
            startup_frame,
            block_frame,
            hit_frame,
            ch_hit_frame,
            notes
        }
        })

export const addAllMoves = (    
    moves = []
) => ({
    type: "ADD_ALL_MOVES",
    moves
})
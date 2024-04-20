export const addCharacter = (
    {
        character_name = "Unknown_Character_Name",
        movelist = []
    } = {}
    ) => ({
        type: "ADD_CHARACTER",
        character: {
            character_name,
            movelist
        }
        })

export const addAllCharacters = (    
    characters = [],
) => ({
    type: "ADD_ALL_CHARACTERS",
    characters
})

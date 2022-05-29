const LOAD = 'folders/LOAD';

const load = list => ({
    type: LOAD,
    list
  });

export const getFolders = (userId) => async dispatch => {
const response = await fetch(`/api/folders/${userId}`);
if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
}
};



// const sortList = (list) => {
// return list.sort((folderA, folderB) => {
//     return folderA.id - folderB.id;
// }).map((folder) => folder.id);
// };

const initialState = { list: [] };

const folderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return { ...state, list: [...action.list.folders] };
        // case LOAD:
        //     const allPokemon = {};
        //     action.list.forEach(pokemon => {
        //         allPokemon[pokemon.id] = pokemon;
        //     });
        //     return {
        //         ...allPokemon,
        //         ...state,
        //         list: sortList(action.list)
        //     };
        default:
            return state;
    }
  };

  export default folderReducer;
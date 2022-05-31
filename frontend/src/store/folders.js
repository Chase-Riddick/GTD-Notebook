const LOAD = 'folders/LOAD';

const load = list => ({
    type: LOAD,
    list
  });

export const getFolders = (userId) => async dispatch => {
const response = await fetch(`/api/users/${userId}/folders`);
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

        default:
            return state;
    }
  };

  export default folderReducer;


//   const initialState = { listings: [] };
//   const listingsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD:
//             return { ...state, list: [...action.listings] };

//         default:
//             return state;
//     }
//   };

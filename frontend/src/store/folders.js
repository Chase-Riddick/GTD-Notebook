import { csrfFetch } from './csrf';

const LOAD = 'folders/LOAD';
const ADD_MODIFY = 'folders/ADD_MODIFY';
const REMOVE = 'folders/REMOVE';

const load = folders => ({
    type: LOAD,
    folders
  });

const add_modify = folder => ({
    type: ADD_MODIFY,
    folder
});

const remove = folderId => ({
    type: REMOVE,
    folderId,
  });

export const getFolders = (userId) => async dispatch => {
const response = await fetch(`/api/users/${userId}/folders`);
if (response.ok) {
    const folders = await response.json();
    dispatch(load(folders));
}
};

export const addFolder = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/folders/`, {
      method: 'POST',
      body: JSON.stringify(payload)
  });
  if (response.ok) {
      const folder = await response.json();
      dispatch(add_modify(folder));
      return folder;
  }
};

export const modifyFolder = (payload, id) => async dispatch => {
  const response = await csrfFetch(`/api/folders/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
  });

  if (response.ok) {
      const folder = await response.json();
      dispatch(add_modify(folder));
      return folder;
  }
};

export const removeFolder = (folderId) => async dispatch => {
  const response = await csrfFetch(`/api/folders/${folderId}`, {
      method: 'DELETE'
  });
  if (response.ok) {
      dispatch(remove(folderId));
  }
};

// export const getFoldersAndNotes = (userId) => async dispatch => {
//   const response = await fetch(`/api/users/${userId}/folders/contents`);
//   if (response.ok) {
//       const folders = await response.json();
//       dispatch(load(folders));
//   }
//   };



// const sortList = (list) => {
// return list.sort((folderA, folderB) => {
//     return folderA.id - folderB.id;
// }).map((folder) => folder.id);
// };

const initialState = {};

const folderReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = {};
            action.folders.forEach((folder) => {
              newState[folder.id] = folder;
            });
            return newState;
        case ADD_MODIFY:
            newState = { ...state };
            newState[action.folder.id] = action.folder;
            return newState
        case REMOVE:
            newState = { ...state };
            delete newState[action.folderId]
            return newState
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

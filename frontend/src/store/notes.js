const LOAD = 'notes/LOAD';

const load = list => ({
    type: LOAD,
    list
  });

export const getNotesByNotebook = (folderId) => async dispatch => {
    const response = await fetch(`/api/folders/${folderId}`);
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

// export const getNotesByNotebook = (userId, folderTitle) => async dispatch => {
//     console.log("getNotes entered")
//     const response = await fetch(`/api/folders/${userId}/${folderTitle}`);
//     console.log("getNotes response received")
//     if (response.ok) {
//         const list = await response.json();
//         dispatch(load(list));
//     }
// };

const initialState = { list: [] };

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return { ...state, list: [...action.list.notes] };
        default:
            return state;
    }
  };

  export default noteReducer;
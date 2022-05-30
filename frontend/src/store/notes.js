import { csrfFetch } from './csrf';

const LOAD = 'notes/LOAD';
const ADD = 'notes/ADD';
const MODIFY = 'notes/MODIFY';

const load = list => ({
    type: LOAD,
    list
  });

const add = note => ({
    type: ADD,
    note
});

const modify = note => ({
    type: MODIFY,
    note
});

export const getNotesByNotebook = (folderId) => async dispatch => {
    const response = await fetch(`/api/folders/${folderId}`);
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

export const addNoteToNotebook = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/notes/`, {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const note = await response.json();
        dispatch(add(note));
        return note;
    }
};

export const editNote = (payload) => async dispatch => {
    console.log("***THIS IS BEFORE FETCH***")
    const response = await csrfFetch(`/api/notes/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });
    console.log("***THIS IS AFTER FETCH***")
    if (response.ok) {
        console.log("***THIS IS RESPONSE IS OKAY***")
        const note = await response.json();
        dispatch(modify(note));
        return note;
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
        case ADD:
            return { ...state, list: [...state.list, action.note] };
        case MODIFY:
            return { ...state, list: [...state.list, action.note] };

            // if (!state[action.note.id]) {
            //     const newState = {
            //       ...state,
            //       [action.note.id]: action.note
            //     };
            //     const noteList = newState.list.map(id => newState[id]);
            //     noteList.push(action.note);
            //     newState.list = sortList(noteList);
            //     return newState;
            //   }
        default:
            return state;
    }
  };

  export default noteReducer;
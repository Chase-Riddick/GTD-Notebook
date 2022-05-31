import { csrfFetch } from './csrf';

const LOAD = 'notes/LOAD';
const ADD_MODIFY = 'notes/ADD_MODIFY';

const load = notes => ({
    type: LOAD,
    notes
  });

const add_modify = note => ({
    type: ADD_MODIFY,
    note
});



export const getNotesByNotebook = (folderId) => async dispatch => {
    const response = await fetch(`/api/folders/${folderId}`);
    if (response.ok) {
        const notes = await response.json();
        console.log("Line 22", notes)
        dispatch(load(notes));
    }
};

export const addNoteToNotebook = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/notes/`, {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const note = await response.json();
        dispatch(add_modify(note));
        return note;
    }
};

export const editNote = (payload, id) => async dispatch => {
    console.log("***THIS IS BEFORE FETCH***")
    const response = await csrfFetch(`/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });
    console.log("***THIS IS AFTER FETCH***")
    if (response.ok) {
        console.log("***THIS IS RESPONSE IS OKAY***")
        const note = await response.json();
        dispatch(add_modify(note));
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

const initialState = {};

const noteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = {};
			action.notes.forEach((note) => {
				newState[note.id] = note;
			});
			return newState;
        case ADD_MODIFY:
            newState = { ...state };
            newState[action.note.id] = action.note;
            return newState
        default:
            return state;
    }
  };

  export default noteReducer;
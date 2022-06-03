import { csrfFetch } from './csrf';

const LOAD = 'notes/LOAD';
const LOADFOLDER = 'notes/LOADFOLDER';
const ADD_MODIFY = 'notes/ADD_MODIFY';
const REMOVE = 'notes/REMOVE';


const load = notes => ({
    type: LOAD,
    notes
  });

  const load_folder = notes => ({
    type: LOADFOLDER,
    notes
  });

const add_modify = note => ({
    type: ADD_MODIFY,
    note
});

const remove = (noteId, folderId) => ({
    type: REMOVE,
    noteId,
    folderId
  });


export const removeNote = (noteId, folderId) => async dispatch => {
    const response = await csrfFetch(`/api/notes/${noteId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(remove(noteId, folderId));
    }
};


export const getNotesByNotebook = (folderId) => async dispatch => {
    const response = await fetch(`/api/folders/${folderId}`);
    if (response.ok) {
        const notes = await response.json();
        console.log("Line 22", notes)
        dispatch(load_folder(notes));
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
    const response = await csrfFetch(`/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const note = await response.json();
        dispatch(add_modify(note));
        return note;
    }
};


const initialState = {};

const noteReducer = (state = initialState, action) => {
    let newState;
    let folderNotes;
    switch (action.type) {
        case LOAD:
            newState = {};
			action.notes.forEach((note) => {
				newState[note.id] = note;
			});
			return newState;
        case LOADFOLDER:
            newState = {...state};
            folderNotes = {};
            action.notes.forEach((note) => {
                folderNotes[note.id] = note;
            });
            newState[action.notes[0].folderId] = folderNotes;
            return newState;
        case ADD_MODIFY:
            newState = {...state};
            folderNotes = {...state[action.note.folderId]};
            folderNotes[action.note.id] = action.note;
            newState[action.note.folderId] = folderNotes;
            return newState
        case REMOVE:
            newState = {...state};
            folderNotes = {...state[action.folderId]};
            delete folderNotes[action.noteId];
            newState[action.folderId] = folderNotes;
            return newState
        default:
            return state;
    }
  };

  export default noteReducer;
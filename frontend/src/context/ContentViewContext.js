import { createContext, useContext, useEffect, useState } from 'react';

export const ContentViewContext = createContext();
export const useContentView = () => useContext(ContentViewContext);

export default function ContentViewProvider(props) {
  const [contentView, setContentView] = useState('');
  const [folderView, setFolderView] = useState('');
  const [noteView, setNoteView] = useState('');
  const [activeNote, setActiveNote] = useState({});

  let contentViewCopy = contentView;
  // let letNoteViewCopy = noteView;

  useEffect(() => {

    if (contentViewCopy && contentViewCopy.split('-')[0] === 'folder') setFolderView(contentViewCopy[1]);
    else setFolderView("")
  }, [contentView])

  useEffect(() => {
    setNoteView("")
  }, [contentView])



  return (
    <ContentViewContext.Provider
      value={{
        contentView,
        setContentView,
        folderView,
        setFolderView,
        noteView,
        setNoteView,
        activeNote,
        setActiveNote
      }}
    >
      {props.children}
    </ContentViewContext.Provider>
  )
}
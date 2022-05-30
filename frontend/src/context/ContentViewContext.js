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
    if (contentViewCopy && contentViewCopy.includes('folder')) setFolderView(contentViewCopy.split('-')[1]);
    else setFolderView("")
  }, [contentView])

  useEffect(() => {
    setNoteView("")
  }, [contentView])

  useEffect(() => {
    console.log(noteView)
  }, [noteView])

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
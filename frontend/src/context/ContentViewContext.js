import { createContext, useContext, useEffect, useState } from 'react';

export const ContentViewContext = createContext();
export const useContentView = () => useContext(ContentViewContext);

export default function ContentViewProvider(props) {
  const [contentView, setContentView] = useState('');
  const [folderView, setFolderView] = useState('');
  const [noteView, setNoteView] = useState('');
  const [activeNote, setActiveNote] = useState({});
  const [activeFolderId, setActiveFolderId] = useState(null);


  // let letNoteViewCopy = noteView;

  useEffect(() => {
    let contentViewCopy = contentView;
    if (contentViewCopy && contentViewCopy.includes('folder-')) {
      let fragment = contentViewCopy.split('-');
      let folderId = fragment [1];
      setFolderView(folderId );
      // console.log(contentViewCopy);
      // console.log(">>>>>>>>", folderId);
      setActiveFolderId(folderId);
    } else setFolderView("")
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
        setActiveNote,
        activeFolderId,
        setActiveFolderId
      }}
    >
      {props.children}
    </ContentViewContext.Provider>
  )
}
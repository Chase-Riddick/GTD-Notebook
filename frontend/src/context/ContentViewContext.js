import { createContext, useContext, useState } from 'react';

export const ContentViewContext = createContext();
export const useContentView = () => useContext(ContentViewContext);

export default function ContentViewProvider(props) {
  const [contentView, setContentView] = useState('');

  return (
    <ContentViewContext.Provider
      value={{
        contentView,
        setContentView
      }}
    >
      {props.children}
    </ContentViewContext.Provider>
  )
}
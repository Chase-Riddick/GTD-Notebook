// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getNotes } from '../../store/notes';
// import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import Folder from '../Folder';
import Home from '../Home';

const Content = () => {
    const { contentView } = useContentView();
    // const dispatch = useDispatch();
    // const notes = useSelector(state=>state.noteState.list);
    // const sessionUser = useSelector(state => state.session.user);
    // const userId = sessionUser.id;

    const contentType = () => {
        let contentViewCopy = contentView;
        if (contentViewCopy.includes('-')) return contentViewCopy.split('-')[0];
        else return contentView;
    }


    const id = () => {
        let contentViewCopy = contentView;
        if (contentViewCopy.includes('-')) return contentViewCopy.split('-')[1];
        else return null;
    }

  return (
    <div>
        <p>
            Hello World! This is from Content.
        </p>
        {
        {
          'folder': <Folder id={id()}/>,
          'home': <Home />
        }[contentType()]
      }

    </div>
  );
};

export default Content;
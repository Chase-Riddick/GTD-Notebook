import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../../store/articleReducer';
import { useEffect } from 'react';

const Folder = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state=>state.noteState.list.notes);
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;

    const { folderTitle } = useParams();

    useEffect(() => {
        dispatch(getNotes(userId, folderTitle));
    }, [dispatch]);

  return (
    <div>
        <p>
            Hello World!
        </p>

      {notes.map(({ id, title, content }) => (
        <div className='note'>
            <ul>
                 <li key={`note-${id}-id`}>{id}</li>
                 <li key={`note-${id}-title`}>{title}</li>
                 <li key={`note-${id}-content`}>{content}</li>
            </ul>
        </div>
      ))}
    </div>
  );
};

export default SingleArticle;
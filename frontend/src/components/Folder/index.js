import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesByNotebook } from '../../store/notes';
import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';

const Folder = ({id}) => {
    const { contentView } = useContentView();
    const dispatch = useDispatch();
    const notes = useSelector(state=>state.noteState.list);
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    console.log(notes)
    console.log("*******************************")
    console.log(id)

    useEffect(() => {
        dispatch(getNotesByNotebook(id));
    }, [dispatch, contentView]);

  return (
    <div>
        <p>
            {`Hello World! This is folder ${id}`}
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

export default Folder;
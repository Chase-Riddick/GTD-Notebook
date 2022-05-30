import '../../css/SideView.css'
import ComposeNote from '../ComposeNote';
import DisplayNote from '../DisplayNote';
import { useContentView } from '../../context/ContentViewContext';

export default function SideView () {
    const { noteView } = useContentView();

    return (
        <>
            {noteView && noteView === 'create' &&
             <ComposeNote />
            }
            {noteView && noteView === 'note' &&
             <DisplayNote />
            }
        </>
    )
};
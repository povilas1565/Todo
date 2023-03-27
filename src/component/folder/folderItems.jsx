import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { deleteFolder } from '../../store/reducer/folderReducer';
const FolderItem = ({ list }) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks?.filter(i => i.foldername === list.foldername));
    return (
        <>
            <li className="catalog-item" style={{ background: list.colorId }}>
                <Link key={list.id} to={`/posts/${list.foldername}`}>
                    {list.foldername}
                    <div className="count">
                        <span>
                            {tasks.length}
                        </span>
                        задачи
                    </div>
                </Link>
                <button className='remove' onClick={() => dispatch(deleteFolder(list.id))}>
                    <CloseIcon />
                </button>
            </li>
        </>
    );
};
export default FolderItem;
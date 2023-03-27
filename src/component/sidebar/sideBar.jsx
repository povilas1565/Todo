import { Link } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import AddIcon from '@mui/icons-material/Add';
import './sidebar.css'
const SideBar = () => {
    return (
        <div className="sidebar container">
            <div className="sidebar-inner">
                <ul className='sidebar_list'>
                    <li>
                        <Link to="/category">
                            <FolderIcon />
      
                        </Link>
                    </li>
                    <li>
                        <Link to="/alltasks">
                            <ChromeReaderModeIcon />
               
                        </Link>
                    </li>
                    <li>
                        <Link to="/addtasks" className='add-category'>
                            <AddIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar">
                            <ArticleIcon />
                 
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <AccountCircleIcon />
 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export { SideBar }
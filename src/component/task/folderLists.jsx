import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FolderItem from '../folder/folderItems';
const FolderLists = () => {
    const folder = useSelector(state => state.folder.folder);
    return (
        <>
            {!folder.length && (
                <div className="content-none">
                    <h2>Тут пока ничего нет</h2>
                    <p>
                        <Link to="/addfolder">Добавьте свой первый список</Link>
                    </p>
                </div>
            )}
            <ul className="list">
                {folder.map((list, index) => (
                    <FolderItem
                        key={index}
                        list={list}
                        folder={folder.length}
                    />
                ))}
            </ul>
            {!folder.length <= 0 && (
                <Link to="/addfolder" className='catalog-item add-catalog'>Добавить cписок</Link>
            )}
        </>
    )
}
export { FolderLists }
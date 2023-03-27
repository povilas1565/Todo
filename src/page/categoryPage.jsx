import { PageNavigate } from '../component/navigate/pageNavigate';
import { FolderLists } from '../component/task/folderLists';
import { SideBar } from "../component/sidebar/sideBar";
const CategoryPage = () => {
    return  (
        <div className="page">
            <div className="container">
                <PageNavigate
                    pagetitle="Категории"
                />
                <FolderLists />
            </div>
            <SideBar></SideBar>
        </div>
    )
}
export { CategoryPage }
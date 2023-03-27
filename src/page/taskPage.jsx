import { useParams } from 'react-router-dom';
import { SideBar } from "../component/sidebar/sideBar";
import { TaskListPage } from '../component/task/taskListPage';
import { PageNavigate } from '../component/navigate/pageNavigate';
const TaskPage = () => {
    const { lists } = useParams();
    return (
        <>
            <div className="container">
                <PageNavigate
                    pagetitle={lists}
                />
                <TaskListPage
                    lists={lists}
                />
            </div>
            <SideBar></SideBar>
        </>
    )
}
export { TaskPage }
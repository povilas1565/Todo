import { SideBar } from "../component/sidebar/sideBar";
import { Tasklists } from '../component/task/taskLists';
import { PageNavigate } from '../component/navigate/pageNavigate';
const AllTaskPage = () => {
    return (
        <>
            <div className="container">
                <PageNavigate
                    pagetitle="Задачи"
                />
                <Tasklists />
            </div>
            <SideBar></SideBar>
        </>
    )
}
export { AllTaskPage }
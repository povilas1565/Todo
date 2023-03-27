import { Header } from "../component/header/header";
import { SideBar } from "../component/sidebar/sideBar";
import { Tasklists } from '../component/task/taskLists';
const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Tasklists />
      </div>
      <SideBar></SideBar>
    </>
  )
}
export { HomePage }
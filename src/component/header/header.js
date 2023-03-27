import { useAuth } from '../../store/hooks/setting';
const Header = () => {
    const currentUser = useAuth();
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="profile">
                        <div className="avatar">
                            <img src={currentUser?.photoURL} alt="avatar" />
                        </div>
                        <div className="profie-info">
                            <div className="profile-name">
                                {currentUser?.displayName}
                            </div>
                            <div className="profile-mail">
                                {currentUser?.email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export { Header }
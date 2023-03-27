import { useEffect } from 'react';
import { db } from "../fierbase/config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/hooks/setting';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/reducer/userReducer";
import { PageNavigate } from '../component/navigate/pageNavigate';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { setPhoto, setUrl, setProgress } from "../store/reducer/settingReducer";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CircularProgress from '@mui/material/CircularProgress';
const ProfilePage = () => {
    const storage = getStorage();
    const currentUser = useAuth();
    const history = useNavigate();
    const dispatch = useDispatch();
    const { avatar, url, progress } = useSelector(state => state.setting);
    const tasks = useSelector(state => state.tasks.tasks);
    const removedUsed = () => {
        dispatch(removeUser())
        history('/login')
    }
    const handleChange = (e) => {
        if (e.target.files[0]) {
            dispatch(setPhoto({
                avatar: e.target.files[0],
            }))
        }
    }
    const handleSubmit = async () => {
        if (currentUser?.uid) {
            updateProfile(currentUser, {
                photoURL: url,
            })
            await updateDoc(doc(db, 'users', currentUser.uid), {
                avatar: currentUser.photoURL,
            });
        }
    }

    useEffect(() => {
        const uploadImage = () => {
            const imageRef = ref(storage, currentUser?.uid + '.png');
            const uploadTask = uploadBytesResumable(imageRef, avatar);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    dispatch(setProgress(progress))
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        dispatch(setUrl({
                            url: downloadURL,
                        }))
                    });
                }
            );
        }
        const onsnap = async () => {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                console.log("No such document!");
            }
        }


        avatar && uploadImage();
    }, [avatar]);
    return (
        <>
            <div className="container">
                <PageNavigate
                    pagetitle="Профиль"
                />
                <div className="profile-inner">
                    <div className="profile-page__info">
                        <div className="profile-page__avatar">
                            {progress !== null && progress < 100 ?
                                <CircularProgress variant="determinate" value={progress} />
                                :
                                <>
                                    {currentUser?.photoURL?.length && (
                                        <img src={currentUser.photoURL} />
                                    )}
                                </>
                            }
                            <div className={`loading ${currentUser?.photoURL?.length && 'hide'}`}>
                                <label htmlFor="file" className='preview'>
                                    <GroupAddOutlinedIcon />
                                </label>
                                <input
                                    id='file'
                                    type="file"
                                    onChange={handleChange}
                                    hidden
                                />
                            </div>
                        </div>
                        <button className='update-button' onClick={handleSubmit} disabled={progress !== null && progress < 100}>
                            Загрузить
                        </button>
                        <div className="profile-name">
                            {currentUser?.displayName}
                        </div>
                        <div className="profile-mail">
                            {currentUser?.email}
                        </div>
                    </div>
                    <div className="profile-statistic">
                        <div className="block-text">
                            Статистика по здачам
                        </div>
                        <div className="task">
                            <div className="total-task task-item">
                                <span className='text'>Всего задач</span>
                                <span>{tasks.length}</span>
                            </div>
                            <div className="complete-task task-item">
                                <span className='text'>Выполено всего</span>
                                <span>{tasks?.filter(t => t.completed)?.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-setting">
                        <span className='block-text'>Настройки</span>
                    </div>
                    <div className="exit">
                        <button onClick={() => removedUsed()}>
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { ProfilePage }
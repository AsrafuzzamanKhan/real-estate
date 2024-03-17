import List from '../../components/List/List'
import './ProfilePage.scss'

const ProfilePage = () => {
    return (
        <div className='profilePage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avater: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></span>
                        <span>Username: <b>John Doe</b></span>
                        <span>Email: <b>John@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Save List</h1>

                    </div>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    chat
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
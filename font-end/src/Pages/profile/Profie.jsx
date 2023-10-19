import Navbar from '../../compoment/nabar/Navbar';
import './Profie.scss';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Posts from '../../compoment/posts/posts';

const Profile = () => {
  return (
    <div className="Profile">
      <div className="images">
        <img
          src="https://cdn.pixabay.com/photo/2023/10/12/23/33/bird-8311908_1280.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/10/12/23/33/bird-8311908_1280.jpg"
          alt=""
          className="profilePc"
        />
        <div className="profileContainer">
          <div className="info">
            <div className="left">
              <a href="">
                <FacebookIcon />
              </a>
              <a href="">
                <FacebookIcon />
              </a>{' '}
              <a href="">
                <FacebookIcon />
              </a>{' '}
              <a href="">
                <FacebookIcon />
              </a>
            </div>
            <div className="center">
              <div className="name">quang anh</div>
              <div className="row">
                <div className="item">
                  <AddLocationAltIcon />
                  <span>Việt Nam</span>
                </div>
                <div className="item">
                  <VpnLockIcon />
                  <span>dêwdfhf</span>
                </div>
              </div>
              <button>kết bạn</button>
            </div>

            <div className="Right">
              <MailOutlineIcon />

              <MoreHorizIcon />
            </div>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};
// };
export default Profile;

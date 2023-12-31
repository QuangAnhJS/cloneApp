import './leftNabar.scss';
import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gameing from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import fund from '../../assets/13.png';
import { AuthContext } from '../../context/AthContext';
import { useContext } from 'react';
const LeftNabar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftNabar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.img} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            {' '}
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>

          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <hr width="100%" size="1px" align="center" color="lightgray" />

          <div className="menu">
            <span>Lối tắt của bạn</span>

            <div className="item">
              <img src={Memories} alt="" />
              <span>Memories</span>
            </div>
            <div className="item">
              <img src={Events} alt="" />
              <span>Events</span>
            </div>
            <div className="item">
              <img src={Gameing} alt="" />
              <span>Gameing</span>
            </div>
            <div className="item">
              <img src={Gallery} alt="" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Videos} alt="" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Messages} alt="" />
              <span>Messages</span>
            </div>
            <hr width="100%" size="1px" align="center" color="lightgray" />

            <div className="menu">
              <span>Thêm</span>
              <div className="item">
                <img src={Tutorials} alt="" />
                <span>Tutorials</span>
              </div>
              <div className="item">
                <img src={Courses} alt="" />
                <span>Courses</span>
              </div>
              <div className="item">
                <img src={fund} alt="" />
                <span>fund</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftNabar;

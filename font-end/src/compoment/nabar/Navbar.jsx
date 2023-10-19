import './Navba.scss';
import { Link } from 'react-router-dom';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { AuthContext } from '../../context/AthContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>AQTsocial</span>
        </Link>
        <AddHomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyIcon onClick={toggle} />
        ) : (
          <DarkModeIcon onClick={toggle} />
        )}

        <WidgetsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="tìm kiếm" />
        </div>
      </div>
      <div className="Right">
        <PersonOutlineOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

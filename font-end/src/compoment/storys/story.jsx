import { useContext } from 'react';
import './story.scss';
import { AuthContext } from '../../context/AthContext';
const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: 'quang Anch',
      img: 'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg',
    },
    {
      id: 2,
      name: 'quang Anch',
      img: 'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg',
    },
    {
      id: 3,
      name: 'quang Anch',
      img: 'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg',
    },
    {
      id: 4,
      name: 'quang Anch',
      img: 'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg',
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Stories;

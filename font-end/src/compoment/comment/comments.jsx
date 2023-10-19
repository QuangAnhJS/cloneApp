import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/AthContext';

import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      name: 'quang Anch',
      img: 'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg',
      desc: 'Chắc chắn là không có quy định nào bắt buộc bạn phải học làm thơ rồi nhưng mình thấy trong cuộc sống, đôi khi những dòng thơ nhẹ nhàng, bay bổng có thể giúp bạn nói ra những lời bạn muốn nói một cách chân thành và rất dễ đi vào lòng người nghe.',
    },
    {
      id: 2,
      name: 'quang Anch',
      img: 'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg',
      desc: 'hello word',
    },
  ];
  return (
    <div className="comments">
      <hr />
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <div className="message">
          <input type="text" placeholder="viết bình luận" />
          <button>
            <SendTwoToneIcon />
          </button>
        </div>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.img} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 phút trước</span>
        </div>
      ))}
    </div>
  );
};
export default Comments;

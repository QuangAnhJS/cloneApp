import { useContext, useState } from 'react';
import './post.scss';
import { AuthContext } from '../../context/AthContext';
import { Link } from 'react-router-dom';
//icons
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Comments from '../comment/comments';
const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const like = false;
  const [commentOpen, setComment] = useState(false);
  return (
    <div className="Post">
      <div className="container">
        <div className="user">
          <div className="userInfor">
            <img src={post.img} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.id}`}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 phút trước</span>
            </div>
          </div>

          <MoreHorizIcon></MoreHorizIcon>
        </div>
        <div className="content">
          <img src={post.img} alt="" />
        </div>

        <div className="icons">
          <ThumbUpAltIcon></ThumbUpAltIcon>
          <span>1,8k</span>
        </div>
        <hr />
        <div className="interact">
          <div className="icon">
            {like ? (
              <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
            ) : (
              <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
            )}
          </div>
          <div className="icon" onClick={() => setComment(!commentOpen)}>
            <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
          </div>
          <div className="icon">
            <ShareTwoToneIcon></ShareTwoToneIcon>
          </div>
        </div>

        {commentOpen && <Comments />}
      </div>
    </div>
  );
};
export default Post;

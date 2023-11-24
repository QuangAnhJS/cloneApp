import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/AthContext';
import moment from 'moment/moment';
import 'moment/locale/vi';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { comment } from 'postcss';

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const { isPending, error, data } = useQuery({
    queryKey: ['comments'],
    queryFn: () =>
      makeRequest.get('/comments?postId=' + postId).then((res) => {
        return res.data;
      }),
  });
  console.log('qunag anh' + data);
  return (
    <div className="comments">
      <hr />
      <div className="write">
        <img src={currentUser.img} alt="" />
        <div className="message">
          <input type="text" placeholder="viết bình luận" />
          <button>
            <SendTwoToneIcon />
          </button>
        </div>
      </div>
      {isPending
        ? 'loading'
        : data.map((comment) => (
            <div className="comment">
              <img src={comment.img} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">{moment(comment.createAt).fromNow()}</span>
            </div>
          ))}
    </div>
  );
};
export default Comments;

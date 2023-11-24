import Post from '../post/post';
import './posts.scss';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Posts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['post'],
    queryFn: () =>
      makeRequest.get('/posts').then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  if (isPending) return 'isLoading';
  if (error) return 'error' + error.message;
  return (
    <div className="posts">
      {error
        ? 'lỗi'
        : isPending
        ? 'loading'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;

import Post from '../post/post';
import './posts.scss';

const Posts = () => {
  //TEMPORARY
  const posts = [
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
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;

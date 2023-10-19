import Posts from '../../compoment/posts/posts';
import Stories from '../../compoment/storys/story';
import './home.scss';

const Home = () => {
  return (
    <div className="Home">
      <Stories></Stories>
      <Posts></Posts>
    </div>
  );
};
export default Home;

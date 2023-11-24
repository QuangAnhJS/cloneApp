import Posts from '../../compoment/posts/posts';
import Stories from '../../compoment/storys/story';
import Share from '../../compoment/share/share';
import './home.scss';

const Home = () => {
  return (
    <div className="Home">
      <Stories></Stories>
      <Share></Share>
      <Posts></Posts>
    </div>
  );
};
export default Home;

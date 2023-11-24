import './share.scss';
import Image from '../../assets/img.png';
import Map from '../../assets/map (1).png';
import Friend from '../../assets/friend.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState('');
  const { currentUser } = useContext(AuthContext);
  // Create a client
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (postTodo) => makeRequest.post('/posts', postTodo),
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await makeRequest.post('/upload', formData);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const hanndleClick = async (e) => {
    // e.preventDefault();
    let imgUrl = '';
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, Image: imgUrl });
    setDesc('');
    setFile(null);
    document.location.reload();
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser.img} alt="" />

            <input
              type="text"
              placeholder={`ban dang nghĩ gì ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="Right">
            {file && <img src={URL.createObjectURL(file)} />}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={hanndleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Share;

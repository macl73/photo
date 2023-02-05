import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photos } from './slices/photos.js';
import './App.css';

function App() {

  const dispatch = useDispatch();

  const photo = useSelector(state => state.photos.value);

  const currentPhoto = photo[photo.length - 1];
  
  let otherPhotos;
  if (photo.length >= 2) {
    otherPhotos = photo.slice(0, photo.length-1);
  } else {
    otherPhotos = null;
  };

  const handleChange = e => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      dispatch(photos(reader.result));
    }; 
  };

  return (
    <>
      {currentPhoto ? <img  src={currentPhoto} className='photo' alt="current" /> : undefined}
      <input type='file' name='photo' onChange={e => handleChange(e)} />
      {otherPhotos ? otherPhotos.map((o, index) => <img key={index} src={o} className='photo' alt={index}/>) : undefined}
    </>
  );
};

export default App;

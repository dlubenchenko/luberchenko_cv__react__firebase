import React, { useState, useEffect } from 'react';
import { storage } from '../firebase'; // Шлях до вашого файлу firebase.js
import { ref, getDownloadURL } from 'firebase/storage';


const ImageComponent = (props) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Шлях до вашого файлу у Firebase Storage
    const storageRef = ref(storage, props.value.link);
    // Отримання URL зображення
    getDownloadURL(storageRef).then((url) => {
      setImageUrl(url);
    });
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={props.value.alternative} className={props.value.visual}/>}
    </div>
  );
};

export default ImageComponent;
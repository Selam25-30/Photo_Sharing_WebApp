import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../firebase';

const ImageGrid = () => {
  const imagesRef = firestore.collection('images');
  const query = imagesRef.orderBy('createdAt', 'desc');
  const [images] = useCollectionData(query, { idField: 'id' });

  return (
    <div className="image-grid">
      {images && images.map(image => <img key={image.id} src={image.url} alt="" />)}
    </div>
  );
};

export default ImageGrid;

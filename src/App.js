import Title from './components/left/Title'
import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';


function App() {
  const [items, setItems] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRef = ref(database, '/main');
        onValue(itemsRef, (snapshot) => {
          const itemsData = snapshot.val();
          if (itemsData) {
            setItems(itemsData);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

	return (
		<div className='wrapper'>
			<div className='aside wrapper__aside'>
				<Title values={items} value={imageUrl}/>
			</div>
      <div className="main wrapper__main">

      </div>
		</div>
	)
}

export default App

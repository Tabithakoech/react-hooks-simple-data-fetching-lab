// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [image,setImage] = useState([null])
    if (!image) {

    useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => setImage(data.message))
    },[])

        return <p>Loading...</p>
    }
   return (
      <div>
        <p>Here's a lovely fox for you:</p>
        <img src={image} alt="A Random fox" />
      </div>
    );
   

  
}

export default App

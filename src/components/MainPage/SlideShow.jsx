import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "../assets/rdr1.jpg" },
  { url: "../assets/rdr2.jpg" },
  { url: "../assets/rdr3.jpg" },
  { url: "../assets/rdr4.jpg" },
];

const App = () => {
  return (
    <div className='images'>
      <SimpleImageSlider
        width="85vw" 
        height="75vh" 
        images={images}
        autoPlay={true}
      />
    </div>
  );
}

export default App;

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
          width={1440}
          height={600}
          images={images}
          autoPlay={true}
        />
      </div>
    );
  }

export default App;

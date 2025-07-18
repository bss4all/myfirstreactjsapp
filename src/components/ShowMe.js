import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ShowMe() {
  return (
    <div>
      <Header/>
      <h2>Show Me Component</h2>
      <p>This component is used to demonstrate the Show Me functionality.</p>
      <Footer/>
    </div>
  );
}

export default ShowMe;
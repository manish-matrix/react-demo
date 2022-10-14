import React from 'react';
import Navbar from './../components/Navbar';
import MainSlider from './../components/MainSlider';

export default function MainHeader(){
	return (
		<header className="header_section">
      <div className="container-fluid">
      	<Navbar />
      	<MainSlider />
      </div>
    </header>
		)
}
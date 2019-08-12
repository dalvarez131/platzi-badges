import React from 'react';
import Navbar from '../components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
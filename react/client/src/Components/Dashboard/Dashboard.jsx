import React from 'react';
import { Link } from 'react-router-dom';
import filter from '../../LoginAssets/filter.jpg';
import '../../App.css';

const Dashboard = () => {
  return (
    <div className='dashgo'>
      <p>This is the page that will display our main website. It is still in it's developing phase, so wait for it soon :D. Meanwhile enjoy the man, the legend, Park Jimin muahaha</p>
      <img src={filter} alt="Jimin-ssi" />
      <Link to="/login">Log Out</Link>
    </div>
  );
};

export default Dashboard;

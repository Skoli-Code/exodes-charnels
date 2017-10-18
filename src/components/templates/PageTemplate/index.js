import React from 'react';
import Navbar from 'components/organisms/Navbar';

import './styles.css'; 

const PageTemplate = ({ children }) => (
  <div>
    <Navbar/>
    <div className='page-content'>
      { children }
    </div>
  </div>

);

export default PageTemplate;

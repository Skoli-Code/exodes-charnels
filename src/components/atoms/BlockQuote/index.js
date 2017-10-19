import React from 'react';
import OpenQuoteIcon from 'components/icons/OpenQuote';
import CloseQuoteIcon from 'components/icons/CloseQuote';
import './styles.css';

const Quoted = ({ children }) => (
  <div className='quote'>
    { children }
  </div>
);

const BlockQuote = ({ children }) => (
  <div className='blockquote'>
    <OpenQuoteIcon className='open-quote'/>
    <Quoted>{ children }</Quoted>
    <CloseQuoteIcon className='close-quote'/>
  </div>
);

export default BlockQuote;

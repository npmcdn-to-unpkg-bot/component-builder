import React from 'react';


const GetFileJSX = ({obj,index}) => (
  <li className='file'>
    <a className='file' id={'mt_'+index} href="javascript:void(0);">{obj.name}</a>
  </li>
);

export default GetFileJSX;

import React from 'react';

const GetSymJSX = ({obj,index}) => (
  <li className='symbolic'>
    <a id={'mt_'+index} href="javascript:void(0);">{obj.name}</a>
  </li>
);

export default GetSymJSX;

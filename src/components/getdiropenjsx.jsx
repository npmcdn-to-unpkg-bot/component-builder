import React from 'react';

const GetDirOpenJSX = ({obj,index,idval, handleChecked,getLines}) => (
  <li>
    <label htmlFor={obj.name}>{obj.name}</label>
    <input id={idval} type="checkbox" checked={obj.open} onChange={handleChecked} />
    <ul>
      {getLines(obj.children)}
    </ul>
  </li>
);

export default GetDirOpenJSX;

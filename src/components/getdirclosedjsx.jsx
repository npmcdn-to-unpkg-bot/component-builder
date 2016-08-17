import React from 'react';

const GetDirClosedJSX = ({obj,index,idval, handleChecked}) => (
  <li>
    <label htmlFor={obj.name}>{obj.name}</label>
    <input id={idval} type="checkbox" checked={obj.open} onChange={handleChecked} />
    <ul></ul>
  </li>
);

export default GetDirClosedJSX;

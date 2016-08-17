import React from 'react';

const GetSymJSX = ({obj,index,idval}) => (
  <li>
    <label htmlFor={obj.name}>{obj.name}</label>
    <input id={idval} type="checkbox" checked={obj.open} onClick={this.handleChecked} />
    <ul></ul>
  </li>
);

export default GetSymJSX;

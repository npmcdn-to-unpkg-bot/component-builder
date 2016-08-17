_getLines(p) {
  var that = this;
  return p.map(function(index){
    var obj = that.state.filedir[index];
    switch (obj.type) {
      case 'D':
        return that.getDirJSX(obj,index);
      case 'S':
        return that.getSymJSX(obj,index);
      default:
        return that.getFileJSX(obj,index);
    }
  });

  _getDirJSX(obj,index){
    if(!obj.open){
      return (
        <li key={index}>
          <label htmlFor={obj.name}>{obj.name}</label>
          <input id={this.state.idPrefix +index} type="checkbox" checked={obj.open} onClick={this.handleChecked} />
          <ul></ul>
        </li>
      );
    }
    if(obj.open && obj.children.length===0){
      return (
        <li key={index}>
          <label htmlFor={obj.name}>{obj.name}</label>
          <input id={this.state.idPrefix +index} type="checkbox" checked={obj.open} onClick={this.handleChecked} />
          <ul></ul>
        </li>
      );
    }
//console.log('_getDirJSX i: ' +index +' open: ' +obj.open +' | children: ' +obj.children.length +' | loaded: ' +obj.loaded);
    return (
      <li key={index}>
        <label htmlFor={obj.name}>{obj.name}</label>
        <input id={this.state.idPrefix +index} type="checkbox" checked={obj.open} onClick={this.handleChecked} />
        <ul>
          {this.getLines(obj.children)}
        </ul>
      </li>
    );

  }

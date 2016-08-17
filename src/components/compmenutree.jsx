/*jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dirFileActionCreators from '../actions/dirfiles';
import * as compoActionCreators from '../actions/componentswitch';
import { bindActionCreators } from 'redux';

import GetFileJSX from './getfilejsx';
import GetSymJSX from './getsymjsx';
import GetDirClosedJSX from './getdirclosedjsx';
import GetDirOpenJSX from './getdiropenJSX';
import menuTree from '../wombles/menutree';

import DriveMenu from './drivemenu';
import ComponentSwitch from './componentswitch';

class CompMenuTree extends Component {

  constructor(props) {
    super(props);

    this.url ='files';

    this.doChangeDir = (e) => this._doChangeDir(e);
    this.getDir = (obj,index) => this._getDir(obj,index);
    this.getFile = (obj,index) => this._getFile(obj,index);
    this.getJSFile = (obj,index) => this._getJSFile(obj,index);
    this.handleMenuClick = (event) => this._handleMenuClick(event);
    this.handleChecked = (event) => this._handleChecked(event);
    this.handleDirPath = (e) => this._handleDirPath(e);
    this.getDirList = (s) => this._getDirList(s);
    this.getLines = (p) => this._getLines(p);
    this.reqServer = (i) => this._reqServer(i);
    this.resServer = (p) => this._resServer(p);
    this.setDirLoc = () => this._setDirLoc();
  }

  render() {
    var dir = this.props.files.startDir;
    //<DriveMenu />
    if (this.props.files.filedir.length === 0) {
      return (<div className="menutree clearfix">Loading...</div>);
    }else{
      return (
        <div id="wrapper" className="clearfix">
          <div id="leftcol">
            <input type="text" id="dirLoc" name="dirLoc" value={this.props.files.startDirPath} size="60" onChange={this.handleDirPath} />
            <input type="button" id="chgDir" name="chgDir" value="Change Directory" onClick={this.doChangeDir} />
            <ul className="menutree">
              {this.getLines([0])}
            </ul>
          </div>
          <div id="rightcol"><ComponentSwitch /></div>
        </div>
      );
    }
  }

  componentWillMount(){
    //this.setDirLoc();
    //this.props.dirfilesActions.changeOS(menuTree.getSlash(this.props.files.filesys));
    //console.dir(this.props);
    this.props.dirfilesActions.setFileDir(menuTree.getRoot(this.props.files.startDirPath,this.props.files.startDir));
  }

  componentDidMount(){
    //this.props.dirfilesActions.setFileDir(menuTree.getRoot(this.props.files.startDirPath,this.props.files.startDir));

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.files.filedir.length === 0 && this.props.files.filedir.length === 1){
      this.reqServer('0');
    }

    if(prevProps.files.startDir !== this.props.files.startDir){
      this.props.dirfilesActions.setFileDir(menuTree.getRoot(this.props.files.startDirPath,this.props.files.startDir));
    }
  }


  _setDirLoc(){
    var p =this.props.files;
    var dir = p.startDirPath.split(p.slash);
    dir = dir[dir.length-1];
    this.props.dirfilesActions.changeDir(dir);
  }

  _handleMenuClick(event){
    event.preventDefault();
    var str, id, compo, arr, name;
    var filedir = this.props.files.filedir;
    str = menuTree.stripPrefix(event.target.id,this.props.files.idPrefix);
    arr = str.split('_');
    compo = arr[0];
    id = arr[1];
    name = filedir[id].path +this.props.files.slash +filedir[id].name;
    //console.log('compo: ' +compo);
    //console.log('name: ' +name);
    this.props.compoActions.setComponent(compo,name);


    /*
  return {
  name: o['n'],
  level: getLevel(parent.level),
  parent: o['p'],
  type: 'F',
  path: getPath(parent,os),
  extension: o['e']
  };

  */
    /*
    var filedir = this.props.files.filedir;
    filedir[id].open = !filedir[id].open;
    this.props.dirfilesActions.setFileDir(filedir);
    if(filedir[id].open && !filedir[id].loaded){
      this.reqServer(id);
    }
    */
  }

  _handleChecked(event){
    event.preventDefault();
    var id = menuTree.stripPrefix(event.target.id,this.props.files.idPrefix);
    var filedir = this.props.files.filedir;
    filedir[id].open = !filedir[id].open;
    this.props.dirfilesActions.setFileDir(filedir);
    if(filedir[id].open && !filedir[id].loaded){
      this.reqServer(id);
    }
  }

  _handleDirPath(e){
    e.preventDefault();
    this.props.dirfilesActions.changePath(e.target.value);
  }

  _doChangeDir(e){
    e.preventDefault();
    this.setDirLoc();
  }

  _reqServer(i){
    var p =this.props.files;
    var sReq = this.url;
    sReq +='?dir=' +menuTree.getPath(p.filedir[i],p.slash);
    sReq +='&index=' +i;
    Cruyff.getReq(sReq, this.resServer);
  }

  _resServer(p){
    //console.log('_resServer p: ' +p);
    //var that = this;
    //console.log('_resServer p.length: ' +p.length);
    if(p === '[]'){
      //Directory is empty array []
      return;
    }
    var s = JSON.parse(p);
    var lFileDir = this.props.files.filedir;
    var lArr = [];
    var startCnt = lFileDir.length, endCnt = 0;
    var children = [];

    if(s.length>1){
      s = menuTree.sortDirFiles(s);
    }
    lArr = this.getDirList(s);
    lFileDir.push.apply(lFileDir, lArr);
    endCnt = lFileDir.length;
    lFileDir[s[0].p].children = menuTree.makeEmptyArray(startCnt, endCnt);
    lFileDir[s[0].p].loaded = true;
    this.props.dirfilesActions.setFileDir(lFileDir);
  }

  _getDirList(s){
    var that = this;
    var lArr = [];
    s.map(function(obj,index){
      var os = that.props.files.slash;
      var parent = that.props.files.filedir[obj['p']];
      if(obj['D']){
        lArr.push(menuTree.getDir(obj,parent,os));
      }
      if(obj['S']){
        lArr.push(menuTree.getSym(obj,parent,os));
      }
      if(obj['F']){
        lArr.push(menuTree.getFile(obj,parent,os));
      }
    });
    return lArr;
  }

  _getFile(obj,index){
    switch (obj.extension) {
      case '.js':
      case '.jsx':
      case '.json':
        return this.getJSFile(obj,index);
      default:
        return <GetFileJSX key={index} obj={obj} index={index} />;
    }
  }

  _getJSFile(obj,index){

//<i className="ionicons ion-map"></i>
        return (
          <li key={index} className='file'>
            <ul className="clicklinks">
              <li key={'a_'+index}>
                <a className='file' id={'mt_'+index} href="javascript:void(0);" >{obj.name}</a>
              </li>
              <li key={'t_'+index}>
                <a id={'mt_map_'+index}
                  onClick={this.handleMenuClick}
                  href="javascript:void(0);"
                  className="ionicons ion-map"></a>
              </li>
            </ul>
          </li>
        );
  }

  _getDir(obj,index){
    if(!obj.open || (obj.open && obj.children.length===0) ){
      return <GetDirClosedJSX key={index} obj={obj}
        index={index} idval={this.props.files.idPrefix +index}
        handleChecked={this.handleChecked} />
    }

    return <GetDirOpenJSX key={index} obj={obj}
        index={index} idval={this.props.files.idPrefix +index}
        handleChecked={this.handleChecked}
        getLines={this.getLines} />
  }

  _getLines(p) {
    var that = this;
    return p.map(function(index){
      var obj = that.props.files.filedir[index];
      switch (obj.type) {
        case 'D':
          return that.getDir(obj,index);
        case 'S':
          return <GetSymJSX key={index} obj={obj} index={index} />;
        default:
          //return <GetFileJSX key={index} obj={obj} index={index} />;
          return that.getFile(obj,index);
      }
    });
  }

}

function mapStateToProps(state){
  return {
    files: state.files,
    opencomp: state.opencomp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dirfilesActions: bindActionCreators(dirFileActionCreators, dispatch),
    compoActions: bindActionCreators(compoActionCreators, dispatch)
  };
}

//export default connect(mapStateToProps, [actions, setComponent])(CompMenuTree);
export default connect(mapStateToProps, mapDispatchToProps)(CompMenuTree);

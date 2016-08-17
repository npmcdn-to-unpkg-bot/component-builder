/*jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/componentswitch';



class ComponentMap extends Component {

  constructor(props) {
    super(props);

    this.url = 'appmap';

    this.getDriveMenu = () => this._getDriveMenu();
    this.reqServer = () => this._reqServer();
    this.resServer = (p) => this._resServer(p);

  }



  render() {
    //console.log('componentmap render');
    //console.dir(this.props)
    //console.log('compo: ' +this.props.opencomp.compo);
    //console.log('file: ' +this.props.opencomp.file);
    //console.log('url: ' +this.props.opencomp.url);
    if (this.props.opencomp.unit.length === 0) {
      return (<div>Loading...</div>);
    }else{
      //{JSON.stringify(rc, null, 2) }
      var rc;
      switch (this.props.opencomp.compo) {
        case 'map':
          rc = JSON.stringify(this.props.opencomp.unit, null, 2);
          break;
        default:
          rc = 'No Component set.';

      }
      return (
        <div>
          <pre>{rc}</pre>
        </div>
      );
    }
  }
  componentWillMount(){
    //console.log('componentmap componentWillMount');
    this.reqServer();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('componentmap componentDidUpdate');
    //console.log('compo prev: ' +prevProps.opencomp.compo + ' | props ' +this.props.opencomp.compo);
    //console.log('file prev: ' +prevProps.opencomp.file + ' | props ' +this.props.opencomp.file);

    if(prevProps.opencomp.compo !== this.props.opencomp.compo
      || prevProps.opencomp.file !== this.props.opencomp.file){
        console.log('inside if ');
      this.reqServer();
    }
  }

  _reqServer(){
    var p = this.props.opencomp;
    var sReq = this.url;
    sReq += '?file='+p.file;
    Cruyff.getReq(sReq, this.resServer);
  }

  _resServer(p){
    var s = JSON.parse(p);
    this.props.setMap(s);
    console.log('s: ' +s);
    //console.dir(s);
  }

  _getDriveMenu(){
    return (
      <select id="drivemenu" name="drivemenu">
      <option value="cwd">{this.props.drives.info.cwd}</option>
      <option value="homedir">{this.props.drives.info.homedir}</option>
      </select>
    );
  }
}

function mapStateToProps(state){
  return { opencomp: state.opencomp };
}

export default connect(mapStateToProps, actions)(ComponentMap);

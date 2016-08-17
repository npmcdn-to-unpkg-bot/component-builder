/*jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/drivemenu';

class DriveMenu extends Component {

  constructor(props) {
    super(props);

    this.getDriveMenu = () => this._getDriveMenu();
    this.reqServer = () => this._reqServer();
    this.resServer = (p) => this._resServer(p);
  }

  render() {
    if (this.props.drives.info.length === 0) {
      return (
        <select id="drivemenu" name="drivemenu">
          <option value="loading">Loading...</option>
        </select>
      );
    }else{
      return (
        <div>
          {this.getDriveMenu()}
        </div>
      );
    }
  }

  componentWillMount(){
    this.reqServer();
  }

  _reqServer(){
    var p =this.props.drives;
    var sReq = p.url;
    Cruyff.getReq(sReq, this.resServer);
  }

  _resServer(p){
    var s = JSON.parse(p);
    this.props.changePath(s[0]);
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
  return { drives: state.drives };
}

export default connect(mapStateToProps, actions)(DriveMenu);

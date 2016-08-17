/*jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/componentswitch';

import ComponentMap from './componentmap';

class ComponentSwitch extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //console.log('componentswitch render');
    //console.log('compo: ' +this.props.opencomp.compo);
    //console.log('file: ' +this.props.opencomp.file);
    //console.log('url: ' +this.props.opencomp.url);
    var rc;
    switch (this.props.opencomp.compo) {
      case 'map':
        rc = <ComponentMap />;
        break;
      default:
        rc = 'No Component set.';

    }
    return (
      <div>
        {rc}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('componentswitch componentDidUpdate');
    /*
switch statment based on action.

    */
  }

}

function mapStateToProps(state){
  return { opencomp: state.opencomp };
}

export default connect(mapStateToProps, actions)(ComponentSwitch);

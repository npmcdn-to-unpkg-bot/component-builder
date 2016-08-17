/*jshint esversion:6 */
import {
    SET_COMPO,
    SET_MAP
} from '../actions/componentswitch';


const INITIAL_STATE = {
    action:'',
    compo: '',
    file: '',
    unit: {}
};

export default function(state = INITIAL_STATE, action) {
    if (typeof state === undefined) {
        return INITIAL_STATE;
    }

    switch (action.type) {
        case SET_COMPO:
            return Object.assign({}, state, {
                action: action.type,
                compo: action.cargo.compo,
                file: action.cargo.file
            });
        case SET_MAP:
            return Object.assign({}, state, {
                action: action.type,
                unit: action.cargo
            });
        default:
            return state;
    }
    return state;
}

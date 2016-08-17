/*jshint esversion:6 */
import {
    SET_DRIVES
} from '../actions/drivemenu';


const INITIAL_STATE = {
    info: {},
    url: 'drivemenu'
};

export default function(state = INITIAL_STATE, action) {
    if (typeof state === undefined) {
        return INITIAL_STATE;
    }

    switch (action.type) {
        case SET_DRIVES:
            return Object.assign({}, state, {
                info: action.cargo
            });
        default:
            return state;
    }
    return state;
}

/*jshint esversion:6 */
import {
    CHANGE_DIRPATH,
    CHANGE_DIR,
    CHANGE_OS,
    SET_FILEDIR
} from '../actions/dirfiles';


import {
    entryPath,
    entryDir,
    thisOS,
    thisSlash,
    TLC
} from '../../configs/jim.config';

const INITIAL_STATE = {
    action: '',
    idPrefix: 'mt_',
    filedir: [],
    startDirPath: entryPath,
    startDir: entryDir,
    filesys: thisOS,
    slash: thisSlash,
    tlc:TLC
};

export default function(state = INITIAL_STATE, action) {
    if (typeof state === undefined) {
        return INITIAL_STATE;
    }

    switch (action.type) {
        case CHANGE_DIRPATH:
            return Object.assign({}, state, {
                startDirPath: action.cargo
            });
        case CHANGE_DIR:
            return Object.assign({}, state, {
                startDir: action.cargo
            });
        case CHANGE_OS:
            return Object.assign({}, state, {
                slash: action.cargo
            });
        case SET_FILEDIR:
            return Object.assign({}, state, {
                filedir: action.cargo
            });
            //return { ...state, startDirPath: action.cargo };
            /*case FETCH_POSTS:
                return { ...state, all: action.payload.data };
                */
        default:
            return state;
    }
    return state;
}

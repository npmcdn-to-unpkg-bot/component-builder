export const CHANGE_DIRPATH = 'CHANGE_DIRPATH';
export const CHANGE_DIR = 'CHANGE_DIR';
export const CHANGE_OS = 'CHANGE_OS';
export const SET_FILEDIR = 'SET_FILEDIR';

export function changePath(val) {
  return {
    type: CHANGE_DIRPATH,
    cargo: val
  };
}

export function changeDir(dir) {
  return {
    type: CHANGE_DIR,
    cargo: dir
  };
}

export function changeOS(s) {
  return {
    type: CHANGE_OS,
    cargo: s
  };
}

export function setFileDir(a) {
  return {
    type: SET_FILEDIR,
    cargo: a
  };
}

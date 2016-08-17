export const SET_COMPO = 'SET_COMPO';
export const SET_MAP = 'SET_MAP';

export function setComponent(pCompo,pFile) {
  //console.log('setComponent pCompo: ' +pCompo +' | pFile: ' +pFile);
    return {
        type: SET_COMPO,
        cargo: {
          compo:pCompo,
          file:pFile
        }
    };
}

export function setMap(p) {
  //console.log('setComponent pCompo: ' +pCompo +' | pFile: ' +pFile);
    return {
        type: SET_MAP,
        cargo: p
    };
}

export const SET_DRIVES = 'SET_DRIVES';

export function changePath(val) {
    return {
        type: SET_DRIVES,
        cargo: val
    };
}

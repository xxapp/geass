export const ADD_NODE = 'ADD_NODE';
export const MOVE_NODE = 'MOVE_NODE';

export function addNode(node) {
    return {
        type: ADD_NODE,
        node,
    };
}

export function moveNode(id, x, y) {
    return {
        type: MOVE_NODE,
        id,
        x,
        y,
    };
}
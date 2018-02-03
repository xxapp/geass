import { fromJS } from "immutable";
import { MOVE_NODE } from "../actions/index";

const initialState = fromJS({
    nodes: {
        '1517628224256': {
            x: 0,
            y: 0,
            type: 'plus',
        },
        '1517635236187': {
            x: 0,
            y: 100,
            type: 'tap',
            state: {
                input: 'hello',
            },
        }
    },
    connectors: {
        '1517635236187': {
            input: '1517628224256',
        }
    },
});

export const rootReducer = (state = initialState, action = {}) => {
    // redux store manage each node and connector
    // in the other hand, there is a manager that manage the calculation graph
    // when the structure and value of nodes changed，trigger the calculation process
    // then update the redux store
    switch (action.type) {
        case MOVE_NODE: return state.mergeDeep({nodes: {[action.id]: {x: action.x, y: action.y}}});
        default: return state;
    }
}
import nodeMap from "../nodeMap";

const initialState = {
    nodes: [{
        x: 0,
        y: 0,
        type: 'plus',
        args: {
            n1: 4,
            n2: 5
        },
    }, {
        x: 0,
        y: 100,
        type: 'tap',
        args: {
            input: 'hello'
        },
    }]
};

export const rootReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ARG_CHANGE': {
            // 1. define a tree data structure and some method
            // 2. travel through the tree and update node value
            // 3. update store
            const args = {
                n1: state.nodes[0].args.n1,
                n2: state.nodes[0].args.n2
            };
            args[action.name] = action.value;
            const newState = Object.assign(
                {},
                state,
                {
                    nodes: Object.assign(
                        [...state.nodes],
                        {
                            [action.index]: Object.assign(
                                {},
                                state.nodes[action.index],
                                {
                                    args: Object.assign(
                                        {},
                                        state.nodes[action.index].args,
                                        {
                                            [action.name]: action.value
                                        }
                                    )
                                }
                            ),
                            1: Object.assign(
                                {},
                                state.nodes[1],
                                {
                                    args: Object.assign(
                                        {},
                                        state.nodes[1].args,
                                        {
                                            input: nodeMap['plus'].implement.apply(null, Object.values(args))
                                        }
                                    )
                                }
                            )
                        }
                    )
                }
            );
            return newState;
        } break;
        default: return state;
    }
}
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
    // redux store manage each node and connector
    // in the other hand, there is a manager that manage the calculation graph
    // when the structure and value of nodes changed，trigger the calculation process
    // then update the redux store
    switch (action.type) {
        case 'ARG_CHANGE': {
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
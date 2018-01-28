const initialState = {
    nodes: [{
        x: 0,
        y: 0,
        type: 'plus',
        args: {
            n1: 4,
            n2: 5
        },
    }]
};

export const rootReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ARG_CHANGE': return Object.assign(
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
                        )
                    }
                )
            }
        ); break;
        default: return state;
    }
}
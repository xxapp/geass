import React from 'react';
import specMap from '../specs';

class NodeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            type,
            x,
            y,
            state,
        } = this.props;

        const spec = specMap[type];
        const {
            name,
            inputs,
            outputs,
            component: BodyComponent,
        } = spec;

        return (
            <div style={{border: '1px solid #000000', position: 'absolute', left: x, top: y}}>
                <span>{name}</span>
                {inputs.map((input, i) => {
                    return <div key={i}>
                        {`${input.name}: ${input.type}`}
                    </div>
                })}
                {outputs.map((output, i) => {
                    return <div key={i}>{`${output.name}: ${output.type}`}</div>
                })}
                <BodyComponent {...state} />
            </div>
        );
    }
}

export default NodeComponent;
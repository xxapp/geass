import React from 'react';

export default class INodeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            x,
            y,
            inputs,
            outputs,
            implement,
            onChange,
        } = this.props;

        return (
            <div style={{border: '1px solid #000000', position: 'absolute', left: x, top: y}}>
                {inputs.map(input => {
                    return <div>
                        {`${input.name}: ${input.type}`}
                        <input type="text" value={this.props[input.name]} onChange={(e) => { onChange(input.name, e.target.value) }} />
                    </div>
                })}
                {outputs.map(output => {
                    return <div>{`${output.name}: ${output.type}`}</div>
                })}
            </div>
        );
    }
}
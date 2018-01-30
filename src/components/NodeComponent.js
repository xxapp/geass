import React from 'react';

export default class NodeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            x,
            y,
            inputs,
            outputs,
            onChange,
            body: BodyComponent,
        } = this.props;

        return (
            <div style={{border: '1px solid #000000', position: 'absolute', left: x, top: y}}>
                {inputs.map((input, i) => {
                    return <div key={i}>
                        {`${input.name}: ${input.type}`}
                        <input type="text" value={this.props[input.name]} onChange={(e) => { onChange(input.name, e.target.value) }} />
                    </div>
                })}
                {outputs.map((output, i) => {
                    return <div key={i}>{`${output.name}: ${output.type}`}</div>
                })}
                <BodyComponent {...this.props} />
            </div>
        );
    }
}
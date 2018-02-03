import React from 'react';
import { DragSource } from "react-dnd";
import specMap from '../specs';

const boxSource = {
	beginDrag(props) {
		const { id, x, y } = props
		return { id, x, y };
	},
}

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
            isDragging,
            connectDragSource,
        } = this.props;

        const spec = specMap[type];
        const {
            name,
            inputs,
            outputs,
            component: BodyComponent,
        } = spec;

        if (isDragging) {
            return null;
        }

        return connectDragSource(
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

export default DragSource('box', boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(NodeComponent);
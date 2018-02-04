import React from 'react';
import { DragSource } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import NodeComponent from './NodeComponent';

const boxSource = {
	beginDrag(props) {
		return Object.assign({}, props);
	},
}

class DraggableNode extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
		this.props.connectDragPreview(getEmptyImage(), {
			// captureDraggingState: true,
		})
	}

    render() {
        const { isDragging, connectDragSource } = this.props;

        if (isDragging) {
            return null;
        }

        return connectDragSource(<div><NodeComponent {...this.props} /></div>);
    }
}

export default DragSource('box', boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
}))(DraggableNode);
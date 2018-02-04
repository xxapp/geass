import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';
import NodeComponent from './NodeComponent';

const layerStyles = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
}

function getItemStyles(props) {
	const { initialOffset, currentOffset } = props;
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		}
	}

    let { x, y } = currentOffset;

	const transform = `translate(${x}px, ${y}px)`;
	return {
		transform,
		WebkitTransform: transform,
	};
}

class DraggingNode extends Component {

	render() {
		const { item, itemType, isDragging } = this.props;

		if (!isDragging) {
			return null;
		}

		return (
			<div style={layerStyles}>
				<div style={getItemStyles(this.props)}>
					<NodeComponent {...item} />
				</div>
			</div>
		);
	}
}

export default DragLayer(monitor => ({
	item: monitor.getItem(),
	itemType: monitor.getItemType(),
	initialOffset: monitor.getInitialSourceClientOffset(),
	currentOffset: monitor.getSourceClientOffset(),
	isDragging: monitor.isDragging(),
}))(DraggingNode);
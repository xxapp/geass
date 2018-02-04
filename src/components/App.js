import React, { Component } from 'react'
import { connect } from "react-redux";
import { DropTarget, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { rootReducer } from "../reducers";
import DraggableNode from './DraggableNode';
import { addNode, moveNode } from '../actions/index';
import DraggingNode from './DraggingNode';

const boxTarget = {
	drop(props, monitor, component) {
		const item = monitor.getItem()
		const delta = monitor.getDifferenceFromInitialOffset()
		const left = Math.round(item.x + delta.x)
        const top = Math.round(item.y + delta.y)
        
		props.moveNode(item.id, left, top);
	},
}

class App extends Component {
    render() {
        const { nodes, connectDropTarget } = this.props;
        return connectDropTarget(
            <div style={{width: 500, height: 500}}>
                {Object.keys(nodes).map((key) => {
                    const node = nodes[key];
                    return (
                        <DraggableNode
                            key={key}
                            id={key}
                            x={node.x}
                            y={node.y}
                            state={node.state}
                            type={node.type}
                        />
                    );
                })}
                <DraggingNode/>
            </div>
        );
    }
}

App = DropTarget('box', boxTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}))(App);
App = DragDropContext(HTML5Backend)(App);
App = connect(
    state => ({
        nodes: rootReducer(state).get('nodes').toJS(),
    }),
    { moveNode },
)(App);

export default App;
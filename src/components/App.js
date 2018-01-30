import React, { Component } from 'react'
import { connect } from "react-redux";
import { rootReducer } from "../reducers";
import nodeMap from '../nodeMap';
import NodeComponent from './NodeComponent';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.nodes.map((node, i) => {
                    const nodeSpec = nodeMap[node.type];
                    return (
                        <NodeComponent
                            key={i}
                            x={node.x}
                            y={node.y}
                            {...node.args}
                            onChange={(name, value) => this.props.dispatch({ type: 'ARG_CHANGE', index: i, name, value })}
                            inputs={nodeSpec.inputs}
                            outputs={nodeSpec.outputs}
                            body={nodeSpec.component}
                        />
                    );
                })}
            </div>
        )
    }
}

export default connect(
    state => ({
        nodes: rootReducer(state).nodes,
    }),
)(App);
import React, { Component } from 'react'
import { connect } from "react-redux";
import { rootReducer } from "../reducers";
import nodeMap from '../nodeMap';

class App extends Component {
    render() {
        console.log(this.props.nodes);
        return (
            <div>
                {this.props.nodes.map((node, i) => {
                    const nodeSpec = nodeMap[node.type];
                    return (
                        <nodeSpec.component
                            key={i}
                            x={node.x}
                            y={node.y}
                            {...node.args}
                            onChange={(name, value) => this.props.dispatch({ type: 'ARG_CHANGE', index: i, name, value })}
                            inputs={nodeSpec.inputs}
                            outputs={nodeSpec.outputs}
                            implement={nodeSpec.implement}
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
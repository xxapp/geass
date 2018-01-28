import React from 'react';
import INodeComponent from './INodeComponent';

export default class PlusComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <INodeComponent {...this.props} />;
    }
}
import React from 'react';

export default class TapComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>{this.props.input}</span>
            </div>
        );
    }
}
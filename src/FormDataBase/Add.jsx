import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <div className="mb-3">
                <button className="bg-primary text-white" onClick={this.props.onAdd}><i className="fa fa-plus" aria-hidden="true"></i> Thêm</button>
            </div>
        );
    }
}

export default Add;
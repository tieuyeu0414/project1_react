import React, { Component } from 'react';

class Fontsize extends Component {
    onClickUp = () =>{
        this.props.onClickUpSize();
    }
    onClickDown = () =>{
        this.props.onClickDownSize();
    }
    render() {
        const {size} = this.props;
        return (
            <div>
                <div className="size">
                    <p>Size: {size}px</p>
                </div>
                <div className="btn-size">
                    <button onClick={this.onClickUp}>Tăng</button>
                    <button onClick={this.onClickDown}>Giảm</button>
                </div>
            </div>
        );
    }
}

export default Fontsize;
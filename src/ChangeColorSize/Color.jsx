import React, { Component } from 'react';

class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxCol: [
                {
                    id: 1,
                    color: 'red'
                },
                {
                    id: 2,
                    color: 'green'
                },
                {
                    id: 3,
                    color: 'blue'
                },
                {
                    id: 4,
                    color: 'gray'
                }
            ]
        }
    }
    onClickColor = (item) =>{
        this.props.onClickBorder(item);
    }
    render() {
        const {boxCol} = this.state;
        return (
            <div className='head-color'>
                <div className="title-color">
                    <h3>Color Picker</h3>
                </div>
                <div className="color">
                    {
                        boxCol.map(item => {
                            return(
                                <div className={this.props.colorTxT === item.color ? 'active box-color' : 'box-color'} 
                                style={{background: item.color}} 
                                onClick={()=>this.onClickColor(item)} 
                                key={item.id}></div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Color;
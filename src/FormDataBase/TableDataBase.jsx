import React, { Component } from 'react';

class TableDataBase extends Component {
    onUpdateState = () =>{
        this.props.onUpdateState(this.props.item.id)
    }
    onDelete = () =>{
        this.props.onDelete(this.props.item.id)
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.item.id)
    }
render() {
const {item, index} =this.props;
return (
    <tr>
        <th scope="row">
            <p>{index + 1}</p>
        </th>
        <td className="text-tran">
            <p>{item.name}</p>
        </td>
        <td className="state">
            <p className={item.state===false ? 'bg-success text-white a' : 'bg-danger text-white a' }
            onClick={this.onUpdateState}
                >
                {item.state === false ? 'Ẩn' : 'Kích Hoạt'}
            </p>
        </td>
        <td style={{textAlign: 'center'}}>
            <button className="bg-warning text-white" onClick={this.onUpdate}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                Edit
            </button>
            <button className="bg-danger text-white" onClick={this.onDelete}>
                <i className="fa fa-trash" aria-hidden="true"></i> Delete
            </button>
        </td>
    </tr>
);
}
}

export default TableDataBase;
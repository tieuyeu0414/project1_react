import React, { Component } from 'react';
import TableDataBase from './TableDataBase';

class FormTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            filtername: '',
            filterstate: -1
        }
    }
    onChangeSearch = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        this.props.onFilter(
            name === 'filtername' ? value : this.state.filtername,
            name === 'filterstate' ? value : this.state.filterstate
        )
    }
    render() {
        var {data} = this.props;
        const {filtername, filterstate} = this.state
        var elm = data.map((item, index) =>{
            return(
                <TableDataBase item={item} 
                index={index} key={item.id} 
                onUpdateState={this.props.onUpdateState} 
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
                />
            )
        })
        return (
            <div >
                <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Trạng Thái</th>
                <th scope="col">Hoạt Động</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>
                    <input type="search" name="filtername" value={filtername} onChange={this.onChangeSearch}/>
                </td>
                <td>
                    <select name="filterstate" value={filterstate} onChange={this.onChangeSearch}>
                        <option value={-1}>Tất cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích hoạt</option>
                    </select>
                </td>
                <td></td>
            </tr>
            {elm}
        </tbody>
    </table>
            </div>
        );
    }
}

export default FormTable;
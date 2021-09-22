import React, { Component } from 'react';

class FormAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            state: true
        }
    }
    componentDidMount(){
        const {testdata} = this.props
        if(testdata){
            this.setState({
                id: testdata.id,
                name: testdata.name,
                state: testdata.state
            })
        }
    }
    onChangeInput = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onChangeCmp(this.state);
        this.setState({
            name: '',
            state: true,
        })
        this.props.onClear();
    }
    onExit = () =>{
        this.setState({
            name: '',
            state: true,
        })
        this.props.onClear();
    }
    render() {
        const {add} = this.props
        return (
            <div className="col-sm-4">
                <div className="txtadd">
                    <h3>{add} công việc</h3>
                </div>
                <form action="" className="av" onSubmit={this.onSubmit}>
                    <div className="input">
                        <label htmlFor="Name">Tên:</label>
                        <input type="text" name="name" onChange={this.onChangeInput} value={this.state.name} required />
                    </div>
                    <div className="input">
                        <label htmlFor="state">Trạng Thái:</label>
                        <select name="status" onChange={this.onChangeInput} value={this.state.state}>
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>
                    <div className="text-center mt-3">
                        <button type="submit" className="bg-warning text-white">Lưu</button>
                        <button className="bg-danger text-white" onClick={this.onExit}>Hủy bỏ</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormAdd;
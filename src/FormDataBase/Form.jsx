import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTable from './FormTable';
import './style-form.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchSort from './SearchSort';
import Add from './Add';
import { v4 as uuidv4 } from 'uuid';
import FormAdd from './FormAdd';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isToggle: false,
            classIsToggle: '',
            nameTitleAdd: '',
            testdata: null,
            filter: {
                name: '',
                state: -1
            },
            keyword: '',
            sortBy: 'name',
            sortValue: 1
        }
    }
    
    getData = () => {
        var data = [
            {
                id: uuidv4(),
                name: 'Kế  Toán',
                state: true
            },
            {
                id: uuidv4(),
                name: 'Công Nghệ Thông Tin',
                state: false
            },
            {
                id: uuidv4(),
                name: 'Quản Trị Kinh Doanh',
                state: false
            }
        ]
        this.setState({
            data: data
        })
        localStorage.setItem('data', JSON.stringify(data)); //sử dụng localStorage , JSON.stringify chuyển sang dạng json
    }

    componentDidMount(){
        if(localStorage && localStorage.getItem('data')){
            const data = JSON.parse(localStorage.getItem('data'));
            this.setState({
                data: data
            })
        }
    }
    onUpdateState = (id) => {
        const {data} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            data[index].state = !data[index].state;
            this.setState({
                data: data
            })
            localStorage.setItem('data', JSON.stringify(data));
        }
    }
    findIndex = (id) =>{
        var {data} =this.state;
        var result = -1;
        data.forEach((itemData, index) =>{
            if(itemData.id === id){
                result = index;
            }
        })
        return result
    }
    onDelete = (id) =>{
        const {data} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            data.splice(index, 1);
            this.setState({
                data: data
            })
            localStorage.setItem('data', JSON.stringify(data));
        }   
    }
    toggleAdd = () =>{
        if(this.state.isToggle === false){
            this.setState({
                isToggle: !this.state.isToggle,
                classIsToggle: 'col-sm-',
                testdata: null
            })
        }
        else{
            this.setState({
                isToggle: !this.state.isToggle,
                classIsToggle: '',

            })
        }
    }
    onAdd = () =>{
        this.setState({
            nameTitleAdd: 'Thêm'
        })
        this.toggleAdd()
    }
    onUpdate = (id) =>{
        this.toggleAdd()
        const {data} = this.state;
        var index = this.findIndex(id);
        var testdata = data[index];
        this.setState({
            nameTitleAdd: 'Sửa',
            testdata: testdata
        })
    }
    onChangeCmp = (datachild) =>{
        const {data} = this.state;
        if(datachild.id === ''){
            var newdata = {
                id: uuidv4(),
                name: datachild.name,
                state: datachild.state
            }
            this.state.data.push(newdata)
        }
        else{
            var index = this.findIndex(datachild.id);
            data[index] = datachild;
            console.log(data)
        }
        this.setState({
            data: data,
            testdata: null
        })
        localStorage.setItem('data', JSON.stringify(data)); 
    }
    onClear = () =>{
        this.toggleAdd()
    }
    onFilter = (filtername, filterstate) =>{
        filterstate = parseInt(filterstate, 10)
        this.setState({
            filter: {
                name: filtername.toLowerCase(),
                state: filterstate
            }
        })
    }
    onSubmit = (keyword) =>{
        this.setState({
            keyword:keyword
        })
    }
    onClickSort = (sortBy, sortValue) =>{
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }
    render() {
        var {data, isToggle, classIsToggle, nameTitleAdd, testdata, filter, keyword, sortBy, sortValue} = this.state;
        if(filter){
            if(filter.name){
                data = data.filter(item=>{
                    return item.name.toLowerCase().indexOf(filter.name) !== -1
                })
            }
            data = data.filter(item=>{
                if(filter.state === -1){
                    return item
                }
                else{
                    return item.state === (filter.state === 1 ? true : false)
                }
            })
        }
        if(keyword){
            data = data.filter(item=>{
                return item.name.toLowerCase().indexOf(keyword) !== -1
            })
        }
        if(sortBy === "name"){
            data.sort((a,b)=>{
                if(a.name > b.name){return sortValue}
                else if(a.name <b.name){return -sortValue}
                return 0
            })
        }
        if(sortBy === 'state'){
            data.sort((a,b)=>{
                if(a.state > b.state){return -sortValue}
                else if(a.state < b.state){return sortValue}
                return 0
            })
        }
        return (
            <div className="mt-5">
                <div className="container">
                    <h3 className="text-center mb-4">Quản lý công việc</h3>
                    <button onClick={this.getData}>aaa</button>
                    <div className="row">
                        {
                            isToggle && 
                            <FormAdd add={nameTitleAdd} 
                            onChangeInput={this.onChangeInput} 
                            onChangeCmp={this.onChangeCmp}
                            onClear={this.onClear}
                            testdata={testdata}
                            />
                        }
                    <div className={classIsToggle + '8'}>
                        <Add onAdd={this.onAdd}/>
                        <SearchSort onSubmit={this.onSubmit} onClickSort={this.onClickSort}/>
                        <FormTable data={data} 
                        onUpdateState={this.onUpdateState} 
                        onDelete={this.onDelete} 
                        onUpdate={this.onUpdate} 
                        onFilter={this.onFilter}/>
                    </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Form;
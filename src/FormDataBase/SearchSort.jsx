import React, { Component } from 'react';

class SearchSort extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggle: false,
            keyword: '',
            classcheck: 'fa fa-check',
            sort: {
                name: 'name',
                by: 1
            }
        }
    }
    onClickDrop = (e) => {
        e.preventDefault();
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
    onChangeSearch = (event)=>{
        this.setState({
            keyword: event.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.keyword)
    }
    onClickSort(sortBy, sortValue){
        this.setState({
            sort: {
                name: sortBy,
                by: sortValue
            }
        })
        this.props.onClickSort(sortBy, sortValue);
    }
    
    render() {
        const {isToggle, keyword, classcheck, sort} = this.state;
        return (
            <div>
                <form action="" className="d-flex" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Nhập từ khóa" value={keyword} onChange={this.onChangeSearch}/>
                    <button type="submit" className="bg-primary text-white"><i className="fa fa-search"></i> Tìm kiếm</button>
                    <div className="nav-item bg-primary">
                        <a className="nav-link text-white"
                         href="true" 
                         onClick={this.onClickDrop}
                         >
                        Sắp xếp <i className="fa fa-chevron-down" aria-hidden="true"></i> 
                        </a>
                        {
                            isToggle &&
                            <div className="dropdown">
                                <p className="dropdown-item" onClick={() => this.onClickSort('name', 1)}>Từ A - Z 
                                <i className={(sort.name === 'name' && sort.by === 1) ? classcheck: ''}></i></p>
                                <p className="dropdown-item" onClick={() => this.onClickSort('name', -1)}>Từ Z - A 
                                <i className={(sort.name === 'name' && sort.by === -1) ? classcheck: ''}></i></p>
                                <p className="dropdown-item" onClick={() => this.onClickSort('state', 1)}>Theo Kích Hoạt 
                                <i className={(sort.name === 'state' && sort.by === 1) ? classcheck: ''}></i></p>
                                <p className="dropdown-item" onClick={() => this.onClickSort('state', -1)}>Theo Ẩn 
                                <i className={(sort.name === 'state' && sort.by === -1) ? classcheck: ''}></i></p>
                            </div>
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchSort;
import React, {Component} from 'react';
import axios from 'axios';

const Author = props =>(

    <option value={props.auth._id}>{props.auth.fname} {props.auth.lname}</option>
)
class AddBooks extends Component{


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeISBM = this.onChangeISBM.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePublisher = this.onChangePublisher.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name:'',
            isbm:'',
            author:'',
            price:'',
            year:'',
            publisher:'',
            authors:[],
            msg:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/author/').then(resolve=>{
            console.log(resolve.data.data);
            this.setState({
                authors:resolve.data.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }

    onChangeISBM(e){
        this.setState({
            isbm:e.target.value
        })
    }

    onChangeAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price:e.target.value
        })
    }

    onChangeYear(e){
        this.setState({
            year:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const book = {
            name:this.state.name,
            isbm:this.state.isbm,
            price:this.state.price,
            author:this.state.author,
            year:this.state.year,
            publisher:this.state.publisher
        }
        axios.post('http://localhost:3000/api/book/add',book).then(book=>{
            console.log(book);
            this.setState({
                msg:"Book added",
                name:'',
                isbm:'',
                author:'',
                price:'',
                year:'',
                publisher:''
            })
        }).catch(err=>{
            console.log(err);
            this.setState({
                msg:'Error!!!'
            })
        })
    }

    onChangePublisher(e){
        this.setState({
            publisher:e.target.value
        })
    }

    getAuthors(){
        return this.state.authors.map(function(object,i){
            return <Author auth={object} key={i}/>
        })
    }

    render(){
        return(
            <div className='card'>
                <div className='card-header'>
                    <div className='card-title'>
                        {this.state.msg}
                    </div>
                </div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit} className='form'>
                        <div className='form-group'>
                            <lable>Book Name</lable>
                            <input type='text' value={this.state.name} onChange={this.onChangeName} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <lable>ISBM</lable>
                            <input type='number' value={this.state.isbm} onChange={this.onChangeISBM} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <lable>Author</lable>
                            <select value={this.state.author} onChange={this.onChangeAuthor} className='form-control'>
                                <option selected>Select the Author</option>
                                {this.getAuthors()}
                            </select>
                        </div>
                        <div className='form-group'>
                            <lable>Price</lable>
                            <input type='number' value={this.state.price} onChange={this.onChangePrice} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <lable>Published Year</lable>
                            <input type='number' value={this.state.year} onChange={this.onChangeYear} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <lable>Publisher</lable>
                            <input type='text' value={this.state.publisher} onChange={this.onChangePublisher} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-success'>Add book</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddBooks;
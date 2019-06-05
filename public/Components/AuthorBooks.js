import React, {Component} from 'react';
import axios from 'axios';
const Books = props=>(
    <tr>
        <td>{props.book.name}</td>
        <td>{props.book.isbm}</td>
        <td>{props.book.price}</td>
        <td>{props.book.yearOfPub}</td>
        <td>{props.book.publisher}</td>
    </tr>
)

const Authors = props=>(
    <option value={props.author._id}> {props.author.fname} {props.author.lname}</option>
)

class AuthorBook extends Component{
    constructor(props){
        super(props);

        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            books:[],
            author:'',
            authors:[]
        }
    }




    onChangeAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    onSubmit(e){

        e.preventDefault();
        if(this.state.author!=''){
            axios.get("http://localhost:8080/books/AuthorBooks/"+this.state.author).then(resolve=>{
                console.log(resolve.data)
                this.setState({
                    books:resolve.data
                })
            }).catch(err=>{
                console.log(err);
            })
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

    getBooks(){
        return this.state.books.map(function(object,i){
            return <Books book={object} key={i}/>
        })
    }

    getAuthors(){
        return this.state.authors.map(function(object,i){
            return <Authors author={object} key={i}/>
        })
    }
    render(){
        return(
            <div className='card'>
                <div className='card-header'>
                    <form onSubmit={this.onSubmit} className='form'>
                        <div className='form-group'>
                            <label>Author</label>
                            <select value={this.state.author} onChange={this.onChangeAuthor} className='form-control-sm'>
                                <option selected>Select the Author</option>
                                {this.getAuthors()}
                            </select>
                            <button type='submit' className='btn btn-success'>Search</button>
                        </div>
                    </form>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>ISBM</th>
                            <th>Price</th>
                            <th>Year</th>
                            <th>Publisher</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.getBooks()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AuthorBook;
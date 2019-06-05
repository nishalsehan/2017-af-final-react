import React, {Component} from 'react';
import axios from 'axios';
const Books = props=>(
    <tr>
        <td>{props.book.name}</td>
        <td>{props.book.ISBN}</td>
        <td>{props.book.Author.fname} {props.book.Author.lname}</td>
        <td>{props.book.price}</td>
        <td>{props.book.YearOfPub}</td>
        <td>{props.book.Publisher}</td>
    </tr>
)

class ViewBook extends Component{
    constructor(props){
        super(props);

        this.state={
            books:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/book/').then(resolve=>{
            console.log(resolve.data.data);
            this.setState({
                books:resolve.data.data
            }).catch(err=>{
                console.log(err)
            })
        })
    }





    getBooks(){
        return this.state.books.map(function(object,i){
            return <Books book={object} key={i}/>
        })
    }
    render(){
        return(
            <div className='card'>
                <div className='card-header'>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>ISBM</th>
                                <th>Author</th>
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

export default ViewBook;
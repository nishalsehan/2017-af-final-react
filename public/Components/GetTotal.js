import React, {Component} from 'react';
import axios from 'axios';

const Books = props=>(

    <div className='form-group'>
        <label>{props.book}
            <input type='checkbox' name={props.name}  className='form-check' onChange={props.onChange} />
        </label>
    </div>
)

class Total extends Component{

    constructor(props){
        super(props);

        this.onChangeCheck = this.onChangeCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            checkBoxes: [],
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

    onChangeCheck(e){
        console.log(e.target.name)

        if(e.target.checked){
            const array =  this.state.checkBoxes;
            array.push(e.target.name)
            this.setState({
                checkBoxes:array
            })
        }else{
            const array =  this.state.checkBoxes;
            const index = array.indexOf(e.target.name);
            console.log(index)
            array.splice(index,1);
            console.log(array);
            this.setState({
                checkBoxes:array
            })
        }
    }

    onSubmit(e){
        e.preventDefault();

        axios.put("http://localhost:8080/books/getTotal/",this.state.checkBoxes).then(resolve=>{
            console.log(resolve)
            alert(`Total price of books ${resolve.data}`);

        }).catch(err=>{
            console.log(err);
        })

    }


    render(){
        return(
            <div className='card'>
                <div className='card-header'>
                </div>
                <div className='card-body'>
                    <form className='form' onSubmit={this.onSubmit}>

                        <div className='form-group'>
                            {
                                this.state.books.map(object=>(
                                        <Books name={object._id} book={object.name}  onChange={this.onChangeCheck} />
                                    )
                                )
                            }
                        </div>
                        <div className='form-group'>
                            <button type='submit'  className='btn btn-success'>Get Total</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Total;
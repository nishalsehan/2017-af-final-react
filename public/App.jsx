import React, {Component} from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import Home from './Components/Home';
import AddBook from './Components/AddBooks';
import ViewBooks from './Components/ViewBook';
import ViewAuthor from './Components/AuthorBooks';
import GetTotal from './Components/GetTotal'

export default class App extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <Router>
                <div className='container'>
                    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                        <ul className="navbar-nav">
                            <li className='nav-item active'>
                                <Link to={'/home'} className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/addBook'} className='nav-link'>Add Book</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/viewBooks'} className='nav-link'>View Books</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/viewAuthor'} className='nav-link'>View Author's books</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/getTotal'} className='nav-link'>Calculate Total</Link>
                            </li>


                        </ul>

                    </nav>
                    <Switch>
                        <Route path={'/home'} render={props=>{return <Home/>}}/>
                        <Route path={'/addBook'} render={props=>{return <AddBook/>}}/>
                        <Route path={'/viewBooks'} render={props=>{return <ViewBooks/>}}/>
                        <Route path={'/viewAuthor'} render={props=>{return <ViewAuthor/>}}/>
                        <Route path={'/getTotal'} render={props=>{return <GetTotal/>}}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

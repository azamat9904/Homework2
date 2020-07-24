import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import Post from './Pages/Post/Post';
import PostDetail from './Pages/PostDetail/PostDetail';

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <nav className="App-nav">
                    <ul className="App-list">
                        <li className="App-item">
                            <Link to="/" className="App-link">Home</Link>
                        </li>
                        <li className="App-item">
                            <Link to="/posts" className="App-link">Posts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="App-content">
                <Switch>
                    <Route path="/" exact render={() =><Home/>}/>
                    <Route path = "/posts" exact render = {()=><Post />} />
                    <Route path = "/posts/:id" render={()=><PostDetail />} />
                    <Route path = "*" render = {()=><h1>Route is not found</h1>} />
                </Switch>
            </div>
        </div>
    );
}

export default App;

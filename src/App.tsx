import React, {lazy,Suspense} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.scss';
import Loading from './Components/Loading/Loading';
const Post = lazy(()=>import('./Pages/Post/Post'));
const PostDetail = lazy(()=>import('./Pages/PostDetail/PostDetail'));
const Home = lazy(()=>import('./Pages/Home/Home'));

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
               <Suspense fallback={<Loading />}>
                   <Switch>
                       <Route path="/" exact render={() =><Home/>}/>
                       <Route path = "/posts" exact render = {()=><Post />} />
                       <Route path = "/posts/:id" render={()=><PostDetail />} />
                       <Route path = "*" render = {()=><h1>Route is not found</h1>} />
                   </Switch>
               </Suspense>
            </div>
        </div>
    );
}

export default App;

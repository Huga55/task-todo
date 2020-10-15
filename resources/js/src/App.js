import React from 'react';
import './App.css';
import TasksContainer from "./components/Tasks/TasksContainer";
import ModalContainer from "./components/Tasks/Modal/ModalContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import {connect} from "react-redux";
import Initialize from "./components/Initialize/Initialize";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" render={() => <Initialize />}/>
                <Route path="/login" render={() => <LoginContainer/>}/>
                <Route path="/app" render={() =>
                    <div className="App">
                        <SidebarContainer/>
                        <ModalContainer/>
                        <div className="content">
                            <TasksContainer/>
                        </div>
                    </div>}/>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.auth,
        isReadyApp: state.initialize.isReadyApp,
    }
}

export default connect(mapStateToProps, null)(App);

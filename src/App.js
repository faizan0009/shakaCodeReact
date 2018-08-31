import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from "./modules/Header";
import Home from './modules/Home';
import LeftSideBar from './modules/LeftSideBar';
import Tabs from './modules/Tabs';


class App extends Component {
  state = {
    LeftSidebarStatus: true,
  };

  toggleLeftSidebarStatus = () => this.setState({ LeftSidebarStatus: !this.state.LeftSidebarStatus })

  render() {
    return (
      <div>
        <Header LeftSidebarStatusFunc={this.toggleLeftSidebarStatus}/>
        <LeftSideBar visible={this.state.LeftSidebarStatus}>
        <main>
          
          <Route path="/home" component={Home} />
          <Route path="/tabs" component={Tabs} />
          
        </main>
        </LeftSideBar>
      </div>
    );
  }
}

export default App;

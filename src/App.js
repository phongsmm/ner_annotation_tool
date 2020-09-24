import React from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';
import {text} from './Data';
import 'semantic-ui-css/semantic.min.css'


class App extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      txt: "",
      posts: [],
      currentpage: 1,
      postperpage: 50,
      datatotal:0
  };
    this.Changepage = this.Changepage.bind(this);
   
  }



  
  componentDidMount() {

            
    this.setState({posts:text});
    
     
}


componenWillUnmount() {
}


Changepage(e,page){

  this.setState({currentpage:page.activePage});

}

  render(){
  return (
    <div className="App">
      <div>
        <div className="ui attached tabular menu"><a href="!#" className="active item">
  <i aria-hidden="true" className="users icon"></i>Users</a><a href="!#" className="item">Data<div className="ui label">{this.state.posts.length}</div>
          </a>
          </div>
          <div className="ui bottom attached segment active tab color-black">Tab 1 Content</div>
          </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <Form {...this.state} Changepage = {this.Changepage} />

      </header>
    </div>
  )};
}

export default App;

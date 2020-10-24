import React from 'react';
import logo from './logo.svg';
import Form from './Form';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css'


class App extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      txt: "",
      posts: [],
      currentpage: 1,
      postperpage: 50,
      datatotal:0,
      tags : {

        "Person":0,
        "Location":0,
        "Organization":0,
        "JobTitle":0,
        "Facility":0,
        "GeographicFeature":0,
        "Product":0,
        "Date":0,
        "Time":0,
        "Duration":0,
        "Measure":0,
        "Money":0,
        "Ordinal":0,
        "Number":0,
        "Percent":0,
        "Address":0,
        "PhoneNumber":0,
        "EmailAddress":0,
        "URL":0,
        "IPAddress":0,
        "Hashtag":0,
        "TwitterHandle":0,

      },
      







  };
    this.Changepage = this.Changepage.bind(this);

    
   
  }



  
    async componentDidMount() {

   const res = await axios.get('http://localhost:8000/get/');
    this.setState({posts:res.data})
    const list = await axios.get('http://localhost:8000/list/');
    this.setState({tags:{"Person":list.data.Person}})

    

    
     
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
  <i aria-hidden="true" className="users icon"></i>NerTagger</a><a href="!#" className="item">Data<div className="ui label">{this.state.posts.length}</div>
          </a>
          </div>
  <div className="ui bottom attached segment active tab color-black">Person : {this.state.tags.Person}</div>
          </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <Form {...this.state} Changepage = {this.Changepage}/>

      </header>
    </div>
  )};
}

export default App;

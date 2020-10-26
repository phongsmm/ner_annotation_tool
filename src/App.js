import React from 'react';
import logo from './logo.svg';
import Databoard from'./Databoard';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Label ,Grid,Menu} from 'semantic-ui-react'


class App extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      txt: "",
      posts: [],
      currentpage: 1,
      postperpage: 10,
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
      Url_get:"http://localhost:8000/get/",
      Url_list:"http://localhost:8000/list/",

      







  };
    this.Changepage = this.Changepage.bind(this);

    
   
  }



  
    async componentDidMount() {

   const res = await axios.get(this.state.Url_get);
    this.setState({posts:res.data})
    const list = await axios.get(this.state.Url_list);
    this.setState({tags:{"Person":list.data.Person , "Location":list.data.Location,"Organization":list.data.Organization,
    "JobTitle":list.data.JobTitle,"Facility":list.data.Facility,"GeographicFeature":list.data.GeographicFeature,"Product":list.data.Product,
    "Date":list.data.Date,"Time":list.data.Time,"Duration":list.data.Duration,"Measure":list.data.Measure,"Money":list.data.Money,"Ordinal":list.data.Ordinal,
    "Number":list.data.Number,"Percent":list.data.Percent,"Address":list.data.Address,"PhoneNumber":list.data.PhoneNumber,"EmailAddress":list.data.EmailAddress,
  "URL":list.data.URL,"IPAddress":list.data.IPAddress,"Hashtag":list.data.Hashtag,"TwitterHandle":list.data.TwitterHandle}})


    

    
     
}


componenWillUnmount() {
}


Changepage(e,page){

  this.setState({currentpage:page.activePage});

}



  render(){
  return (
    <div className="App">


 
<header>
<Menu size='small'>
<img alt="" src={logo} className="App-logo" style={{width:"50px",height:"40px",position:"relative"}}></img>
        <Menu.Item
          name='Ner-Annotation tool'
          active={false}
          onClick={()=>{}}
        />

        
        <Menu.Item
       name='Total : '
       active={false}
       onClick={()=>{}}
     />
        
        <Menu.Item
          name= {`[ ${this.state.posts.length} ]`}
          active={false}
          onClick={()=>{}}
        />
  
      <button style={{background:"#92817a",color:"white",borderStyle: "none",fontSize:"15px",borderWidth: "0px"}}>DATA</button>

      </Menu>
   

     
     <Grid style={{marginTop:"2px",marginLeft:"2px",marginRight:"2px"}} centered>
       <Grid.Row>
     <Label color='blue' className="Label">Person : {this.state.tags.Person} </Label>
     <Label color='blue'className="Label">Location : {this.state.tags.Location} </Label>
     <Label color='blue'className="Label">Organization : {this.state.tags.Organization} </Label>
     <Label color='blue'className="Label">JobTitle : {this.state.tags.JobTitle} </Label>
     <Label color='blue'className="Label">Facility : {this.state.tags.Facility} </Label>
     <Label color='blue'className="Label">GeographicFeature : {this.state.tags.GeographicFeature} </Label>
     <Label color='blue'className="Label">Product : {this.state.tags.Product} </Label>
     <Label color='blue'className="Label">Date : {this.state.tags.Date} </Label>
     <Label color='blue'className="Label">Time : {this.state.tags.Time} </Label>
     <Label color='blue'className="Label">Duration : {this.state.tags.Duration} </Label>
     <Label color='blue'className="Label">Measure : {this.state.tags.Measure} </Label>
     </Grid.Row>
     <Grid.Row>
     <Label color='blue'className="Label">Money : {this.state.tags.Money} </Label>
     <Label color='blue'className="Label">Ordinal : {this.state.tags.Ordinal} </Label>
     <Label color='blue'className="Label">Number : {this.state.tags.Number} </Label>
     <Label color='blue'className="Label">Percent : {this.state.tags.Percent} </Label>
     <Label color='blue'className="Label">Address : {this.state.tags.Address} </Label>
     <Label color='blue'className="Label">PhoneNumber : {this.state.tags.PhoneNumber} </Label>
     <Label color='blue'className="Label">EmailAddress : {this.state.tags.EmailAddress} </Label>
     <Label color='blue'className="Label">URL : {this.state.tags.URL} </Label>
     <Label color='blue'className="Label">IPAddress : {this.state.tags.IPAddress} </Label>
     <Label color='blue'className="Label">Hashtag : {this.state.tags.Hashtag} </Label>
     <Label color='blue'className="Label">TwitterHandle : {this.state.tags.TwitterHandle} </Label>
     </Grid.Row>
     </Grid>
 
      </header>


     <Databoard {...this.state} Changepage = {this.Changepage}/>




    
      




     

    

  
    </div>
  )};
}

export default App;

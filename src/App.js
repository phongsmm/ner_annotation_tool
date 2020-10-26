import React from 'react';
import logo from './logo.svg';
import Databoard from'./Databoard';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Label ,Grid,Menu,TransitionablePortal,Button,Segment,Header,TextArea,Form,Input} from 'semantic-ui-react'


class App extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      txt: "",
      posts: [],
      currentpage: 1,
      postperpage: 5,
      datatotal:0,
      portalopen:false,
      reload:false,
      textarea:"",
      input:0,
      success:"",
      error:{status:false,msg:""},
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
      Url_get:"https://fastapi-nlp.herokuapp.com/get/",
      Url_add:"https://fastapi-nlp.herokuapp.com/add/",
      Url_list:"https://fastapi-nlp.herokuapp.com/list/",
      Url_update:"https://fastapi-nlp.herokuapp.com/update/",
      Url_unset:"https://fastapi-nlp.herokuapp.com/unset/",
      Url_delete:"https://fastapi-nlp.herokuapp.com/delete/",
      Url_settype:"https://fastapi-nlp.herokuapp.com/settype/",


      







  };
    this.Changepage = this.Changepage.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.doPost = this.doPost.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.handletextarea = this.handletextarea.bind(this);
    this.handleInput = this.handleInput.bind(this);

    
   
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



  setInterval(() => {
    this.setState({error:{msg:""},success:""})
    
  }, 4000);


    

    
     
}


componenWillUnmount() {
}


Changepage(e,page){

  this.setState({currentpage:page.activePage});

}

   async doPost( ){

    if(this.state.textarea.length<2){
      this.setState({error:{status:true,msg:"Please Input a Sentence"}})
    }
    else if(this.state.input.length<1||!Number.isInteger(parseInt(this.state.input))){
      this.setState({error:{status:true,msg:"Please Input a ID"}})
    }
    else{
      try {
        var res = await axios.post(`${this.state.Url_add}`,{"id":this.state.input,"text":this.state.textarea ,"mentions":[]})
      }
      catch(e){
        console.log(e)
      }
     
      if(res.data.Alert === "ID Exists"){ this.setState({error:{status:true,msg:"ID already exists"}})}

      else{
        this.setState({success:`Success insert ID: ${this.state.input}`,reload:true})

      }


    }
  

  
    
  }
  async doDelete(){

 
    if(this.state.input.length<1||!Number.isInteger(parseInt(this.state.input))){
      this.setState({error:{status:true,msg:"Please Input a ID"}})
    }
    else{
      try {
        var res = await axios.delete(`${this.state.Url_delete}${this.state.input}`)
      }
      catch(e){
        console.log(e)
      }
     
      if(res.data.Alert === "ID NOT FOUND!"){ this.setState({error:{status:true,msg:"ID NOT FOUND!"}})}

      else{
        this.setState({success:`Success remove ID: ${this.state.input}`,reload:true})

      }


    }
  

  }


reload(){window.location.reload()}

handleOpen = () => this.setState({ portalopen: true })

handleClose(){  this.setState({ portalopen: false }) 
                if(this.state.reload){this.reload()} }

handletextarea(e,data){
  this.setState({textarea:data.value})
}
handleInput (e,data){
  this.setState({input:data.value})
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

     
      <TransitionablePortal
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                    openOnTriggerClick
                    trigger={
                      <button style={{backgroundColor:"#58d629",borderStyle:"none",color:"white",fontWeight:"bold",fontSize:"15px"}}> MANAGE </button>

                    }>
                        
                    <Segment
                    style={{ left: '30%', position: 'fixed', top: '20%', zIndex: 1000 ,width:'40%',minHeight:'250px'}}
                    >
                    <Header>NER MANAGE</Header>
                   <Grid>
                     <Grid.Column>
                       <Grid.Row>
                         <Form>
      <TextArea placeholder='ข้อความ' style={{ maxHeight: 250 }}  onChange = {this.handletextarea}/>
                        </Form>
                        <p style={{color:"red"}}> {this.state.error.msg } </p>
                        <p style={{color:"green"}}> {this.state.success}</p>
                       </Grid.Row>

                       <Grid.Row style={{marginTop:"5px"}}>
                       <Input
                          label={{ basic: true, content: 'ID' }}
                          labelPosition='right'
                          placeholder='Enter ID'
                          onChange = {this.handleInput}
                          /> 
                        
                       </Grid.Row>

                       <Grid.Row style={{marginTop:"5px"}}>
                        <Button positive onClick={this.doPost}>POST</Button> 
                        
                   
                        <Button negative onClick={this.doDelete}>Delete</Button>
                        
                    
                 
                       </Grid.Row>

                 

                     </Grid.Column>
                   </Grid>
                    
           
                    </Segment>
                    </TransitionablePortal>


                    <button style={{backgroundColor:"#35b6e7",borderStyle:"none",color:"white",fontWeight:"bold",fontSize:"15px"}}> DATA </button>

           
      

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

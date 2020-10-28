import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import { Pagination ,TransitionablePortal, Button, Segment, Header,Input,Dropdown,Grid,Card} from 'semantic-ui-react'


class Databoard extends React.Component {

    

        constructor(props) {
            super(props);
            
            this.state = {
                pick:{
                    "begin":0,
                    "end":0
                },
                portalopen:false,
                text:"ข้อความ",
                seltag:"Location",
                error:{
                    status:false,
                    msg:""
                },
                reload:false

            }
        

            this.handle = this.handle.bind(this);
            this.textareahandle = this.textareahandle.bind(this);
            this.Updatebg = this.Updatebg.bind(this);
            this.checktext = this.checktext.bind(this);
            this.tag_select = this.tag_select.bind(this);
            this.doPut = this.doPut.bind(this);
            this.confirm = this.confirm.bind(this);
            this.handleClose = this.handleClose.bind(this);


         
        }
        

        



        componentDidMount() {

            setInterval(() => {
                if(document.getElementById('checkmark')!=null){
                    var x = document.getElementById('checkmark')
                    x.style.display = 'none'
                }
               
                this.setState({error:{msg:""}})
                
              }, 4000);


        }


        componenWillUnmount() {

        }

        componentDidUpdate(oldProps){

        }
        
        shouldComponentUpdate(nextProps, nextState){
            const { prop } = this.props
            if (prop !== nextProps.posts) {
              return true
            }
            return false
        }


        handle(event) {

            this.props.setState({
                txt: event.target.value
            });

        }

        confirm(i){
            this.setState({error:{status:false,msg:""}})
            if(i===0){}
            if(i===1){}

        }

        reload(){window.location.reload()}

        handleOpen = () => this.setState({ portalopen: true ,pick:{begin:0,end:0},text:"ข้อความ" })

        handleClose(){  this.setState({ portalopen: false }) 
                        if(this.state.reload){this.reload()} }
                        

    
       


        doPut(data){
            var error = 0
            var location = []
            var have = false

            if((this.state.pick.begin===0&&this.state.pick.end===0 )|| this.state.pick.begin===this.state.pick.end){
                error+=1
                this.setState({error:{status:true,msg:"Please Select Text"}});
            }

           

            data.mentions.map(mention=>{

                location.push(`${mention.location.begin},${mention.location.end}`)
    

                   return[]
                })
                var base_location = `${this.state.pick.begin},${this.state.pick.end}`

               for(var i = 0 ; i<=location.length;i++){
                   if(location[i]===base_location){
                       have = true
                   }
               }


    

                if(error===0&&have===true){
                    this.checkmark()
                    axios.put(`${this.props.Url_settype}${data.id}/${this.state.pick.begin}/${this.state.pick.end}/${this.state.seltag}`)
                    this.setState({reload:true})
                    

                }
                else{
                    this.setState({error:{status:true,msg:"Tags Not Found"}});
                }

    
            
        
        }

        doPost(data){
            var error = 0

            if((this.state.pick.begin===0&&this.state.pick.end===0 )|| this.state.pick.begin===this.state.pick.end){
                error+=1
                this.setState({error:{status:true,msg:"Please Select Text"}});
            }

           

            data.mentions.map(mention=>{
                
                if(mention.location.begin === this.state.pick.begin && mention.location.end === this.state.pick.end)
                    {   error+=1
                        this.setState({error:{status:true,msg:"This Tag already exists!"}});
                    }
                    return[]
                })

                if(error===0){

                    var Rest = data
                    Rest.mentions.push( {
                        "location": {
                          "begin": this.state.pick.begin,
                          "end": this.state.pick.end
                        },
                        "text": this.state.text,
                        "type": this.state.seltag,
                      });
    
                    axios.put(`${this.props.Url_update}${data.id}`,Rest)
                    this.checkmark()


                }

    
            
        
        }

        doDelete(data){
            var error = 0
            var location = []
            var have = false

            if((this.state.pick.begin===0&&this.state.pick.end===0 )|| this.state.pick.begin===this.state.pick.end){
                error+=1
                this.setState({error:{status:true,msg:"Please Select Text"}});
            }

           

            data.mentions.map(mention=>{

                location.push(`${mention.location.begin},${mention.location.end}`)
    

                   return[]
                })
                var base_location = `${this.state.pick.begin},${this.state.pick.end}`

               for(var i = 0 ; i<=location.length;i++){
                   if(location[i]===base_location){
                       have = true
                   }
               }




                if(error===0&&have===true){
                    this.checkmark()
            

                    
                    axios.delete(`${this.props.Url_unset}${data.id}/${this.state.pick.begin}/${this.state.pick.end}`)
                    this.setState({reload:true})

                }
                else{
                    this.setState({error:{status:true,msg:"Tags Not Found"}});
                }

    

        }

        
        checkmark(){

            try{
                var x = document.getElementById('checkmark')
                    x.style.display = 'block'
            }catch(e){console.log(e)}

        }


        textareahandle(){

                var start = 0
                var end = 0
                var selection = window.getSelection()
                var range = selection.getRangeAt(0)
            
            
                console.log(range.startOffset,range.endOffset,selection.toString())
                start = range.startOffset
                end =  range.endOffset

                this.setState({"pick":{begin:start,end:end},text:selection.toString()})

            
        }
    

        tag_select(data){
            this.setState({seltag:data.value})
        }
        checktext(){
            if(this.state.text===""){
                return ""
            }
            return this.state.text
        }
        




         Updatebg(data){

            var text = data.text;
            var html = [];
            var cut = [];
            var lo_begin = [];
            var lo_end = [];

                var m = data.mentions.sort((a,b)=>{return a.location.begin - b.location.begin})
                m.map((m,i)=>{
                cut.push(<span key={"child : "+i} className={m.type}>{text.slice(m.location.begin,m.location.end)}</span>)
                lo_begin.push(m.location.begin)
                lo_end.push(m.location.end)
                return[]
            })
            

            for(var i = 0;i<=cut.length;i++){
                if(i===0){
                html.push(<span key={"normal :"+i}>{text.slice(0,lo_begin[i])}</span>)
                    html.push(cut[i])
                }
                else{
                    html.push(<span key={"normal :"+i}>{text.slice(lo_end[i-1],lo_begin[i])}</span>)
                    html.push(cut[i])
                }
            }

            return html

            

        }



        render() {

        //Slice Page Number

            const pageNumber = [],
                indexOfLastPost = this.props.currentpage * this.props.postperpage ,
                indexOfFirstPost = indexOfLastPost - this.props.postperpage,
                currentpost = this.props.posts.slice(indexOfFirstPost,indexOfLastPost);
        
            for(let i =1 ;i<=Math.ceil(this.props.posts.length/this.props.postperpage);i++)
            {pageNumber.push(i);}

            const { portalopen } = this.state.portalopen

            const Tags = 
            [
                { key: 'A', value: 'Address', text: 'Address' },
                { key: 'Da', value: 'Date', text: 'Date' },
                { key: 'Du', value: 'Duration', text: 'Duration' },
                { key: 'E', value: 'EmailAddress', text: 'EmailAddress' },
                { key: 'F', value: 'Facility', text: 'Facility' },
                { key: 'G', value: 'GeographicFeature', text: 'GeographicFeature' },
                { key: 'H', value: 'Hashtag', text: 'Hashtag' },
                { key: 'J', value: 'JobTitle', text: 'JobTitle' },
                { key: 'L', value: 'Location', text: 'Location' },
                { key: 'I', value: 'IPAddress', text: 'IPAddress' },
                { key: 'Me', value: 'Measure', text: 'Measure' },
                { key: 'Mo', value: 'Money', text: 'Money' },
                { key: 'N', value: 'Number', text: 'Number' },
                { key: 'Ord', value: 'Ordinal', text: 'Ordinal' },
                { key: 'Org', value: 'Organization', text: 'Organization' },
                { key: 'Pers', value: 'Person', text: 'Person' },
                { key: 'Perc', value: 'Percent', text: 'Percent' },
                { key: 'Pro', value: 'Product', text: 'Product' },
                { key: 'Pho', value: 'PhoneNumber', text: 'PhoneNumber' },
                { key: 'Tw', value: 'TwitterHandle', text: 'TwitterHandle' },
                { key: 'Ti', value: 'Time', text: 'Time' },
                { key: 'URL', value: 'URL', text: 'URL' },
                
               
              ]
        // Get Data Total
       


                return (  
                <div className="Dashboard"> 
                <Card.Group itemsPerRow={1} stackable style={{width:"30%",right:"-39%",height:"800px",position:"relative",fontSize:"20px",marginButtom:"20px"}}>
                { currentpost.map((data ,i) => { 
                      return [
         
            
                    <div  key={"x" + data.id}>


    <Card 
	 style={{overflow: 'auto', maxHeight: 300,minHeight:150}}>
      <Card.Content >
        <Card.Description >
        <p>{this.Updatebg(data)}</p>
        </Card.Description>
      </Card.Content>
    </Card>

    

 


            
                     <TransitionablePortal
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                    openOnTriggerClick
                    trigger={

                    <Button
                    style={{position:"relative",right:"-170px",top:"-60px"}}
                    key={"b"+data.id}
                    content={portalopen ? 'EDIT' : 'EDIT'}
                    negative={portalopen}
                    positive={!portalopen}
                    />

                    }>
                        
                    <Segment
                    style={{ left: '30%', position: 'fixed', top: '20%', zIndex: 1000 ,width:'40%',minHeight:'230px'}}
                    >
                    <Header>ข้อความรหัสที่ {data.id}</Header>
                    <Grid columns={2} divided style={{marginRight:'5px',marginLeft:'5px'}}>
                    <Grid.Row>
                        <Segment style={{width:"90%"}}>  <p onMouseUp={this.textareahandle}>{data.text}</p>   </Segment>
                        <i id="checkmark" className="check circle outline icon" style={{color:'green',fontSize:'150%',marginTop:'3%',marginLeft:'2%',display:'none'}}></i>
                    <p style={{color:'red',marginLeft:'5%'}}>{this.state.error.msg}</p>
                    </Grid.Row>
                    <Grid.Row>
                   <Grid.Column>
                <Input placeholder='ข้อความ' value={this.state.text} style={{width:"100%"}}  />
                 
                   </Grid.Column>
                   
                   <Grid.Column>
                      <Button disabled={true} >{this.state.pick.begin}</Button>
                    <Button disabled={true} >{this.state.pick.end}</Button>
                   
                </Grid.Column>
                    </Grid.Row>
                  
                    <Grid.Row> <Dropdown placeholder='State' fluid search selection options={Tags} style={{MarginTop:'10%'}} onChange={(e,data)=>this.tag_select(data)}/></Grid.Row>
                    <Grid.Row>
                    
                     <Button className ="ui primary button" onClick={()=>this.doPost(data)} > POST</Button> 
                    <Button className ="ui yellow button"  onClick={()=>this.doPut(data)}> PUT</Button>
                    <Button className ="ui red button" onClick={()=>this.doDelete(data)}> DELETE</Button>
                    </Grid.Row>
                    
                    </Grid>
                    </Segment>
                    </TransitionablePortal>

                 
                
                    
                    
                    </div>





                   
                   
                    ]})}


                    <Pagination ellipsisItem={null} activePage={this.props.currentpage} totalPages={pageNumber.length} onPageChange={this.props.Changepage}/>
                    </Card.Group>
                    
                        

                   
                
            
           
        
                    </div>
                                    )}}

export default Databoard;
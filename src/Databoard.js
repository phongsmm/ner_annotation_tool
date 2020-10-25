import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Pagination ,TransitionablePortal, Button, Segment, Header,Input} from 'semantic-ui-react'


class Databoard extends React.Component {

    

        constructor(props) {
            super(props);
            
            this.state = {
                pick:{
                    "begin":0,
                    "end":0
                },
                portalopen:false,
                text:"ข้อความ"

            }
        

            this.handle = this.handle.bind(this);
            this.Updatestate = this.Updatestate.bind(this);
            this.textareahandle = this.textareahandle.bind(this);
            this.Updatebg = this.Updatebg.bind(this);
            this.checktext = this.checktext.bind(this);

         
        }
        

        



        componentDidMount() {


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

        handleOpen = () => this.setState({ portalopen: true ,pick:{begin:0,end:0},text:"ข้อความ" })
        handleClose = () => this.setState({ portalopen: false })


        Updatestate(data,i){
            data.mentions.map((lo)=> {
                 console.log(`${lo.text}:${lo.type} ( ${lo.location.begin},${lo.location.end})` )


                return "";
            }   
            );

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

       

        // Get Data Total
       


                return (  
                <div> 
                    { currentpost.map((data ,i) => { 
                      return [
                    <div key={"a" + data.id} > 
                    <div className="ui grid">
                    <div className="row">
                    <div className="thirteen wide column">

                    <div className="ui card" >
                        <div className="content" >
                            <div className="description"> <p>{this.Updatebg(data)}</p> </div>
                        </div>
                    </div>
                    </div>

                    <div className="column">

                    <TransitionablePortal
                    closeOnTriggerClick
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                    openOnTriggerClick
                    trigger={
                    <Button className="ui primary button"
                    key={"b"+data.id}
                    onClick={()=>{this.Updatestate(data,i)}}
                    content={portalopen ? 'EDIT' : 'EDIT'}
                    negative={portalopen}
                    positive={!portalopen}
                    />}>
                        
                    <Segment
                    style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
                    >
                    <Header>ข้อความรหัสที่ {data.id}</Header>
                    <p onMouseUp={this.textareahandle}>{data.text}</p>
                    
                    <button className ="ui primary button"> POST</button>
                    <Input placeholder='ข้อความ' value={this.state.text} style={{width:"45%", "marginRight":"5px"}}  />
                    <button className ="ui  button" disabled={true} >{this.state.pick.begin}</button>
                    <button className ="ui  button" disabled={true} >{this.state.pick.end}</button>
                    </Segment>
                    </TransitionablePortal>

                    </div>
                    </div>
                    </div>
                    </div>
                    ];    
                            })}

                    <div className="mt-30 mb-20">
                        <Pagination ellipsisItem={null} activePage={this.props.currentpage} totalPages={pageNumber.length} onPageChange={this.props.Changepage}/>
                    </div>

                   
                    
                </div>
                                    )}}

export default Databoard;
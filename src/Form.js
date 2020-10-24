import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Pagination } from 'semantic-ui-react'


class Form extends React.Component {

        constructor(props) {
            super(props);
        

            this.handle = this.handle.bind(this);
            this.Updatestate = this.Updatestate.bind(this);
            this.textareahandle = this.textareahandle.bind(this);
            this.Updatebg = this.Updatebg.bind(this);

         
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

        Updatestate(id){
            
            this.props.posts.map((post)=> {
                if(post.id===id){
                    

                    post.mentions.map((lo)=>console.log(`${lo.text}:${lo.type} ( ${lo.location.begin},${lo.location.end})` ));

                    
                }
                return "";
            }   
            );

        }

        textareahandle(event){

            if(document.getSelection().toString()!==""){
                var selection = window.getSelection(),
                range = selection.getRangeAt(0),
                start = range.startOffset,
                end = range.endOffset;

                console.log(selection.toString());
                console.log(range)
                console.log(`${start},${end}`)
            }
        }

         Updatebg(text,id){

            var data = text;
            var html = [];
            var cut = [];
            var lo_begin = [];
            var lo_end = [];
            this.props.posts.map((post)=>{ 
                if(post.id===id){
                    var m = post.mentions.sort((a,b)=>{return a.location.begin - b.location.begin})
                m.map((m,i)=>{cut.push(<span key={"child : "+i} className={m.type}>{data.slice(m.location.begin,m.location.end)}</span>)
                lo_begin.push(m.location.begin)
                
                return lo_end.push(m.location.end)
            })
                }
               
                

                return [];
            })

            for(var i = 0;i<=cut.length;i++){
                if(i===0){
                html.push(<span key={"normal :"+i}>{data.slice(0,lo_begin[i])}</span>)
                    html.push(cut[i])
                }
                else{
                    html.push(<span key={"normal :"+i}>{data.slice(lo_end[i-1],lo_begin[i])}</span>)
                    html.push(cut[i])
                }
            }





            return <span>{html}</span>

        }



        render() {

        //Slice Page Number
            const pageNumber = [],
                indexOfLastPost = this.props.currentpage * this.props.postperpage ,
                indexOfFirstPost = indexOfLastPost - this.props.postperpage,
                currentpost = this.props.posts.slice(indexOfFirstPost,indexOfLastPost);
        
            for(let i =1 ;i<=Math.ceil(this.props.posts.length/this.props.postperpage);i++)
            {pageNumber.push(i);}

       

        // Get Data Total
       


                return (  <div> 
                    { currentpost.map((data) => { 
                      return [

                    <div key={"a" + data.id}> 
                    <div className="ui grid">
                    <div className="row">
                    <div className="thirteen wide column">
                    <div className="ui card"><div className="content">
                    <div className="description"><p key = {data.id} onMouseUp={this.textareahandle} id="textarea"> { this.Updatebg(data.text,data.id)} </p></div></div></div>
                    </div>
                    <div className="column">
                    <button className="ui primary button" key={"b"+data.id} onClick={()=>{this.Updatestate(data.id)}}>Click </button> 
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
                                    );
                                }
                            }

                            export default Form;
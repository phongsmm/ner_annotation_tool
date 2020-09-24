import React from 'react';
import './App.css';
import 'mark.js';
import {text} from './Data';

class Form extends React.Component {

        constructor() {
            super();
            this.state = {
                txt: "",
                posts: [],
                currentpage: 1,
                postperpage: 50,
            };

        

            this.handle = this.handle.bind(this);
            this.Changepage = this.Changepage.bind(this);
            this.Updatestate = this.Updatestate.bind(this);
            this.textareahandle = this.textareahandle.bind(this);
        }

         



        componentDidMount() {

            this.setState({posts:text});
           

           

           

        }

        componenWillUnmount() {
        }

        handle(event) {

            this.setState({
                txt: event.target.value
            });

        }
        Changepage(number){

            this.setState({currentpage:number});

        }

        Updatestate(id,newtext){
            
            this.state.posts.map((post)=> {
                if(post.id===id){
                   // this.setState({});
                    post.mentions.map((lo)=>console.log(`${lo.text}:${lo.type} ( ${lo.location.begin},${lo.location.end})` ));
                    
                }
                return "";
            }   
            );

        }

        textareahandle(event){

            //  var selectstart = event.target.selectionStart,
            //     selectend = event.target.selectionEnd,
            //    selected = event.target.value.substring(selectstart,selectend);
            
            //    console.log(selected)
            if(document.getSelection().toString()!==""){
                var selection = window.getSelection(),
                 range = selection.getRangeAt(0),
                start = range.startOffset,
                end = range.endOffset;
                console.log(selection.toString());
                console.log(`${start},${end}`)
            }
           

   

            
           

        }
      



        render() {

            const pageNumber = [],
                indexOfLastPost = this.state.currentpage * this.state.postperpage ,
                indexOfFirstPost = indexOfLastPost - this.state.postperpage,
                currentpost = this.state.posts.slice(indexOfFirstPost,indexOfLastPost);
     
            for(let i =1 ;i<=Math.ceil(this.state.posts.length/this.state.postperpage);i++)
            {pageNumber.push(i);}
                return (  <div> 
                    { currentpost.map((data) => { 
                      return [
                    <div key={"a" + data.id} > <p key = {data.id} onMouseUp={this.textareahandle} id="textarea"> { data.text} </p>
                    <button key={"b"+data.id} onClick={()=>{this.Updatestate(data.id,"ทดสอบข้อความใหม่")}}>Click </button> 
                    </div>
                    ];    
                            })}
                                <div className="grid-container">
                                    {pageNumber.map(number=>(<li key={number}><a href='!#' onClick={()=>this.Changepage(number)}>{number}</a></li>
                                     ))}

                                </div>
                    
                                    </div>
                                    );
                                }
                            }

                            export default Form;
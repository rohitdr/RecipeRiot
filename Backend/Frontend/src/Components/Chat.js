import React, { useContext, useState } from 'react'
import './chat.css'
import { Input,Button } from '@nextui-org/react';
import RecipeContext from "../Context/RecipeContext";
import {Configuration, OpenAIApi } from "openai";

export default function Chat() {
    const context = useContext(RecipeContext)
    const {setProgress} = context
    const [inpuresultarray,setinpuresultarray]=useState([]
    )
    const getairesult = async()=>{


        try {
    setProgress(30)
          const response = await fetch(
            `${process.env.REACT_APP_Fetch_Api_Start}/recipe/findInAi`,
            {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
               
              },
              body: JSON.stringify({ question: document.getElementById("Message").value}),
            }
          );
          setProgress(50)
          let result = await response.json();
          
      

          setProgress(70)
            setinpuresultarray(inpuresultarray.concat([{input:document.getElementById("Message").value,output:      result.choices[0].text.split(".")}]))
              
            setProgress(100)
       document.getElementById("Message").value=""
        } catch (error) {
            setProgress(100)
          console.log(error.message);
        }
    

    }
  return (
    <div>
      
      <div class="container">
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card chat-app mt-4">
            {/* <div id="plist" class="people-list">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search..."/>
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Vincent Porter</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                        </div>
                    </li>
                    <li class="clearfix active">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Aiden Chavez</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Mike Thomas</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>                                    
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Christian Kelly</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Monica Ward</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Dean Henry</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                        </div>
                    </li>
                </ul>
            </div> */}
            <div class="chat">
                <div class="chat-header clearfix">
                    <div class="row">
                      
                   <h6>Chat With Us</h6>
                        
                    </div>
                </div>
                <div class="chat-history">
                    <ul class="m-b-0">
                    <li class="clearfix ">
                            <div class="message-data text-right">
                                <span class="message-data-time">{new Date().toLocaleTimeString()}</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                            </div>
                            <div class="message other-message float-right boxshadow">How can I help You </div>
                        </li>
                    { inpuresultarray && inpuresultarray?.map((ele)=>{ 
              return  <div >
                                             
                     <li class="clearfix" >
                            <div class="message-data">
                                <span class="message-data-time">{new Date().toLocaleTimeString()}</span>
                            </div>
                            <div class="message my-message boxshadow" > {ele.input}</div>
                        </li> 
                        <li class="clearfix">
                            <div class="message-data text-right">
                                <span class="message-data-time">{new Date().toLocaleTimeString()}</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png"  alt="avatar"/>
                            </div>
                            <div class="message other-message float-right boxshadow"> {ele?.output?.map((element)=>{ return <div>{element}</div>})} </div>
                        </li></div>
                        })}
                    </ul>
                </div>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend">
                            {/* <span class="input-group-text"></span> */}
                        </div>
                        {/* <input type="text" class="form-control" name='Message'  id='Message' placeholder="Enter text here..."/>  
                         */}
                          <Input 
         
          placeholder="Enter text here..." 
          color="primary"
          name='Message'
            id='Message' 
          contentLeft={<i class="fa fa-send"></i>}
          contentClickable={true}
         contentRight={<i class="fa-solid fa-circle-arrow-right fs-4"  onClick={getairesult}></i>}
         
        />
                        {/* <input type="button" value="submit" onClick={getairesult}/>                                   */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
  )
}

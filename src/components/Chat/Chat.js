import { Button, Col, Input, Row } from 'antd'
import React, { useState } from 'react'
import Avatar from 'react-avatar'
import {
 LikeOutlined 
} from '@ant-design/icons';
import InputEmoji from "react-input-emoji";

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [text,setText] = useState("")

    const onChangeHandler = (event)=>{
        if(event.key === 'Enter' && text !== ""){      
            setMessages([...messages,{name:user_list[generateRandomInteger(0, 4)],message:text,likes:0}])
        }
    }

    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]

    function generateRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleLikes = (data)=>{
    const nn = messages.findIndex(x => x.name ===data.name)
    if(messages[nn]) messages[nn].likes = messages[nn]?.likes +1
    setMessages([...messages])
    }

  return (
    <div style={{ height:"100vh" ,backgroundColor:"#80808033"}}>
        <div style={{padding:"1rem", borderBottom:"1px solid grey"}}>
           <Row>
            <Col style={{fontWeight:500,fontSize:"20px"}}>Introductions</Col>
           </Row>
        </div>
         <div className='chat_area'>
        {
            messages.map((data,i)=>(
        <div style={{marginLeft:"2rem", textAlign:"left"}}>
            <Row>
                <Col style={{marginTop:"0.8rem"}} span={1}>
                     <Avatar size="40" round={true} name={data.name} maxInitials={1}/>
                </Col>
                <Col style={{marginTop:"1rem",marginLeft:"0.6rem",marginBottom:"10px"}} span={22} >
                    <div style={{fontWeight:"600" , fontSize:"16px"}} >{data.name}</div><br/>
                    <span style={{marginTop:"6px",backgroundColor:"white",padding:"0.8rem",borderRadius:"0 12px 12px 12px"}}>
                        {data.message}</span> &nbsp; {data.likes}&nbsp;
                         <Button 
                         onClick={()=>handleLikes(data)}
                     style={{backgroundColor:"#f8fbfe"}}><LikeOutlined /></Button>
                </Col>
            </Row>
           
        </div>
            ))
        }
        </div>
       
        <div className="input_div">
             <InputEmoji
             style={{backgroundColor:"rgb(128 128 128 / 6%)",
             color:"black",
              borderRadius:"2rem",
              border:"1px solid black"}}
            onChange={(e)=>setText(e)}
      cleanOnEnter
       onKeyDown={onChangeHandler}  
      placeholder="Type a message"
    />
        </div>
    </div>
  )
}

export default Chat
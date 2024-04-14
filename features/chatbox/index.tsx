'use client';

import React from 'react';
import { useEffect, useRef, useState } from "react";
import { socket } from './socket';

import Header from './components/Header';
import ToggleChatIcon from './components/ToggleChatIcon';
import ChatboxContainer from './components/ChatboxContainer';
import MessagesBox from './components/MessagesBox';
import MessageInput from './components/MessagesInput';
import UsernameInfo from './components/UsernameInfo';

export default function Chatbox(){
    
    const [messages, setMessages] = useState<any>([]);   
    const [username, setUsername] = useState<string>('');    
    const [numberOfOnlineUsers, setNumberOfOnlineUsers] = useState<number>(0);
    const socketId = socket.id;
    
    const [isChatVisible, setChatVisibility] = useState<boolean>(true);   
    const chatWidth = isChatVisible ? '40vh' : '0vh';    
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const currentMessage = useRef<HTMLTextAreaElement | any>(null);
    const bottomDivRef = useRef<HTMLDivElement>(null);

    const usernameIsSet = !username;

    useEffect(() => {
        if (socket.connected) {
          onConnect();
        }
    
        function onConnect() {                        
            socket.emit("username", 'anonymous');                        
        }
    
        function onDisconnect() {
            socket.disconnect();
        }
    
        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);        

        socket.on('message', (message) => {            
            setMessages((prevMessages: any) => [...prevMessages, message])
        });        
        
        socket.on('numberOfOnlineUsers', (message) => {            
            setNumberOfOnlineUsers(message)
        });                
    
        return function cleanup() {
          socket.off("connect", onConnect);
          socket.off("disconnect", onDisconnect);
          socket.off("message");          
        };
      }, []);
   
    useEffect(() => {
        scrollToBottom();
    }, [messages])

    const toggleChatbox = () => setChatVisibility(oldState => !oldState);

    const sendMessage = () => {        
        const message = currentMessage?.current?.value.trim();        
        message && socket.emit('message', message);
        currentMessage.current.value = '';        
    }

    const sendUsername = () => {
        const username = usernameRef?.current?.value.trim();
        username && setUsername(username);
        username && socket.emit('username', username);
        
    }

    const scrollToBottom = () => {
        bottomDivRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    
    return(
        <section style={{ width: chatWidth }} className="relative h-full p-4 transition-all duration-700">

            <ToggleChatIcon isChatVisible={isChatVisible} toggleChatbox={toggleChatbox} />

            <ChatboxContainer isChatVisible={isChatVisible}>

                <Header title="General Chat" onlineUsers={numberOfOnlineUsers} />

                <UsernameInfo 
                    username={username}
                    usernameIsSet={usernameIsSet}
                    sendUsername={sendUsername}
                    ref={usernameRef}
                />    
                    
                <MessagesBox 
                    messages={messages}
                    socketId={socketId}
                    ref={bottomDivRef}
                />

                <MessageInput ref={currentMessage} onClick={() => sendMessage()} />
                
            </ChatboxContainer>
         

        </section>
    )
}


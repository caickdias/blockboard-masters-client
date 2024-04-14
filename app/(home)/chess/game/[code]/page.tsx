'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { io } from 'socket.io-client';

import Gameboard from '@/features/gameboard';

export const socket = io("http://localhost:8003", {
  transports: ["websocket", "polling"]
});

export default function Game(){

    const { code } = useParams();

    useEffect(() => {
        if (socket.connected) {
          onConnect();
        }
    
        function onConnect() {                        
            socket.emit("joinRoom", code);                        
        }
    
        function onDisconnect() {
            socket.disconnect();
        }
    
        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);        
    
        return function cleanup() {
          socket.off("connect", onConnect);
          socket.off("disconnect", onDisconnect);
          socket.off("message");          
        };
      }, []);
   

    return(
        <main className='flex flex-1 flex-col items-center justify-center'>
            {code}

            <Gameboard />

        </main>
    )
}
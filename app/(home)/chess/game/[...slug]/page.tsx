'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { io } from 'socket.io-client';

import Gameboard from '@/features/gameboard';

export const socket = io("http://localhost:8003", {
  transports: ["websocket", "polling"]
});

export default function Game(){

    const { slug } = useParams();
    const [time, code] = slug;

    const [playerColor, setPlayerColor] = useState<'white' | 'black' | ''>('');
    const [playerTurn, setPlayerTurn] = useState<'white' | 'black'>('white');
    const [playerWhite, setPlayerWhite] = useState('');
    const [playerBlack, setPlayerBlack] = useState('');

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
        
        socket.on("roomJoined", (data) => {
          const { white, black, turn } = data;
          const isPlayerWhite = white == socket.id;

          setPlayerColor(isPlayerWhite ? 'white' : 'black');
          setPlayerTurn(turn);
          setPlayerBlack(black);
          setPlayerWhite(white);

        })

        return function cleanup() {
          socket.off("connect", onConnect);
          socket.off("disconnect", onDisconnect);
          socket.off("message");          
        };
      }, []);
       

    return(
        <main className='flex flex-1 flex-col items-center justify-center'>                      
            <div className='flex flex-col gap-2'>
              <PlayerLabel name={playerBlack} />              
              <Gameboard />
              <PlayerLabel name={playerWhite} />
            </div>
        </main>
    )
}

const PlayerLabel = ({ name }: { name: string }) => <h1 className='w-full font-bold text-right text-3xl'>{name}</h1>
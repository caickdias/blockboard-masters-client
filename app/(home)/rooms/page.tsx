import Link from 'next/link';
import React from 'react';

export default function Page(){

    
    return(
        <main className='flex flex-1 flex-col py-4 px-8 gap-8'>

            <h1 className='text-4xl font-bold text-main-purple'>Rooms</h1>

            <div>
                <RoomCard />
            </div>

        </main>
    )
}

const RoomCard = ({}) => {

    return(
        <div className='flex flex-col w-64 rounded-lg bg-white shadow-md shadow-zinc-400'>
            <h1 className='w-full bg-main-purple text-white p-2 rounded-t-lg font-bold'>{`\u2654`} Chess</h1>

            <div className=' p-2'>
                <p className='font-bold'>Bids</p>

                <div className='flex flex-row items-center gap-10 text-sm'>
                    <h1>Min: 10</h1>
                    <h1>Max: 40</h1>
                </div>
            

                

                <div className='flex flex-row items-center justify-between overflow-hidden whitespace-nowrap border-t-[1px] border-zinc-400 pt-2 mt-4'>
                    <p className='text-sm font-bold'>player's name</p>

                    <Link 
                        href={`/chess/game/7`} 
                        className='flex flex-row w-full justify-end items-center hover:opacity-80 transition-all duration-300'
                    >                        
                        <p className='w-auto bg-main-purple text-white px-3 rounded-md'>Join</p>                
                    </Link>
                </div>
            </div>
        </div>
    )
}
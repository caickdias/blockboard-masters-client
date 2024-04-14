import React from 'react';

export default function Board(){

    const boardPieces = 
    [
        ['', '', '', '', '', '', '', ''],
        ['', '', 'c', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
    ]

    return(
        <div className='flex flex-col'>
        {   
            boardPieces.map((row, x) => (
                <div className='flex flex-row'>
                {
                    row.map((item, y) => (
                        <div className='flex w-12 h-12 items-center justify-center bg-red-500'>
                            {`${x}${y}${item}`}
                        </div>
                    ))
                }
                </div>
            ))
        }
        </div>
    )
}
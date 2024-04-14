'use client';

import React from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Link from 'next/link';

export default function CreateRoom() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
        <Button className='bg-main-purple text-white font-bold' onPress={onOpen}>Create room</Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Create Room</ModalHeader>
                        <ModalBody>
                            <h1>Game: <span className='font-bold'>Chess</span></h1>
                            <h1>Time: <span className='font-bold'>3 + 0</span></h1>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                             Cancel
                            </Button>

                            <Link href={`/chess/game/3/${Math.floor(Math.random() * 1000)}`}>
                                <Button                                     
                                    className='bg-main-purple text-white font-bold' onPress={onClose}
                                >
                                    Create
                                </Button>
                            </Link>

                        </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>    
        </>
    );
}
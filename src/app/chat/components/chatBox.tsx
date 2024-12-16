"use client"
import React, { useState } from 'react'
import MessageBubble from './messageBubble';
interface Message {
    text: string;
}
const ChatBox: React.FC<any> = ({ messages, onEditMessage }) => {
    return (
        <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50'>
            {
                messages.map((message: any) => (
                    <MessageBubble
                        text={message.text}
                        isUser={message.isUser}
                        onEdit={(newText) => onEditMessage(message.id, newText)}
                    />
                ))
            }
        </div>
    )
}

export default ChatBox
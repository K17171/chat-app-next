"use client"
import { useState } from 'react';
import ChatBox from './components/chatBox';
import ChatInput from './components/Chatinput';
import Sidebar from './components/Sidebar';

const ChatHome = () => {
    const [chats, setChats] = useState([
        {
            id: 1, title: "Chat 1",
            message: [{ id: 1, text: "Hello! How can I help you?", isUser: false }]
        }
    ]);

    const [currentChatId, setCurrentChatid] = useState<number>(1);
    const currentChat = chats.find((chat) => chat.id === currentChatId)

    const handleSendMessage = (text: string) => {
        const newMessage = { id: (currentChat?.message.length || 0) + 1, text, isUser: true };
        setChats((prevChat) =>
            prevChat.map((chat: any) =>
                chat?.id === currentChatId ? { ...chat, message: [...chat?.message, newMessage] } : chat
            )
        )
        setTimeout(() => {
            const botMessage = {
                id: (currentChat?.message.length || 0) + 2,
                text: "I'm a bot! How can I assist?",
                isUser: false,
            };
            setChats((prevChats) =>
                prevChats.map((chat) =>
                    chat.id === currentChatId
                        ? { ...chat, message: [...chat.message, botMessage] }
                        : chat
                )
            );
        }, 1000);
    }

    const handleNewChat = () => {
        const newChatId = chats.length + 1;
        setChats((prev) => [
            ...prev,
            {
                id: newChatId, title: `Chat ${newChatId}`,
                message: []
            }
        ])
        setCurrentChatid(newChatId)
    }

    const handleSelectChat = (id: number) => {
        setCurrentChatid(id)
    }

    const handleEditMessage = (messageId: number, newText: string) => {
        console.log('newText', newText)
        setChats((prevChats) =>
            prevChats.map((chat) =>
                chat.id === currentChatId
                    ? {
                        ...chat,
                        message: chat.message.map((message) =>
                            message.id === messageId ? { ...message, text: newText } : message
                        ),
                    }
                    : chat
            )
        );
    };
    console.log('chats', chats)
    return (
        <div className='flex h-screen'>
            <Sidebar
                chats={chats}
                onReset={handleNewChat}
                onSelectChat={handleSelectChat}
            />
            <div className='flex flex-col flex-1'>
                <ChatBox
                    messages={currentChat?.message}
                    onEditMessage={handleEditMessage}
                />
                <ChatInput sendTo={handleSendMessage} />
            </div>
        </div>
    )
}

export default ChatHome;
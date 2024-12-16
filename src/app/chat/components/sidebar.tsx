import React from 'react'

const Sidebar: React.FC<any> = ({ onReset, onSelectChat, chats }) => {
    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 border-b border-gray-700">
                <h2 className="text-lg font-bold text-center">Chat Box</h2>
            </div>
            <button
                className="m-4 p-2 bg-blue-500 hover:bg-blue-600 rounded text-center"
                onClick={onReset}
            >
                New Chat
            </button>
            <div className='flex flex-col p-4 space-y-2'>
                {
                    chats.map((chat: any) => (
                        <button
                            onClick={() => onSelectChat(chat.id)}
                            className="w-full text-left px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded"
                        >
                            {chat.title}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
"use client"
import React, { useState } from 'react'

const ChatInput: React.FC<any> = ({ sendTo }) => {
    const [input, setInput] = useState("");
    const handleSend = () => {
        if (input.trim()) {
            sendTo(input);
            setInput("")
        }
    }
    return (
        <div className="flex items-center space-x-4 p-4 bg-gray-100 border-t">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target?.value)}
                placeholder='Type your massage..'
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button
                onClick={handleSend}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg"
            >send</button>
        </div>
    )
}

export default ChatInput
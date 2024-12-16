import { useState } from "react";

interface MessageBubbleProps {
  text: string;
  isUser?: boolean;
  onEdit?: (newText: string) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, isUser = false, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    if (isEditing && onEdit) {
      onEdit(editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-lg px-4 py-2 rounded-lg shadow-md ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        } relative`}
      >
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full px-2 py-1 text-black rounded"
          />
        ) : (
          <span>{text}</span>
        )}

        {isUser && (
          <button
            onClick={handleEdit}
            className="absolute top-1 right-2 text-xs text-gray-200 hover:text-gray-100"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;

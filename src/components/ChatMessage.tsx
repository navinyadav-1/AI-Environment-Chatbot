import React from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';
import classNames from 'classnames';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div
      className={classNames(
        'flex items-start gap-4 group',
        isBot ? 'justify-start' : 'justify-end'
      )}
    >
      {isBot && (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          <FaRobot className="text-white text-lg" />
        </div>
      )}
      
      <div
        className={classNames(
          'max-w-[85%] rounded-2xl p-5 shadow-md transform transition-all duration-200 hover:shadow-lg',
          isBot 
            ? 'bg-white border border-emerald-100 hover:border-emerald-200' 
            : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
        )}
      >
        <p className="text-base sm:text-lg leading-relaxed">{message.text}</p>
        {message.facts && (
          <div className="mt-4 pt-4 border-t border-emerald-100">
            <p className="font-medium text-emerald-700 mb-2 text-sm">Quick Facts:</p>
            <ul className="list-disc list-inside space-y-2">
              {message.facts.map((fact, index) => (
                <li key={index} className="text-sm text-emerald-600">{fact}</li>
              ))}
            </ul>
          </div>
        )}
        <span className={classNames(
          'text-xs mt-3 block opacity-75',
          isBot ? 'text-emerald-600' : 'text-emerald-50'
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {!isBot && (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          <FaUser className="text-white text-lg" />
        </div>
      )}
    </div>
  );
};
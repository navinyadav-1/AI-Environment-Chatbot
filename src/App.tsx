import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { ChatContainer } from './components/ChatContainer';
import { ChatInput } from './components/ChatInput';
import { generateResponse, generateMessageId } from './utils/chatUtils';
import { Message } from './types/chat';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Hello! I'm your Environmental Education Assistant. Ask me about climate change, recycling, or renewable energy!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: generateMessageId(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    const response = generateResponse(text);
    const botMessage: Message = {
      id: generateMessageId(),
      text: response.text,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  return (
    <Layout>
      <Header />
      <ChatContainer messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </Layout>
  );
}

export default App;
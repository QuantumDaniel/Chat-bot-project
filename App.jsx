import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    const storedChatMessages = localStorage.getItem('chatMessages');
    return storedChatMessages ? JSON.parse(storedChatMessages) : [
      { message: 'hello chatbot', sender: 'user', id: 'id1' },
      { message: 'hello! How can i help you?', sender: 'robot', id: 'id2' },
      { message: 'can you get me todays date?', sender: 'user', id: 'id3' },
      { message: 'Today is March 5', sender: 'robot', id: 'id4' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    Chatbot.addResponses({
      name: 'My name is chatbot, and you?',
      who: 'I am a chatbot created to help you solve problems. Feel free to ask me questions and i will be do my best to help you.',
      mathematics: 'Select the branch of mathematics you want to walk on: Algebra, Surds, Logarithm, set etc.'
    });
  }, []);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} 
      setChatMessages={setChatMessages} />
    </div>
  );
}

export default App

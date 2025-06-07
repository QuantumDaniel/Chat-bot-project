import { useState,useEffect } from 'react';
import { Chatbot} from 'supersimpledev';
import SpiningImage from '../assets/loading-spinner.gif';
import './ChatInput.css';


export function ChatInput({chatMessages,setChatMessages}){
  const [inputText, setInputText]= useState('');
  const [isLoading, setIsLoading]= useState(false);

   function saveInputText(event){
     setInputText(event.target.value);
   }

   async function sendMessage(){
     if(isLoading || !inputText.trim()) return; // Prevent sending when loading or input is empty
setIsLoading(true);

     setInputText('');
     const newChatMessages = [
   ...chatMessages,
   {
   message:inputText,
   sender: 'user',
   id: crypto.randomUUID()
 }
 ]
     setChatMessages(newChatMessages); 
     const message = <img className='loader' src={SpiningImage}/>;
     setChatMessages([
   ...newChatMessages,
   {
   message:message,
   sender: 'robot',
   id: crypto.randomUUID()
   }
 ]);
 const response = await Chatbot.getResponseAsync(inputText);
 
 setChatMessages([
   ...newChatMessages,
   {
   message:response,
   sender: 'robot',
   id: crypto.randomUUID()
   }
 ]);
 setIsLoading(false);

 
 setInputText('');
   }
   
   function key(event){
    if(event.key === 'Enter'){
     sendMessage();
    }
    if(event.key === 'Escape'){
     setInputText('');
    }
 };

 
  function clearMessage() {
    setChatMessages([]);
  }

 



   return (
     <div className="chat-input-container">
      <input 
       placeholder="Send a message to chatbot"
       size = "30"
       onChange= {saveInputText}
       value={inputText}
       onKeyDown={key}
       className='chat-input'
       
       />
      <button
      onClick={sendMessage}
      disabled={isLoading || !inputText.trim()}
      className="send-button"
      >Send</button>
      <button
      className='clear-button'
      onClick ={clearMessage}
      >Clear</button>
     </div>
   );
 }

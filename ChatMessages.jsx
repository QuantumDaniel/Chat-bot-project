

import {ChatMessage} from './ChatMessage'
import useAutoScroll from './useAutoScroll';
import dayjs from 'dayjs';
import './ChatMessages.css';

 function ChatMessages({chatMessages}){
   const chatMessagesRef = useAutoScroll([chatMessages]);

 if(chatMessages.length === 4){
   return (
   <div className ='app-container'> <p>Welcome the chatbot project! Send a message using the text box below</p></div>
  );
 
 }
return (
 <div className="chat-messages-container"
 ref={chatMessagesRef}>
{chatMessages.slice(4).map((chatMessage)=>{
const time = dayjs().valueOf();
           return(
             <ChatMessage
             message={
              <>
                {chatMessage.message}
                <br />
                {dayjs(time).format('h:mma')}
              </>
            }
            


             sender = {chatMessage.sender} 
             key={chatMessage.id}
             />
           );
         })} 
       </div>
     );
} 
export default ChatMessages;
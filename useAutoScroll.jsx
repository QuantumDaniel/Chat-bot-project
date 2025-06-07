import {useRef,useEffect} from 'react'
function useAutoScroll(dependencies) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
  if (chatMessagesRef.current) {
   chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
   console.log(dependencies)
  }
  }, [dependencies]);
  
  return chatMessagesRef;
  }
export default useAutoScroll;
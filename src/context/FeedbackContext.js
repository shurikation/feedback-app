import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


//This is a provider
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Context!',
      rating: 10
    }
  ]);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }


  const addFeedback = (newFeedback) => {
    //uuidv4 helps generate uniq id for feedback:
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;
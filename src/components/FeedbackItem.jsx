import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('Feedback example');

  const handleClick = () => {
    //state in react is immutable - i can't be directly changed
    setRating((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem;
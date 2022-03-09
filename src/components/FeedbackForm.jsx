import { useState } from 'react/cjs/react.production.min'
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How do you rate?</h2>

        <div className="input-group">
          <input 
            type="text" placeholder='Write a review'
            onChange={handleTextChange}
            value={text}/>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    //uuidv4 helps generate uniq id for feedback:
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList
                feedback={feedback}
                handleDelete={deleteFeedback}
              />
            </>
          }>
          </Route>
          <Route path='/about' element={<AboutPage />} />

           {/* 1. How to show something on specific route: */}
          <Route path='/post/*' element={<Post />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App;
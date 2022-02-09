function App() {
  const title = 'Main title!';
  const body = 'Some text...';
  const comments = [
    { id: 1, text: 'Some text...' },
    { id: 2, text: 'Some text...' },
    { id: 3, text: 'Some text...' },
    { id: 4, text: 'Some text...' },
  ]

  const loading = false;
  const showComments = false;

  if (loading) return <h1>Loading...</h1>

  const commentBlock = (
    <div className='comments'>
    <h3>Comments  ({comments.length})</h3>
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>
      ))}
    </ul>
  </div>
  );

  return (
    <>
      <h1 className='container'>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && commentBlock}

    </>
  )
}

export default App;
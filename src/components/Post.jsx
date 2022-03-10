import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {

  const status = 200;
  const navigate = useNavigate();

  //How to redirect to some page:
  const onClick = () => {
    navigate('/about')
  }
  
  if(status === 404) {
    return <Navigate to='notfound' />
  }

  return (
    <>
      <div>Post</div>
      <button onClick={onClick}>Click</button>

      {/* 2. How to show something on specific route: */}
      <Routes>
        <Route path='/show' element={<h1>Hello!</h1>}/>
      </Routes>
      {/* ...so URL post/show displays "Hello" */}

    </>
  )
}

export default Post
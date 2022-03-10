import React, { useParams } from 'react-router-dom'

function Post() {
  const params = useParams();

  return (
    <>
      <div>Post {params.id}</div>
      <p>Name: {params.name}</p>
    </>
  )
}

export default Post
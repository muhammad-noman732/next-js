import React from 'react'

function BlogsDetail({params}) {
    console.log("props" , params);
    
  return (
    <div>
      {params.slug}
    </div>
  )
}

export default BlogsDetail

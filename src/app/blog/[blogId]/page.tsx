interface BlogId {
  params :{
    blogId:string;
  }
}

const blogDetail =async ({params}:BlogId )=>{
  const blogid = params.blogId
  return<h1>My blog {blogid}</h1>
}

export default blogDetail

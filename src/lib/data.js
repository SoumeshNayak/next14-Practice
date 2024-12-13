const users=[
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'}

]
const posts=[
    {id:1, title: 'Post1',body: '....',userId: 1},
    {id:2, title: 'Post2',body: '....',userId: 1},
    {id:3, title: 'Post3',body: '....',userId: 2},
    {id:4, title: 'Post4',body: '....',userId: 2},

]
export const getPosts= async()=>{
     return posts;
}
export const getPost=async(id)=>{
    const post= posts.find((post)=>post.id===parseInt(id))
    return post
}

export const getUser=async(id)=>{
    const user= users.find((user)=>user.id===parseInt(id))
    return user
}
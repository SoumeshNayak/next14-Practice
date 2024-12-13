import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/lib/data'

// const getData=async(slug)=>{
//   const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if(!res.ok){
//     throw new Error("Something went wrong")
//   }
//   return res.json()
// }
const SinglePostBlog = async({params}) => {
  const {slug}=params;
  // const post=await getData(slug)
  const post=await getPost(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/29632969/pexels-photo-29632969/free-photo-of-autumn-hiking-adventure-in-trondelag-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className={styles.img} fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src='https://images.pexels.com/photos/29632969/pexels-photo-29632969/free-photo-of-autumn-hiking-adventure-in-trondelag-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' width={50} height={50}/>

          {post && (<Suspense fallback={<div>Loding....</div>}>
          <PostUser userId={post.userId}/>
          </Suspense>)}
          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>   </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostBlog

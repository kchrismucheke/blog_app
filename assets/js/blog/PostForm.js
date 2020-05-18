import React, { useState, useEffect } from 'react';

export default function PostForm({ post, clearPost, createPost, updatePost, syncData }) {
  const [title, setTitle] = useState(post ? post.title : "")
  const [content, setContent] = useState(post ? post.content : "")
  const [likes, setLikes] = useState(post ? post.likes : "")

  useEffect(() => {
    setTitle(post ? post.title : "")
    setContent(post ? post.content : "")
    setLikes(post ? post.likes : "")
  }, [post])

  const onReset = (e) => {
    e.preventDefault()
    clearForm()
  }

  const onSync = (e) => {
    e.preventDefault()
    syncData()
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const inputtedForm = { title, content, likes: parseInt(likes) }

    if (post) {
      await updatePost(post, inputtedForm)
    } else {
      await createPost(inputtedForm)
      clearForm()
    }
  }

  const clearForm = () => {
    setTitle("")
    setContent("")
    setLikes("")
    clearPost()
  }

  return (
    <form class="container mx-auto">
      <div class="flex flex-wrap md:flex mb-6 md:items-center">
        <div class="w-full md:w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"> Title: </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"> Content:</label>
          <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"> Likes: </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" value={likes} onChange={(e) => setLikes(e.target.value)} />
        </div>
      </div>
      <button className="bg-transparent hover:bg-gray-800 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded" onClick={onReset}>Add New / Reset</button>
      <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" onClick={onSubmit}>Save</button>
      <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={onSync}>Sync</button>
    </form>
  )
}
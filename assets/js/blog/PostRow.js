import React from 'react';
import withObservables from "@nozbe/with-observables";

const PostRow = ({ post, onEdit, onDelete }) => (
  <tr key={post._raw.id} class="table-auto" >
    <td class="border bg-gray-400 px-4 py-2">{post.title}</td>
    <td class="border bg-gray-400 px-4 py-2">{post.content}</td>
    <td class="border bg-gray-400 px-4 py-2">{post.likes}</td>
    <td class="border bg-gray-400 px-4 py-2">{post.createdAt.toString()}</td>
    <td class="border bg-gray-400 px-4 py-2">{post.updatedAt.toString()}</td>
    <td>
      <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" onClick={(e) => { onEdit(post) }}>Edit</button>
      <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={(e) => { onDelete(post) }}>Delete</button>
    </td>
  </tr>
)

export default withObservables(["post"], ({ post }) => ({
  post: post.observe()
}))(PostRow)
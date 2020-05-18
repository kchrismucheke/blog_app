import React from 'react';
import withObservables from "@nozbe/with-observables";
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import PostRow from './PostRow'

const PostList = ({ posts, onEdit, onDelete }) => (
  <table class="table-auto">
    <thead>
      <tr>
        <th class="">Title</th>
        <th class="">Content</th>
        <th class="">Likes</th>
        <th class="">Created At</th>
        <th class="">Updated At</th>
        <th class="">Actions</th>
      </tr>
    </thead>
    <tbody>
      {posts.map(post => <PostRow key={post._raw.id} post={post} onEdit={onEdit} onDelete={onDelete} />)}
    </tbody>
  </table>
)

export default withDatabase(withObservables([], ({ database }) => ({
  posts: database.collections.get('posts').query().observe(),
}))(PostList))
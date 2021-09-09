// import type { Query } from 'types/graphql'
import type { Query } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<Query>) => {
  return posts.map((post) => (
    <article key={post.id}>
      <header>
        <h1>{post.title}</h1>
      </header>
      <p>{post.body}</p>
      <div>Created @ {post.createdAt}</div>
    </article>
  ))
  // <ul>
  //   {posts.map((item) => {
  //     return <li key={item.id}>{JSON.stringify(item)}</li>
  //   })}
  // </ul>
  // {posts.map((post) => {
  //   return (
  //     <article key={posts.id}>
  //     <h1>{posts.title}</h1>
  //     <p>{posts.body}</p>
  //   </article>
  //   )
  // }})

  // ))}
  //)
}

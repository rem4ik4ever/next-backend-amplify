import { DataStore } from "@aws-amplify/datastore";
import { Post } from "src/models";
import { useEffect, useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const posts = await DataStore.query(Post);
      console.log({ posts });
      setPosts(posts);
    }
    fetchPosts();
  }, []);
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

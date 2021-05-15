import { withSSRContext } from "aws-amplify";
import { Post } from "src/models";
export default function Posts({ post }) {
  return (
    <article>
      <h1>{post?.title}</h1>
      <div>{post?.content}</div>
    </article>
  );
}

export async function getStaticProps(context) {
  const { DataStore } = withSSRContext(context);
  const { id } = context.params;
  const post = await DataStore.query(Post, id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 100,
  };
}

export async function getStaticPaths(context) {
  const { DataStore } = withSSRContext(context);
  const posts = await DataStore.query(Post);
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

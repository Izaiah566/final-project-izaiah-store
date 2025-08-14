import { useState } from "react";

const CommunityFeed = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Jane", content: "What's the best camera for beginners?" },
    { id: 2, author: "Mike", content: "Selling my old 3D printer, DM me!" },
  ]);

  return (
    <div className="feed">
      <h1 >Community Feed</h1>
      <div className="post">
        {posts.map((post) => (
          <div key={post.id}>
            <p>@{post.author}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;

import { useState } from "react";

const CommunityFeed = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Jane", content: "What's the best camera for beginners?" },
    { id: 2, author: "Mike", content: "Selling my old 3D printer, DM me!" },
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Community Feed</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded p-4 shadow-sm">
            <p className="text-sm text-gray-500">@{post.author}</p>
            <p className="text-lg">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;

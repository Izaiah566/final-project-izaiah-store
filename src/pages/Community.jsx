import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../modules/community.module.css"
// import { supabase } from "../../supabaseClient";  // Enable when ready

// TEMP mock post data
const mockPosts = [
  {
    id: 1,
    title: "Welcome to the Community!",
    body: "Introduce yourself and meet new members!",
    category: "General",
    author: "Admin",
    created_at: "2024-01-01",
  },
  {
    id: 2,
    title: "Looking for Logo Feedback",
    body: "I'd love your thoughts on a new concept!",
    category: "Design",
    author: "Jamie",
    created_at: "2024-02-18",
  },
  {
    id: 3,
    title: "Basketball Meetup",
    body: "Anyone want to meet up this weekend?",
    category: "Sports",
    author: "Alex",
    created_at: "2024-02-20",
  },
];

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);

        // OPTION A: Load from Supabase
        /*
        const { data, error } = await supabase.from("community_posts").select("*");
        if (error) throw error;
        setPosts(data);
        */

        // OPTION B: Mock data (current)
        setPosts(mockPosts);
      } catch (err) {
        console.error("Error loading posts:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Search + category filter
  useEffect(() => {
    let data = posts;

    if (search.trim() !== "") {
      data = data.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "") {
      data = data.filter((post) => post.category === category);
    }

    setFiltered(data);
  }, [search, category, posts]);

  return (
    <div className={styles.communityPage}>
      <div className={styles.communityHeader}>
        <h1>Community Feed</h1>

        <button
          className={styles.createPostBtn}
          onClick={() => navigate("/community/create")}
        >
          + Create Post
        </button>
      </div>

      {/* Filters */}
      <div className={styles.communityFilters}>
        <input
          type="text"
          placeholder="Search community posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="General">General</option>
          <option value="Design">Design</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      {loading ? (
        <p className="loading">Loading posts...</p>
      ) : filtered.length === 0 ? (
        <p className="no-results">No community posts found.</p>
      ) : (
        <div className={styles.postGrid}>
          {filtered.map((post) => (
            <div
              key={post.id}
              className={styles.postCard}
              onClick={() => navigate(`/community/post/${post.id}`)}
            >
              <h2>{post.title}</h2>
              <p className={styles.postCategory}>{post.category}</p>
              <p className={styles.postBody}>{post.body}</p>

              <div className={styles.postFooter}>
                <span className="author">Posted by {post.author}</span>
                <span className="date">{post.created_at}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;


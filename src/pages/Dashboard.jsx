import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
// import { MockListings } from "../../public/MockListings";  // optional
import styles from "../modules/dashboard.module.css"

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);

      if (!data.session) {
        navigate("/auth");
        return;
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    const loadDashboardData = async () => {
      if (!user) return;

      setLoading(true);
      try {
        // OPTION A: Supabase Listings
        /*
        const { data: listingData } = await supabase
          .from("listings")
          .select("*")
          .eq("seller_id", user.id);
        setListings(listingData || []);
        */

        // OPTION B: TEMP mock data
        setListings([]);

        // OPTION A: Supabase Community Posts
        /*
        const { data: postData } = await supabase
          .from("community_posts")
          .select("*")
          .eq("author_id", user.id);
        setPosts(postData || []);
        */

        setPosts([]);

        // OPTION A: Supabase Messages
        /*
        const { data: messageData } = await supabase
          .from("messages")
          .select("*")
          .eq("receiver_id", user.id);
        setMessages(messageData || []);
        */

        setMessages([]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, [user]);

  if (!user) return null;

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashTitle}>Welcome, {user.email}</h1>

      <div className={styles.dashGrid}>
        {/* Profile */}
        <div className={styles.dashCard}>
          <h2>Profile</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.id}</p>
        </div>

        {/* My Listings */}
        <div className={styles.dashCard}>
          <div className={styles.dashHeader}>
            <h2>My Listings</h2>
            <button onClick={() => navigate("/createlisting")}>+ Add New</button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : listings.length === 0 ? (
            <p className={styles.empty}>No listings yet.</p>
          ) : (
            <ul className={styles.list}>
              {listings.map((item) => (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <button onClick={() => navigate(`/marketplace/${item.id}`)}>
                    View
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* My Community Posts */}
        <div className={styles.dashCard}>
          <div className={styles.dashHeader}>
            <h2>My Community Posts</h2>
            <button onClick={() => navigate("/community/create")}>+ Post</button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : posts.length === 0 ? (
            <p className={styles.empty}>No posts yet.</p>
          ) : (
            <ul className={styles.list}>
              {posts.map((post) => (
                <li key={post.id}>
                  <span>{post.title}</span>
                  <button onClick={() => navigate(`/community/post/${post.id}`)}>
                    View
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Messages */}
        <div className={styles.dashCard}>
          <h2>Messages</h2>
          {loading ? (
            <p>Loading...</p>
          ) : messages.length === 0 ? (
            <p className={styles.empty}>No messages yet.</p>
          ) : (
            <ul className={styles.list}>
              {messages.map((msg) => (
                <li key={msg.id}>
                  <strong>From:</strong> {msg.sender_id}
                  <p>{msg.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

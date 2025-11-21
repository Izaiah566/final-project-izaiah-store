import styles from "../modules/dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Welcome back!</h1>
      <div className={styles.dashboardContent}>
        <div className="card">
          <h2>Your Listings</h2>
          <ul> {/* Replace with real data */}
            <li>Bike - $100</li>
            <li>Logo Design - $50</li>
          </ul>
        </div>
        <div className="card">
          <h2>Messages</h2>
          <p>No new messages.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

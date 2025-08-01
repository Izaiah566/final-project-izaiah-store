const UserDashboard = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Welcome back!</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold text-lg mb-2">Your Listings</h2>
          <ul className="text-sm text-gray-600"> {/* Replace with real data */}
            <li>Bike - $100</li>
            <li>Logo Design - $50</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="font-semibold text-lg mb-2">Messages</h2>
          <p className="text-sm text-gray-500">No new messages.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

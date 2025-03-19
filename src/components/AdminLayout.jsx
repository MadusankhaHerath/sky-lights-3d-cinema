import { Link, useLocation } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const siderItems = [
    { value: "dashboard", label: "Dashboard", path: "/Admin/Dashboard" },
    { value: "movies", label: "Movies" },
    { value: "shows", label: "Shows" },
    { value: "booking", label: "Booking", path: "/Admin/Booking" },
    { value: "seats", label: "Seats" },
    { value: "users", label: "Users", path: "/Admin/User" },
    { value: "payments", label: "Payments" },
    { value: "foodorders", label: "Food Orders" },
    { value: "settings", label: "Settings" },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white text-2xl p-4 flex justify-between items-center">
        <span>Admin Name</span>
        <span>SkyLight 3D Cinema</span>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-900 text-white flex flex-col">
          <div className="p-4 text-center border-b border-gray-600">
            <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
            <p className="mt-2 text-sm">Admin Name</p>
          </div>
          <nav className="flex-1 p-2">
            {siderItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-4 py-2 rounded-lg hover:bg-blue-700 ${
                  location.pathname === item.path ? "bg-white text-black" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-200 p-4 border-t">
        <div className="flex justify-between">
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#" className="text-black text-xl">
              🅿️
            </a>
            <a href="#" className="text-black text-xl">
              𝕏
            </a>
            <a href="#" className="text-black text-xl">
              📷
            </a>
            <a href="#" className="text-black text-xl">
              ▶️
            </a>
            <a href="#" className="text-black text-xl">
              🔗
            </a>
          </div>
          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <div>
              <p className="font-semibold">Subscribe</p>
              <a href="#">Home</a>
              <br />
              <a href="#">Movie</a>
              <br />
              <a href="#">About Us</a>
              <br />
              <a href="#">Deals & Exclusives</a>
            </div>
            <div>
              <p className="font-semibold">Careers</p>
              <a href="#">Contact us</a>
              <br />
              <a href="#">Events</a>
              <br />
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;

import AdminLayout from "../../../components/AdminLayout";
import { useNavigate } from "react-router-dom";

function AddNew() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <AdminLayout>
      <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
        {/* Modal Form (Always Visible) */}
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
              <input type="date" placeholder="Birthday" className="w-full p-2 border rounded" />
              <input type="text" placeholder="NIC" className="w-full p-2 border rounded" />
              <input type="text" placeholder="Address" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded" />
              <input type="text" placeholder="Registration ID" className="w-full p-2 border rounded" />
              <div className="flex justify-between">
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
                <button 
                  type="button" 
                  onClick={() => navigate(-1)} // Navigate back to the previous page
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddNew;

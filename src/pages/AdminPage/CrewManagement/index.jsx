import AdminLayout from "../../../components/AdminLayout"
import React from "react";
import { useNavigate } from "react-router-dom";


const CrewManagement =()=>{
    const navigate = useNavigate();
    const crewMembers = [
        { id: 1, name: 'John Doe', role: 'Lighting Technician', phone: '123-456-7890', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', role: 'Sound Engineer', phone: '987-654-3210', email: 'jane.smith@example.com' },
        { id: 3, name: 'Alice Johnson', role: 'Stage Manager', phone: '555-123-4567', email: 'alice.johnson@example.com' },
        { id: 1, name: 'John Doe', role: 'Lighting Technician', phone: '123-456-7890', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', role: 'Sound Engineer', phone: '987-654-3210', email: 'jane.smith@example.com' },
        { id: 3, name: 'Alice Johnson', role: 'Stage Manager', phone: '555-123-4567', email: 'alice.johnson@example.com' },
       
        
      
        // Add more crew members as needed
      ];
      
        const handleBack =()=>{
            window.history.back();
        }
      
    return(
        <AdminLayout>
        <div className="container mx-auto p-4 ">
        <div>
        <button onClick={handleBack}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Go Back</button>
        <h2 className="text-2xl font-semibold text-center mb-6">Crew Management</h2>
        <button onClick={() => navigate("/Admin/User/CrewManagement/AddNew")}
        className="bg-gray-200 px-3 py-1 mb-2 rounded-lg hover:bg-gray-400 transition duration-200">New</button>
        </div>
        
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md ">
            <thead>
            <tr className="bg-gray-200 text-gray-700">
                <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
            </tr>
            </thead>
            <tbody>
            {crewMembers.map((crew) => (
                <tr key={crew.id} className="border-t hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-900 flex justify-between items-center"><span>{crew.name}</span>
                    <button onClick={() => navigate("/Admin/User/CrewManagement/AddNew")}
        className="bg-gray-200 px-3 py-1 mb-2 rounded-lg hover:bg-gray-400 transition duration-200">info</button>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{crew.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{crew.role}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{crew.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-900 flex justify-between items-center"><span>{crew.email}</span>
                    <button onClick={() => navigate("/Admin/User/CrewManagement/AddNew")}
        className="bg-gray-200 px-3 py-1 mb-2 rounded-lg hover:bg-gray-400 transition duration-200">Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
       
        </div>
    </AdminLayout>
    )
}

export default CrewManagement
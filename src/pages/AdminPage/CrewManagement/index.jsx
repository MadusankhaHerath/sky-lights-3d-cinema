import AdminLayout from "../../../components/AdminLayout"


const CrewManagement =()=>{
    return(
        <AdminLayout>
        <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Crew Management</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
            <tr className="bg-gray-100 text-gray-700">
                <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
            </tr>
            </thead>
            {/*<tbody>
            {crewMembers.map((crew) => (
                <tr key={crew.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{crew.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{crew.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{crew.role}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{crew.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{crew.email}</td>
                </tr>
            ))}
            </tbody>*/}
        </table>
        </div>
    </AdminLayout>
    )
}

export default CrewManagement
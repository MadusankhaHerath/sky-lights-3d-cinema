import AdminLayout from "../../../components/AdminLayout"


const ShiftScheduling=()=>{
    const handleBack =()=>{
        window.history.back();
    }
    return(
        <AdminLayout>
            <div className="container mx-auto p-4">
            <button onClick={handleBack}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Go Back</button>
            <h2 className="text-2xl font-semibold text-center mb-6">Shift Scheduling</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md ">
            <thead>
            <tr className="bg-gray-200 text-gray-700">
                <th className="px-6 py-3 text-left text-sm font-medium">Id</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Shift Type</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Start Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium">End Time</th>
                
            </tr>
            </thead>
            </table>
            </div>

        </AdminLayout>

    )
}

export default ShiftScheduling
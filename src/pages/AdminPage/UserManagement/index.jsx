import AdminLayout from "../../../components/AdminLayout"

const UserManagement =()=>{
    return(
        <AdminLayout>
          
             <div> <main className="flex-1  p-6">
          <h2 className="text-lg font-semibold mb-4">User Management</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { title: "Crew Management", icon: "👥",},
              { title: "Shift Scheduling", icon: "📊" },
              
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-300 p-6 rounded-lg flex flex-col items-center justify-center text-black text-center"
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="mt-2 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </main></div>
        

        </AdminLayout>

    )
}

export default UserManagement
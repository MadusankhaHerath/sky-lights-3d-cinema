import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout"

const UserManagement =()=>{

  const navigate = useNavigate();

  const menuitems =[{ title: "Crew Management", icon: "👥", path:"/Admin/User/CrewManagement"},
      { title: "Shift Scheduling", icon: "📊", path:"/Admin/User/ShiftScheduling" },
    ];

    const handleclick =(path)=>{
      navigate(path)
    };
  
    return(
        <AdminLayout>
          
             <div> <main className="flex-1  p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">User Management</h2>
          <div className="grid grid-cols-4 gap-4 ">
            {menuitems.map((item, index) => (
              <div
                key={index}
                onClick={() =>handleclick(item.path)}
                className="bg-gray-300 p-6 rounded-lg flex flex-col items-center justify-center text-black text-center cursor-pointer hover:bg-gray-400 transition duration-200"
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
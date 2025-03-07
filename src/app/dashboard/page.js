import { auth } from "@/auth"

async function page() {
    const sesion = await auth()

    return (
        <div className="max-w-lg mx-auto p-6 bg-slate-700 shadow-xl rounded-lg border border-gray-100 mt-12">
            <h1 className="text-4xl font-semibold text-center text-gray-100 mb-6"> 🔑 Dashboard</h1>
            
            <div className="flex flex-col items-center mb-6">
                <img 
                    src={sesion?.user.image} 
                    alt="User Avatar" 
                    className="rounded-full h-32 w-32 mb-4 border-4 border-red-600 shadow-md"
                />
                <h2 className="text-2xl font-semibold text-gray-300">{sesion?.user.name}</h2>
                <p className="text-lg text-gray-300 mb-2">{sesion?.user.email}</p>
                <p className="text-lg text-red-600 italic">{sesion?.user.role}</p>
            </div>
        </div>
    )
}

export default page

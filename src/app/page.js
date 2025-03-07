import Link from "next/link";
import { auth } from "@/auth";
import { ShoppingCart, Truck, Pizza, Info, User, LayoutDashboard } from "lucide-react";

export default async function Home() {
  const session = await auth();

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-300 hover:scale-105">
          <span className="bg-red-600 bg-clip-text text-transparent">
            TRATTORIA
          </span>
        </h1>
        <p className="text-xl text-gray-300 font-light">La casa di mama.</p>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-300 border-l-4 border-red-700 pl-4">Acciones</h2>

        {session?.user?.role === "ADMIN" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AdminLink href="/admin" icon={<User />} title="Panel de Admin" />
            <AdminLink href="/dashboard" icon={<LayoutDashboard />} title="Dashboard" />
            <AdminLink href="/repartidores" icon={<Truck />} title="Repartidores" />
            <AdminLink href="/pedidos" icon={<ShoppingCart />} title="Pedidos" />
            <AdminLink href="/pizzas" icon={<Pizza />} title="Pizzas" />
            <AdminLink href="/about" icon={<Info />} title="About" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UserLink href="/repartidores" icon={<Truck />} title="Repartidores" />
            <UserLink href="/pizzas" icon={<Pizza />} title="Nuestras Pizzas" />
            <UserLink href="/about" icon={<Info />} title="Sobre Nosotros" />
          </div>
        )}
      </section>
    </div>
  );
}

function AdminLink({ href, icon, title, color = "bg-red-600", simple = false }) {
  return (
    <Link
      href={href}
      className={`group relative p-6 rounded-xl ${color} text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
        simple ? "bg-gray-100 hover:bg-gray-200 text-gray-800" : ""
      }`}
    >
      <div className="flex items-center space-x-4">
        {!simple && <span className="p-2 bg-black/10 rounded-lg">{icon}</span>}
        <span className="text-lg font-semibold">{title}</span>
      </div>
      {!simple && (
        <div className="absolute inset-0 border-2 border-white/10 rounded-xl group-hover:border-white/20 transition-colors" />
      )}
    </Link>
  );
}

function UserLink({ href, icon, title }) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center p-8 bg-red-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-red-100"
    >
      <div className="mb-4 p-4 bg-red-50 rounded-full text-red-700 group-hover:bg-red-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-gray-300 group-hover:text-red-700 transition-colors">
        {title}
      </h3>
    </Link>
  );
}
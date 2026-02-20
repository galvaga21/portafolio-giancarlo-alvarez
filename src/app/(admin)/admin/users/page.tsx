"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Trash2, Shield, User, Edit, Save, X, Search } from "lucide-react";

interface UserData {
  id: string;
  uid: string;
  email: string;
  displayName?: string;
  role?: string;
  createdAt?: any;
}

export default function UsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{ displayName: string; role: string }>({ displayName: "", role: "user" });
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList: UserData[] = [];
      querySnapshot.forEach((doc) => {
        usersList.push({ id: doc.id, ...doc.data() } as UserData);
      });
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId: string) => {
    if (!confirm("¿Estás seguro de eliminar este usuario de la base de datos? (La cuenta de Auth permanecerá y debe borrarse manualmente)")) return;
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers(users.filter(u => u.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error al eliminar usuario");
    }
  };

  const startEdit = (user: UserData) => {
    setEditingId(user.id);
    setEditForm({ displayName: user.displayName || "", role: user.role || "user" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ displayName: "", role: "user" });
  };

  const handleUpdate = async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        displayName: editForm.displayName,
        role: editForm.role,
        updatedAt: serverTimestamp()
      });
      
      setUsers(users.map(u => u.id === userId ? { ...u, displayName: editForm.displayName, role: editForm.role } : u));
      setEditingId(null);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error al actualizar usuario");
    }
  };

  const filteredUsers = users.filter(user => 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Gestión de Usuarios</h1>
            <p className="text-zinc-600 dark:text-zinc-400">Administra los usuarios registrados en la plataforma.</p>
        </div>
        <div className="relative">
            <input 
                type="text" 
                placeholder="Buscar usuario..." 
                className="pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-500 dark:text-zinc-400 uppercase bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="px-6 py-3 font-medium">Usuario</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Rol</th>
                <th className="px-6 py-3 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                    <td colSpan={4} className="text-center py-8 text-zinc-500">Cargando usuarios...</td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                    <td colSpan={4} className="text-center py-8 text-zinc-500">No se encontraron usuarios.</td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="bg-white dark:bg-transparent border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4">
                      {editingId === user.id ? (
                        <input 
                            value={editForm.displayName}
                            onChange={(e) => setEditForm({...editForm, displayName: e.target.value})}
                            className="w-full border border-zinc-300 dark:border-zinc-700 rounded px-2 py-1 bg-white dark:bg-zinc-900"
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase">
                                {user.displayName?.charAt(0) || user.email.charAt(0)}
                            </div>
                            <span className="font-medium text-zinc-900 dark:text-white">
                                {user.displayName || "Sin nombre"}
                            </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      {editingId === user.id ? (
                        <select 
                            value={editForm.role}
                            onChange={(e) => setEditForm({...editForm, role: e.target.value})}
                            className="border border-zinc-300 dark:border-zinc-700 rounded px-2 py-1 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white"
                        >
                            <option value="user">Usuario</option>
                            <option value="admin">Admin</option>
                        </select>
                      ) : (
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                            user.role === 'admin' 
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" 
                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        }`}>
                            {user.role === 'admin' ? <Shield size={12} /> : <User size={12} />}
                            {user.role === 'admin' ? "Admin" : "Usuario"}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      {editingId === user.id ? (
                        <>
                            <button onClick={() => handleUpdate(user.id)} className="p-1 text-green-600 hover:bg-green-50 rounded" title="Guardar">
                                <Save size={18} />
                            </button>
                            <button onClick={cancelEdit} className="p-1 text-zinc-500 hover:bg-zinc-100 rounded" title="Cancelar">
                                <X size={18} />
                            </button>
                        </>
                      ) : (
                        <>
                            <button onClick={() => startEdit(user)} className="p-1 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded transition-colors" title="Editar">
                                <Edit size={18} />
                            </button>
                            <button onClick={() => handleDelete(user.id)} className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors" title="Eliminar">
                                <Trash2 size={18} />
                            </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

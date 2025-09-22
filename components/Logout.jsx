"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Logout
    </button>
  );
};

export default Logout;

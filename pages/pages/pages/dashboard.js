import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      window.location.href = "/login";
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Dashboard 🔥</h1>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
}

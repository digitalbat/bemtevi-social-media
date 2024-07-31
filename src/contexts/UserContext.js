import { createContext, useEffect, useState } from "react";
import { useSession, createClient } from "@supabase/ssr";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const session = useSession();
  const supabase = createClient();
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase.from('profiles')
      .select()
      .eq('id', session.user.id)
      .then(result => {
        setProfile(result.data?.[0]);
      });
  }, [session?.user?.id]);
  return (
    <UserContext.Provider value={{ profile }}>
      {children}
    </UserContext.Provider>
  );
}
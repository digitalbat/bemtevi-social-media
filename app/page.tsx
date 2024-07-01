import { createClient } from "@/utils/supabase/server";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default async function Index() {

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isSupabaseConnected = user;

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <TopBar />
      <div className="animate-in flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center">{isSupabaseConnected ? "logged" : "not logged in"}</h1>
          <h4 className="text-center">Open Area</h4>
        </main>
      </div>
      <Footer />
    </div>
  );
}

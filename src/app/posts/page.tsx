import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import PostsList from "@/components/PostsList";

export default function Posts() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <TopBar />
      </div>
      < PostsList />
      <Footer />
    </div>
  );
}


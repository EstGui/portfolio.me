import About from "@/components/about/about";
import ContentContainer from "@/components/contentContainer/ContentContainer";
import NavBar from "@/components/navBar/NavBar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const selectedTab = (await searchParams).tab || "about";

  return (
    <main className="bg-background flex w-full flex-col justify-start gap-4 p-4 sm:p-6 lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr]">
      <About />
      <NavBar activeTab={selectedTab} />
      <ContentContainer activeTab={selectedTab} />
    </main>
  );
}

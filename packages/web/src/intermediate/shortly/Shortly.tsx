import { AdvancedStatistics } from "./components/AdvancedStatistics/AdvancedStatistics";
import { BoostYourLinks } from "./components/BoostYourLinks/BoostYourLinks";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { ShortenLinkCard } from "./components/ShortenLinkCard/ShortenLinkCard";
import { Links } from "./components/Links/Links";
import { useList } from "@uidotdev/usehooks";

export interface ShortlyProps {}

export const Shortly = () => {
  const [links, { push, removeAt }] = useList<{
    originalUrl: string;
    shortenUrl: string;
  }>([]);
  return (
    <div className="pt-6 bg-white font-poppins min-h-screen">
      <Navbar />
      <main className="mt-4">
        <Hero />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 w-full px-6 lg:px-24">
          <ShortenLinkCard
            onShortenLink={(originalUrl, shortenUrl) => {
              push({ originalUrl, shortenUrl });
            }}
          />
        </div>
        {links.length !== 0 && (
          <Links
            links={links}
            onRemove={(link) => removeAt(links.indexOf(link))}
          />
        )}
        <AdvancedStatistics />
        <BoostYourLinks onGetStarted={() => {}} />
        <Footer />
      </main>
    </div>
  );
};

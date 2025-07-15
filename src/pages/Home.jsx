import Hero from "../components/section/Hero";
import About from "../components/section/About";
import MiniSection from "../components/section/GridSection";
import TeachersGrid from "../components/partial/Teacher";
import ActivitiesGrid from "../components/partial/Activities";
import ListSection from "../components/section/ListSection";
import articles from "../assets/list-article.json";
import FAQSection from "../components/section/FaqSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ListSection title={"Bahtsul Masa'ail"} articles={articles}></ListSection>
      <MiniSection id="activities" title="Kegiatan Keseharian" link="/kegiatan">
        <ActivitiesGrid />
      </MiniSection>
      <MiniSection id="teachers" title="Jajaran Asatidz" link="/teachers">
        <TeachersGrid />
      </MiniSection>

      <FAQSection/>



      {/* Tambahkan section lain jika diperlukan */}
    </div>
  );
}

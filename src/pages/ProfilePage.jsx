// src/pages/ProfilePage.jsx
import profileData from "../../src/assets/profile-data.json"
import IntroSection from "../components/partial/profile/IntroSection";
import SejarahSection from "../components/partial/profile/SejarahSection";
import VisiSection from "../components/partial/profile/VisiSection";
import MisiSection from "../components/partial/profile/MisiSection";


export default function ProfilePage() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-10">
      <IntroSection data={profileData.intro} />
      <SejarahSection data={profileData.sejarah} />
      <VisiSection visi={profileData.visi} />
      <MisiSection misi={profileData.misi} />
    </main>
  );
}

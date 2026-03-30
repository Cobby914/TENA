import Navbar from "../components/shell/Navbar";
import OurTeam from "../components/team/OurTeamComponents/OurTeam";
import OurTeamHeader from "../components/team/OurTeamComponents/OurTeamHeader";
import Footer from "../components/shell/Footer";

export default function Team() {
  return (
    <>
      <Navbar />
      <OurTeamHeader />
      <OurTeam />
      <Footer />
    </>
  );
}

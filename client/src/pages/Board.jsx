import Navbar from "../components/shell/Navbar";
import Footer from "../components/shell/Footer";
import OurBoard from "../components/board/OurBoardComponents/OurBoard";
import OurBoardHeader from "../components/board/OurBoardComponents/OurBoardHeader";
import OurBoardMsg from "../components/board/OurBoardComponents/OurBoardMsg";

export default function Board() {
  return (
    <>
      <Navbar />
      <OurBoardHeader />
      <OurBoardMsg />
      <OurBoard />
      <Footer />
    </>
  );
}

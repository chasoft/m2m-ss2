import Footer from "~/components/Footer";
import CountDownTimer from "~/components/frontpage/CountDownTimer";
import Hero from "~/components/frontpage/Hero";
import Sponsors from "~/components/frontpage/Sponsors";
import Timeline from "~/components/frontpage/Timeline";
import Values from "~/components/frontpage/Values";
import Video from "~/components/frontpage/Video";
import Header from "~/components/Header";

export default function Index() {
  return (
    <>
      <Header forceDarkMode/>
      <Hero />
      <Video />
      <Timeline />
      <Values />
      <CountDownTimer />
      <Sponsors />
      <Footer />
    </>
  );
}

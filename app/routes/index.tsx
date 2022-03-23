import CountDownTimer from "~/components/frontpage/CountDownTimer";
import Hero from "~/components/frontpage/Hero";
import Sponsors from "~/components/frontpage/Sponsors";
import Timeline from "~/components/frontpage/Timeline";
import Values from "~/components/frontpage/Values";
import Header from "~/components/Header";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <Hero />
      <Timeline />
      <Values />
      <CountDownTimer />
      <Sponsors />
    </div>
  );
}

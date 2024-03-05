import Heading from "../hero/Heading";
import Specials from "../hero/Specials";
import Testimonials from "../hero/Testimonials";
import About from "../hero/About";

export default function Home() {
  return (
      <>
        <Heading/>
        <main>
          <Specials/>
          <Testimonials/>
          <About/>
        </main>
      </>
  );
}

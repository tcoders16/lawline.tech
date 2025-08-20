
import { Link } from "react-router-dom";
import StoryHeroCard from "../components/StoryHeroCard";
import GeetaShlok from "../components/GeetaShlok";
import TimeLine from "../components/TimeLine";
import TechStack from "../components/TechStack";
import SheridanCollege from "../components/SheridanCollege";



export default function StoryPortfolio() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 chakra-petch-regular text-gray-900">
      {/* Hero */}
    <StoryHeroCard />
    {/* BhagwatGeeta Shlok  */}

      <GeetaShlok/>

      {/* Project Timeline  */}
      <TimeLine />

      {/* Tech Stack  */}
      <TechStack />



      {/* Education */}

      <SheridanCollege />



      {/* Footer CTA */}
      <div className="pt-20 text-center">
        <p className="text-sm text-gray-500 mb-2">Want to explore building something impactful together?</p>
        <Link
          to="/Coffee-and-Business"
          className="text-green-600 font-semibold hover:underline"
        >
          Let’s talk over coffee ☕️
        </Link>
      </div>
    </section>
  );
}
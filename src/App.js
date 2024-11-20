import './App.css';
import HighlightDiv from './components/HighlightDiv';
import Cards from './components/Cards';
import { GridBackgroundDemo } from './components/GridBackgroundDemo';
import TechJourney from './components/TechJourney';
import IconCloudComponent from "./components/IconCloud";
function LeftColumn() {
  return (
    <div className="w-full lg:w-[50%] z-10 text-white p-4 mt-24">
      <HighlightDiv />
    </div>
  );
}

function RightColumn() {
  return (
    <div id="about" className="about-section z-20 w-full lg:w-[50%] overflow-auto  hide-scrollbar lg:h-screen">
      <div className="pt-28 pb-10 text-slate-400">
        <TechJourney></TechJourney>
        <IconCloudComponent />


      </div>
      <div className="mt-10">
        <Cards />

      </div>


    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 px-6 lg:px-32">
      <div className="fixed inset-0 min-h-screen w-full "> {/* Set to z-5 for background */}
        <GridBackgroundDemo />
      </div>
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;

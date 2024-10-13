import './App.css';
import HighlightDiv from './components/HighlightDiv';
import Cards from './components/Cards';

function LeftColumn() {
  return (
    <div className="w-[50%] bg-navy text-white p-4 mt-24">
      <HighlightDiv />
    </div>
  );
}

function RightColumn() {
  return (
    <div className="w-[50%] h-screen overflow-y-auto bg-navy hide-scrollbar">
      <div className="pt-28 pb-10 text-slate-400">
        <p className="mb-4">My journey into tech began with crafting websites on Wix and customizing backgrounds on Tumblr, sparked by my fascination after watching a Steve Jobs movie. I've always had a passion for technology, enjoying the thrill of experimenting with anything electronic that I could get my hands on.</p>
        <p className="mb-4">Throughout my journey, I've worked on various projects, including GreatReads, and I’m currently focused on a co-op in data analytics. This role allows me to expand my skill set while continuously learning about front-end and full-stack development.</p>
        <p className="mb-4">Outside of tech, I love reading, hiking, watching video essays, and spending quality time with friends. These activities keep me grounded and inspired, fueling my creativity in the tech world.</p>


      </div>
      <Cards />
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen gap-x-4 px-32 bg-navy overflow-hidden">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;

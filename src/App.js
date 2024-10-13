import './App.css';
import HighlightDiv from './components/HighlightDiv';

function LeftColumn() {
  return (
    <div className="w-[50%] h-screen bg-navy text-white p-4 mt-24">
      <HighlightDiv />
    </div>
  );
}

function RightColumn() {
  return (
    <div className="w-[50%] h-screen overflow-y-auto bg-gray-100  mt-24"> {/* Fixed typo and added h-screen */}
      <p>This is the scrollable content area.</p>
      {[...Array(50)].map((_, index) => (
        <p key={index}>Scrollable content item {index + 1}</p>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen gap-x-4 px-12 bg-navy   ">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;

import UserCoordsInput from "./components/UserCoordsInput";
import FileInput from "./components/FileInput";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";
import Graph from "./components/Graph";
import ResultField from "./components/ResultField";
import ErrorField from "./components/ErrorField";

function App() {
  return (
    <div className="flex justify-center space-x-7">
      <div className="grid space-x-5 space-y-5 m-10">
          <div className="flex justify-center space-x-10">
              <div className="grid">
              <img src="./copium-cat.gif" className="h-fit rounded-lg"/>
              <ErrorField/>
              </div>
              <Dropdown/>
          </div>
          <div className="flex justify-center space-x-10">
            <Table/>
          <ResultField/>
          </div>
          <Graph/>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Loading } from "./Loading";

function App() {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div className="flex">
      <div className="w-2/3">
        <div className="flex border">
          <div className="w-36 flex h-screen bg-gray-500">
            <button
              onClick={toggleLoading}
              className=" w-full p-2 text-white border"
            >
              Click to Load
            </button>
          </div>
          <div className="flex w-full">
            <div className="w-1/2 bg-gray-200">
              {loading ? <Loading /> : <div>Section 1 content</div>}
            </div>
            <div className="w-1/2">
              <div className="h-52 bg-gray-300">
                {loading ? <Loading /> : <div>Section 2a content</div>}
              </div>
              <div className="bg-gray-400 min-h-64">
                {loading ? <Loading /> : <div>Section 2b content</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-gray-100"></div>
    </div>
  );
}

export default App;

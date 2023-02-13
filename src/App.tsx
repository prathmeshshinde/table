import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Table from "./Table";
import { UserContextProvider } from "./AuthContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="App">
          <div>
            <div>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Table />} />
              </Routes>
            </div>
          </div>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Book Buddy</h1>} />
      </Routes>
    </>
  );
};

export default App;

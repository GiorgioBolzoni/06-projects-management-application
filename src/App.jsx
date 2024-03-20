
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <Sidebar/>
      <main className="h-screen px-10 py-8 ms-72 overflow-hidden gap-8 w-2/3">
        <NewProject/>
      </main>
    </>
  );
}

export default App;

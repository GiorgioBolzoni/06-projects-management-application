
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {

  

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar/>
        {/* <Form /> */}
        <NewProject/>
      </main>
    </>
  );
}

export default App;

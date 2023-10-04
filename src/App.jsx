import To_do from "./pages/To_do";

function App() {
  return (
    <div className="bg-[#800] text-white">
     <main className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-extrabold">To do list</h1>
      <To_do></To_do>
     </main>
    </div>
  );
}

export default App;
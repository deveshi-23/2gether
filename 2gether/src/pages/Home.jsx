// function Home() {
//   return (
//     <h1>Home Page</h1>
//   );
// }

// export default Home;
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import "./Home.css"

function Home() {
  return (
    <>
      <Navbar />

      <div className="layout">

        <Sidebar />

          <div className="post">
            Looking....
          </div>

          <div className="post">
            Building project
          </div>
        

        <RightPanel />

      </div>
    </>
  );
}

export default Home;
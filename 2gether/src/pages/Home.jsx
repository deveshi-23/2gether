// function Home() {
//   return (
//     <h1>Home Page</h1>
//   );
// }

// export default Home;
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";

function Home() {
  return (
    <>
      <Navbar />

      <div className="layout">

        <Sidebar />

        {/* <main>
          <h1>Welcome to 2gether</h1> */}

          <div className="post">
            Looking....
          </div>

          {/* <div className="post">
            Building project
          </div> */}
        </main>

        <RightPanel />

      </div>
    </>
  );
}

export default Home;
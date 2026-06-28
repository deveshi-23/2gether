// function Home() {
//   return (
//     <h1>Home Page</h1>
//   );
// }

// export default Home;
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <h1>Welcome to 2gether</h1>

      <p>
        Find teammates, join projects and build together.
      </p>
    </>
  );
}

export default Home;
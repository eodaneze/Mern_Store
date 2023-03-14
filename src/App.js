import "./App.css";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to my mern store</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

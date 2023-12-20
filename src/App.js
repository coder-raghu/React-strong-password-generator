import PasswordGenerator from "./PasswordGenerator";
import Container from "react-bootstrap/Container";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Container>     
      <Toaster /> 
      <PasswordGenerator />
    </Container>
  );
}

export default App;

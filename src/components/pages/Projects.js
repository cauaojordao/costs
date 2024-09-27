import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import Container from "../layout/Container";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  return (
    <div>
      <div>
        <h1>Projects</h1>
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start"></Container>
    </div>
  );
}

export default Projects;

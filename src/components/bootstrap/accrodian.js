import Accordion from "react-bootstrap/Accordion";
import { ImageComponent } from "../image/image";
import { CustomSpinner } from "./customspinner";

function CustomAccordian() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <CustomSpinner />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <ImageComponent />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomAccordian;

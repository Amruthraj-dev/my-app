import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export function CustomSpinner() {
  return (
    <>
      {/* <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{" "} */}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
}

// export default CustomSpinner;

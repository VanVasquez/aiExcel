import PropTypes from "prop-types";
import App from "./app";
import { Container, Row, Col } from "react-bootstrap";

const Tool = ({ tools }) => {
  return (
    <Container className="p-3">
      <Row>
        {tools.map((tool) => (
          <Col key={tool.id} xs={6} sm={6} md={4} lg={4} xl={2} className="mb-4">
            <App tool={tool} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Tool.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tool;

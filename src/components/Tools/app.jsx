import PropTypes from "prop-types";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const App = ({ tool }) => {
  const tooltip = (
    <Tooltip id={`tooltip-${tool.id}`}>
      <strong>{tool.description}</strong>
    </Tooltip>
  );

  return (
    <Col
      key={tool.id}
      sm={6}
      md={4}
      lg={3}
      className="tool-item text-center d-flex justify-content-center align-items-center"
      style={{ width: "150px" }}
    >
      <OverlayTrigger placement="bottom" overlay={tooltip} >
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            src={tool.icon}
            alt={tool.name}
            className="tool-icon"
            width={50}
          />
          <p
            style={{
              width: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {tool.name}
          </p>
        </a>
      </OverlayTrigger>
    </Col>
  );
};

App.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;

import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import App from './app';

const Tool = ({ tools }) => {
  return (
    <Container className='p-3'>
      <Row>
        {tools.map((tool) => (
          <App key={tool.id} tool={tool} />
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
    })
  ).isRequired,
};

export default Tool;

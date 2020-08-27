import React from 'react';
import { useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'

import AddPropertyForm from '../AddPropertyForm/AddPropertyForm'
import OutputData from '../OutputData/OutputData'
import 'assets/styles/transitions.css'

function App() {
  const currentDataForm = useSelector(state => state.properties.currentDataForm)
  const dataSubmitted = useSelector(state => state.properties.dataSubmitted)

  return (
    <div className="App">
      <Container>
        <Row>
          <AddPropertyForm currentDataForm={currentDataForm} />
        </Row>
        <Row>
          <CSSTransition
            in={dataSubmitted}
            unmountOnExit
            timeout={300}
            classNames="fade"
          >
            <OutputData currentDataForm={currentDataForm} />
          </CSSTransition>
        </Row>
      </Container>
    </div>
  );
}

export default App;

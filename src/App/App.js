import React from 'react';
import { useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'

import AddPropertyForm from '../AddPropertyForm/AddPropertyForm'
import OutputData from '../OutputData/OutputData'

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
          {dataSubmitted && <OutputData currentDataForm={currentDataForm} />}
        </Row>
      </Container>
    </div>
  );
}

export default App;

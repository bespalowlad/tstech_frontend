import React from 'react';
import { Provider } from 'react-redux'
import { Container, Row } from 'react-bootstrap'

import { store } from '../store'
import AddPropertyForm from '../AddPropertyForm/AddPropertyForm'
import OutputData from '../OutputData/OutputData'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Row>
            <AddPropertyForm />
          </Row>
          <Row>
            {/* <OutputData /> */}
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;

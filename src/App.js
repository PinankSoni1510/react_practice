import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import Viewtask from './Viewtask';

export const App = () => {

  let [taskData, setTaskData] = useState(localStorage.getItem('taskData') ? JSON.parse(localStorage.getItem('taskData')) : []);

  let [name, setName] = useState('');
  let [desc, setDesc] = useState('');
  let [actionId, setActionId] = useState(null);

  function saveData() {

    let obj = {
      task_name: name,
      desc: desc
    };

    if (localStorage.getItem('taskData')) {
      let taskData = JSON.parse(localStorage.getItem('taskData'));


      if (actionId) {
        taskData[actionId] = obj;
        localStorage.setItem('taskData', JSON.stringify(taskData));
      } else {
        taskData.push(obj)

        localStorage.setItem('taskData', JSON.stringify(taskData));
        console.log(JSON.stringify(taskData))
      }

    } else {
      localStorage.setItem('taskData', JSON.stringify([obj]));
    }
    setName('');
    setDesc('');
    setActionId(null);
    setTaskData(JSON.parse(localStorage.getItem('taskData')));

  }

  function editData(id) {
    console.log(id)

  }
  return (


    <Container>


      <Row >

        <Col md="6">

          <h2>CRUD With Local Storage</h2>
          <p>Manage your Tasks.</p>

          <Row >
            <Col  >
              <Form.Label >Task name</Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
            </Col>
          </Row>

          <Row >
            <Col  >
              <Form.Label>Task Desc</Form.Label>
              <Form.Control value={desc} onChange={(e) => setDesc(e.target.value)}></Form.Control>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col  >
              <Button onClick={saveData}>Save</Button>
            </Col>
          </Row>

        </Col>
        <Viewtask taskData={taskData} fillEditData={(data) => {
          setName(data.data.task_name);
          setDesc(data.data.desc);
          setActionId(data.key);
        }}>

        </Viewtask>
      </Row>
    </Container>
  )
}

export default App

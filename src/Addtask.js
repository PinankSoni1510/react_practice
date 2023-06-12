import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import Viewtask from './Viewtask';
import { useNavigate } from 'react-router-dom';

export const Addtask = () => {

    let navigate = useNavigate();
    let [taskData, setTaskData] = useState(localStorage.getItem('taskData') ? JSON.parse(localStorage.getItem('taskData')) : []);
    let [userData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : []);

    let [name, setName] = useState('');
    let [desc, setDesc] = useState('');
    let [userName, setUserName] = useState(userData.userName);
    let [actionId, setActionId] = useState(null);
   
    useEffect(() => {
        if (!localStorage.getItem('userData')) {
            navigate('/login')
        }
        
        setUserName(userData[0].userName)
    }, []);

    const saveData = ()=>{
        let obj = {
            task_name: name,
            desc: desc
        };

        if (localStorage.getItem('taskData')) {
            let taskData = JSON.parse(localStorage.getItem('taskData'));


            console.log(actionId)
            if (actionId) {
                console.log(taskData);
                //taskData.splice(actionId, 1);
                taskData[actionId] = obj;
                console.log(taskData[actionId]);
                
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
    
   

    return (


        <Container>


            <Row >

                <Col md="6">

                    <h2>Welcome {userName}</h2>
                    <p>Manage your Tasks Here.</p>

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

export default Addtask

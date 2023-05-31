import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'

export const Viewtask = ({ fillEditData, taskData }) => {

    let [srNo, setSrNo] = useState(1);

    function editData(key) {
        let data = taskData[key];
        fillEditData({ data, key });
    }

    return (


        <Col md="6">
            <h2>Task List</h2>
            <p>Manage your Tasks.</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Desc</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        taskData.map((value, key) =>
                            <tr key={key}>
                                <td>{srNo++}</td>
                                <td>{value.task_name}</td>
                                <td>{value.desc}</td>
                                <td><Button variant='warning' className='ms-2' onClick={() => editData(key)}>Edit</Button><Button variant='danger' className='ms-2'>Delete</Button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </Col>


    )
}

export default Viewtask

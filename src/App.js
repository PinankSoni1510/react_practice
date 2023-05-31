import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import Viewtask from './Viewtask';
import { Route, Routes } from 'react-router-dom';
import Addtask from './Addtask';
import Login from './Login';

export const App = () => {


  return (
    <Routes>
      <Route path='' element={<Addtask />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>

  )
}

export default App

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AllStudents from "./AllStudents";
import StudentDetails from "./StudentDetails";
import StudentAdd from "./StudentAdd";
import Login from "./Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/student" element={<AllStudents />}></Route>
        <Route path="/student/:id" element={<StudentDetails />}></Route>
        <Route path="/student/add" element={<StudentAdd />}></Route>
        <Route path="/student/edit/:id" element={<StudentAdd />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

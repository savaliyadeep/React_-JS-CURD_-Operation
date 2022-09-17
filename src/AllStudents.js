import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./btn.css";

function AllStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://62dbf84b4438813a260e753f.mockapi.io/student")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setStudents(res);
      });
  }, []);

  const formatedStu = students.map((stu) => {
    return (
      <>
        <div class="card-deck col-md-3 mt-5">
          <div class="card">
            <img
              class="card-img-top img-fluid"
              src={stu.image}
              alt="Card image cap"
              style={{ margin: "auto" }}
            />
            <div class="card-body">
              <h3 class="card-title" align="center">
                {stu.name}
              </h3>
              <h5 class="text-center text-danger">
                <small>{stu.department}</small>
              </h5>
              <div align="center">
                <Link to={"../student/" + stu.id}>
                  <small>view profile -> </small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div class="container">
        <div class="row">{formatedStu}</div>
      </div>
    </>
  );
}

export default AllStudents;

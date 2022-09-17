import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./add.css";

export default function StudentAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://62dbf84b4438813a260e753f.mockapi.io/student/" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <div id="registration-form">
        <div class="fieldset">
          <legend>Enter Student Details</legend>
          <form action="#" method="post" data-validate="parsley">
            <div class="row">
              <label for="firstname">Name</label>
              <input
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                type="text"
                placeholder="Name"
                name="firstname"
                id="firstname"
                data-required="true"
                data-error-message="Name is required"
              />
            </div>
            <div class="row">
              <label for="image">Image</label>
              <input
                value={data.image}
                onChange={(e) => {
                  setData({ ...data, image: e.target.value });
                }}
                type="text"
                placeholder="image url"
                name="firstname"
                id="firstname"
                data-required="true"
                data-error-message="Image URL is required"
              />
            </div>
            <div class="row">
              <label for="department">Department</label>
              <input
                value={data.department}
                onChange={(e) => {
                  setData({ ...data, department: e.target.value });
                }}
                type="text"
                placeholder="department name"
                data-required="true"
                data-error-message="Department is required"
              />
            </div>
            <div class="row">
              <label for="mobileno">Student Mobile Number</label>
              <input
                value={data.mobileno}
                onChange={(e) => {
                  setData({ ...data, mobileno: e.target.value });
                }}
                type="text"
                placeholder="mobile number"
                data-required="true"
                data-error-message="Student Mobile Number is required"
              />
            </div>
            <div class="row">
              <label for="department">Parents Mobile Number</label>
              <input
                value={data.parentmobileno}
                onChange={(e) => {
                  setData({ ...data, parentmobileno: e.target.value });
                }}
                type="text"
                placeholder="mobile number"
                data-required="true"
                data-error-message="Parents Mobile Number is required"
              />
            </div>
            <div class="row">
              <label for="email">E-mail</label>
              <input
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                type="text"
                placeholder="E-mail"
                name="email"
                data-required="true"
                data-type="email"
                data-error-message="Your E-mail is required"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="text-center">
        <button
          class="add"
          onClick={() => {
            if (params.id > 0) {
              fetch(
                "https://62dbf84b4438813a260e753f.mockapi.io/student/" +
                  params.id,
                {
                  method: "PUT",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              ).then(() => {
                navigate("/student/" + params.id);
              });
            } else {
              fetch("https://62dbf84b4438813a260e753f.mockapi.io/student/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(() => {
                navigate("/student");
              });
            }
          }}
        >
          {params.id > 0 && "Edit  "}
          {!(params.id > 0) && "Add  "}
          Student
        </button>
      </div>
      <br />
    </>
  );
}

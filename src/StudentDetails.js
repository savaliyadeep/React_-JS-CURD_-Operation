import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./btn.css";

function StudentDetails() {
  let params = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch("https://62dbf84b4438813a260e753f.mockapi.io/student/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setStudent(res);
      });
  }, []);

  return (
    <>
      <div class="container">
        <table width="60%" align="center">
          <tr>
            <td align="center" width="20%">
              <img
                class="img-fluid rounded mx-auto d-block"
                style={{ width: "300px" }}
                src={student.image}
                alt="image"
              />
              <h3>{student.name}</h3>
              <h6 style={{ color: "red" }}>{student.department}</h6>
              <table>
                <tr>
                  <td> &#x1F4DE;</td>
                  <td>:</td>
                  <td>{student.mobileno}</td>
                </tr>
                <tr>
                  <td> &#x1F4DE;</td>
                  <td>:</td>
                  <td>{student.parentmobileno}</td>
                </tr>
                <tr>
                  <td>&#x2709;</td>
                  <td>:</td>
                  <td>{student.email}</td>
                </tr>
                <br />
              </table>
              <div>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <button
                      class="edit"
                      onClick={() => {
                        navigate("/student/edit/" + params.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      class="delete"
                      onClick={() => {
                        fetch(
                          "https://62dbf84b4438813a260e753f.mockapi.io/student/" +
                            params.id,
                          {
                            method: "DELETE"
                          }
                        ).then((res) => {
                          navigate("/student");
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <br />
                <tr>
                  <td></td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      class="back"
                      onClick={() => {
                        navigate("/student");
                      }}
                    >
                      <svg
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 1024 1024"
                      >
                        <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                      </svg>
                      Back
                    </button>
                  </td>
                  <td></td>
                </tr>
              </div>
            </td>
          </tr>
        </table>
        <br />
      </div>
    </>
  );
}
export default StudentDetails;

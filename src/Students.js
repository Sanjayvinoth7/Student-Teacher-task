import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [student, setStudent] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    studentData();
  }, []);

  let studentData = async () => {
    try {
      setLoading(true);
      let detail = await axios.get(
        "https://636bc9417f47ef51e13a6884.mockapi.io/students"
      );
      console.log(detail.data);
      setStudent(detail.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }    
  };

  let deleteDetails = () => {
    const confirm = window.confirm("Do you want to delete this Profile?")
    if(confirm){
      alert("Deleted");
    }    
  };

  return (
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Students</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>

        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            Student Details
            <Link
              to={"/students_create"}
              type="button"
              class="btn btn-primary ms-5"
            >
              Create
            </Link>
          </div>
          <div class="card-body">
            {isloading ? (
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">ADMISSION NO.</th>
                    <th scope="col">STUDENT NAME</th>
                    <th scope="col">CLASS</th>
                    <th scope="col">FATHER NAME</th>
                    <th scope="col">DOB</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tbody>
                  {student.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.admissionNo}</td>
                        <td>{item.studentName}</td>
                        <td>{item.class}</td>
                        <td>{item.fatherName}</td>
                        <td>{item.dob}</td>
                        <td>{item.gender}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Link
                            to={`/students_profile/${item.id}`}
                            type="button"
                            class="btn btn-outline-secondary me-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/students_edit/${item.id}`}
                            type="button"
                            class="btn btn-outline-primary me-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteDetails();
                            }}
                            type="button"
                            class="btn btn-outline-danger my-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Students;
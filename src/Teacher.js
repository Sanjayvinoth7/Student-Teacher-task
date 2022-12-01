import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    teacherData();
  }, []);

  let teacherData = async () => {
    try {
      setLoading(true);
      let detail = await axios.get(
        "https://636bc9417f47ef51e13a6884.mockapi.io/Teacher"
      );
      console.log(detail.data);
      setTeacher(detail.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  let deleteTeacherData = () =>{
    let deleteData = window.confirm("Are you sure to delete?")
    if(deleteData){
      alert("Deleted !!")
    }
  }
  return (
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Teachers</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>

        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            Teacher Details
            <Link
              to={"/teachers_create"}
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
                    <th scope="col">NAME</th>
                    <th scope="col">TEACHER ID</th>
                    <th scope="col">DEPT.</th>
                    <th scope="col">JOINING DATE</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tbody>
                  {teacher.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.teacherId}</td>
                        <td>{item.dept}</td>
                        <td>{item.joiningdate}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Link
                            type="button"
                            to={`/teachers_profile/${item.id}`}
                            class="btn btn-outline-secondary me-1"
                          >
                            View
                          </Link>
                          <Link
                            type="button"
                            to={`/teachers_edit/${item.id}`}
                            class="btn btn-outline-primary me-1"
                          >
                            Edit
                          </Link>
                          <button 
                          onClick={() => {
                            deleteTeacherData()
                          }}
                          type="button" class="btn btn-outline-danger my-1">
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

export default Teacher;
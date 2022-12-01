import React from 'react'
import { Link } from 'react-router-dom'

function Student_Edit() {
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4 mb-4">Student Data Edit Form</h1>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="formGroupExampleStudent" class="form-label">
                Student Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"               
                class="form-control"
                id="formGroupExampleStudent"
                placeholder="Student Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="formGroupExampleFather" class="form-label">
                Father Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"                
                class="form-control"
                id="formGroupExampleFather"
                placeholder="Father Name"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="formGroupExampleAdmission" class="form-label">
                Admission No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"               
                class="form-control"
                id="formGroupExampleAdmission"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="formGroupExampleDOB" class="form-label">
                DOB<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="date"
                class="form-control"
                id="formGroupExampleDOB"
              />
            </div>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Gender<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputState"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="inputClass" class="form-label">
              Class<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>10A</option>
              <option>10B</option>
              <option>10C</option>
              <option>12A</option>
              <option>12B</option>
              <option>12C</option>
            </select>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="formGroupExamplePhone" class="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                class="form-control"
                id="formGroupExamplePhone"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <Link
              to={"/students_data"}
              type="button"
              class="btn btn-secondary ms-2"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Student_Edit
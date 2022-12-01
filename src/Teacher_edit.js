import React from 'react'
import { Link } from 'react-router-dom'

function Teacher_edit() {
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4 mb-4">Teacher - Data Edit Form</h1>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Teacher Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Teacher Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Teacher ID<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Joining Date<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
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
              Department<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Maths</option>
              <option>Science</option>
              <option>Socialscience</option>
            </select>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <button type="submit" class="btn btn-primary mt-1">
              Submit
            </button>
            <Link
              to={"/teachers_data"}
              type="button"
              class="btn btn-secondary ms-2 mt-1"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Teacher_edit
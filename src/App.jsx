import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import { data } from "./Data";
import TableElement from "./TableElement";

const App = () => {
  const [state, setState] = useState({
    userData: [],
    firstNameField: "",
    dateField: "",
    examinationField: "",
  });

  useEffect(() => {
    setState({ ...state, userData: data });
  }, []);

  const handleChangeFirstNameField = (event) => {
    const inputElement = event.target.value.toLowerCase();
    setState({ ...state, firstNameField: inputElement });
  };

  const handleChangeDateField = (event) => {
    setState({ ...state, dateField: event.target.value });
  };

  const handleChangeExaminationField = (event) => {
    const inputElement = event.target.value.toLowerCase();
    setState({ ...state, examinationField: inputElement });
  };

  const filter = () => {
    const newUserData = [...state.userData];

    const filterFirstNameField = newUserData.filter((element) => {
      const elementToLowerCase = element.FirstName.toLowerCase();
      return elementToLowerCase.includes(state.firstNameField);
    });

    const filterDateField = filterFirstNameField.filter((element) => {
      const elementDate = moment(element.Date).format("YYYY MM DD");
      return elementDate.includes(state.dateField);
    });

    const filterExaminationField = filterDateField.filter((element) => {
      const elementToLowerCase = element.Examination.toLowerCase();
      return elementToLowerCase.includes(state.examinationField);
    });

    return filterExaminationField;
  };

  const dataForRender = filter();
  //отслеживать ввод и при каждом вводе символа, фильтровать список и делать ререндер
  //---
  console.log(1);
  return (
    <>
      <h1>Analyze smart wallets</h1>

      <div className="file-upload">
        <label htmlFor="formFileSm" className="form-label">
          Small file input example
        </label>
        <input
          className="form-control form-control-sm"
          id="formFileSm"
          type="file"
        />
        <button
          className="btn btn-primary rounded-pill px-3"
          type="button"
          // onClick="uploadFile()"
        >
          Upload CSV
        </button>
      </div>

      <div className="container">
        <h1>Bootstrap Table</h1>

        <div id="toolbar">
          <select className="form-control">
            <option value="">Export Basic</option>
            <option value="all">Export All</option>
            <option value="selected">Export Selected</option>
          </select>
        </div>

        <table
          // id="table"
          // data-toggle="table"
          // data-search="true"
          // data-filter-control="true"
          // data-show-export="true"
          // data-click-to-select="true"
          // data-toolbar="#toolbar"
          className="table-responsive"
        >
          <thead>
            <tr>
              <th data-field="state" data-checkbox="true">
                <input type="checkbox" />
              </th>
              <th
              // data-field="prenom"
              // data-filter-control="input"
              // data-sortable="true"
              >
                First Name
                <input type="input" onChange={handleChangeFirstNameField} />
              </th>
              <th
              // data-field="date"
              // data-filter-control="select"
              // data-sortable="true"
              >
                Date
                <input type="input" onChange={handleChangeDateField} />
              </th>
              <th
              // data-field="examen"
              // data-filter-control="select"
              // data-sortable="true"
              >
                Examination
                <input type="input" onChange={handleChangeExaminationField} />
              </th>
              <th data-field="note" data-sortable="true">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {dataForRender.map((elem) => (
              <TableElement key={elem.id} elem={elem} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;

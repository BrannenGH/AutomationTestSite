﻿import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { useDeleteEmployee, useGetEmployee } from "../../hooks/employee-hooks";
import { Layout } from "../shared/layout";

const Delete = (props: any) => {
  const DeleteInner = (props: any) => {
    const deleteEmployee = useDeleteEmployee();
    const getEmployee = useGetEmployee();
    const [employee, setEmployee] = useState<any>(undefined);
    const [id, setId] = useState<number>(undefined);

    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const queryId = Number.parseInt(urlParams.get("id"));
      setId(queryId);
      setEmployee(getEmployee(queryId));
    }, []);

    return (
      <React.Fragment>
        <h2>Delete</h2>

        <h3>Are you sure you want to delete this?</h3>
        <div>
          <h4>Employee</h4>
          <hr />
          <dl className="dl-horizontal">
            <dt>City</dt>

            <dd>{!!employee && employee.city}</dd>

            <dt>Department</dt>

            <dd>{!!employee && employee.department}</dd>

            <dt>State</dt>

            <dd>{!!employee && employee.state}</dd>

            <dt>First Name</dt>

            <dd>{!!employee && employee.firstName}</dd>

            <dt>Last Name</dt>

            <dd>{!!employee && employee.lastName}</dd>

            <dt>Address</dt>

            <dd>{!!employee && employee.address}</dd>
          </dl>
          {!!employee && (
            <div className="form-actions no-color">
              <input
                onClick={() => {
                  deleteEmployee(id);
                  navigate("/Employees/");
                }}
                value="Delete"
                className="btn btn-default"
              />
              |<Link to="/Employees">Back to List</Link>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  };

  return (
    <Layout title="Delete">
      <DeleteInner />
    </Layout>
  );
};

export default Delete;

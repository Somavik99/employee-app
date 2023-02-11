import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Bounce } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import ModalFrame from "./ModalFrame";

const Details = () => {
  const [EmplListDetails, setEmpListDeatils] = useState([]);

  const emplList = async () => {
    await axios
      .get("http://localhost/API_REACT/Empployee/read.php")
      .then((resp) => {
        console.log(resp.data.data);
        return setEmpListDeatils(resp.data.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    emplList();
  }, []);

  return (
    <Bounce cascade>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          boxSizing: "border-box",
          outline: "none",
          borderTop: "2px solid green",
          margin: "2em",
          boxShadow: "4px 4px 4px solid gray",
          borderRadius: "8px",
          maxWidth: 1000,
          minWidth: "50px",
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Emp Name</th>
            <th>Emp Email</th>
            <th>Emp Phone</th>
            <th>Date Of Joining</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {EmplListDetails.map((res, index) => {
            return (
              <tr key={index}>
                <td>{res.Id}</td>
                <td>{res.Emp_Name}</td>
                <td>{res.Emp_Email}</td>
                <td>{res.Emp_Phone}</td>
                <td>{res.Date_Of_Joining}</td>
                <td>
                  <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button variant="outline-success">
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                  <Button variant="outline-danger" >
                    <FontAwesomeIcon icon={faDeleteLeft} />
                  </Button>
                </td>
              </tr>
            );
          })}
          {/* console.log(res[index]); */}
        </tbody>
      </Table>
      <div>
        {/* <button
          // onClick={PopUpShow}
          style={{
            marginLeft: "2em",
            boxSizing: "border-box",
            outline: "none",
            border: "2px solid green",
            borderRadius: "100%",
            background: "white",
            width: "3em",
            height: "3em",
          }}
        >
          <FontAwesomeIcon icon={faAdd} />
          
        </button> */}
        <ModalFrame />
      </div>
    </Bounce>
  );
};

export default Details;

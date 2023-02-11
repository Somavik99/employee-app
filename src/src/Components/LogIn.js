import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LogIn = () => {
  const navigate = useNavigate();

  const [LogInVal, setLogInVal] = useState({
    email: "",
    pass: "",
  });

  const [LogData, setLogData] = useState([]);

  //   const userRegex = new RegExp(/^[a-zA-Z ]{3,8}$/);
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  const passRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,24}/
  );

  const getData = (e) => {
    const { value, name } = e.target;
    setLogInVal(() => {
      return { ...LogInVal, [name]: value };
    });
  };

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     setSignUpVal({ user: "", email: "", pass: "", date: "" });
  //   };

  const addLogInData = (e) => {
    const { email, pass } = LogInVal;

    const getInfo = localStorage.getItem("dataKey",LogData);

    if (!email.match(emailRegex)) {
      alert("Invalid email");
    } else if (!pass.match(passRegex)) {
      alert("Invalid Password");
    } else {
      if (getInfo && getInfo.length) {
        const infoData = JSON.parse(getInfo);
        const loginInfo = infoData.filter((el, j) => {
          return el.email === email && el.pass === pass;
        });
        if (loginInfo.length === 0) {
          toast.error("Invalid Details !", {
            position: "top-center",
          });
        } else {
          alert("Login successfull");
          setLogData(loginInfo);
          navigate("/details");
        }
      }
    }
  };
  const submitFomrHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Bounce cascade>
        <div
          className="container mt-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            borderTop: "2px solid seagreen",
            borderBottom: "2px solid seagreen",
            outline: "none",
            boxShadow: "4px 4px 4px 4px lightgray",
            borderRadius: "8px",
            maxWidth: "400px",
            minWidth: "300px",
          }}
        >
          <section className="d-flex justify-content-between ">
            <div className="left_data mt-3 p-3" style={{ maxWidth: "100%" }}>
              <h3 className="text-center col-lg">Log In</h3>

              <Form onSubmit={submitFomrHandler}>
                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getData}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    name="pass"
                    onChange={getData}
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <Button
                  variant="outline-success"
                  className="col-md-4"
                  type="submit"
                  onClick={addLogInData}
                >
                  Submit
                </Button>
              </Form>

              <p className="mt-3">
                Don't have an account{" "}
                <span>
                  {" "}
                  <NavLink to="/">SignUp</NavLink>{" "}
                </span>
              </p>
            </div>
            {/* <SIDE_IMG /> */}
          </section>
          <ToastContainer />
        </div>
      </Bounce>
    </>
  );
};

export default LogIn;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Bounce } from "react-awesome-reveal";
import SIDE_IMG from "./SIDE_IMG";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigateLink = useNavigate();
  const [SignUpVal, setSignUpVal] = useState({
    user: "",
    email: "",
    pass: "",
    date: "",
  });

  const [SignData, setSignData] = useState([]);

  const userRegex = new RegExp("^[a-zA-Z ]{8,20}$");
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  const passRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,24}/
  );

  const getData = (e) => {
    const { value, name } = e.target;
    setSignUpVal(() => {
      return { ...SignUpVal, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSignUpVal({ user: "", email: "", pass: "", date: "" });
  };

  const addSignUpData = (e) => {
    const { user, email, pass, date } = SignUpVal;

    if (!user.match(userRegex)) {
      toast.error("Invalid User Name !", {
        position: "top-center",
      });
    } else if (!email.match(emailRegex)) {
      toast.error("Invalid Email !", {
        position: "top-center",
      });
    } else if (!pass.match(passRegex)) {
      toast.error("Invalid Password !", {
        position: "top-center",
      });
      alert("Invalid Password");
    } else if (date === "") {
      alert("date cannot be empty");
    } else {
      localStorage.setItem("dataKey", JSON.stringify([...SignData, SignUpVal]));
      setSignData();
      navigateLink("/login");
    }
  };

  return (
    <>
      <Bounce cascade>
        <div
          className="container mt-3"
          style={{
            boxSizing: "border-box",
            borderTop: "2px solid seagreen",
            borderBottom: "2px solid seagreen",
            outline: "none",
            boxShadow: "4px 4px 4px 4px lightgray",
            borderRadius: "8px",
            maxWidth: "1000px",
            minWidth: "300px",
          }}
        >
          <section className="d-flex justify-content-between ">
            <div className="left_data mt-3 p-3" style={{ maxWidth: "100%" }}>
              <h3 className="text-center col-lg">Sign Up</h3>

              <Form onSubmit={submitHandler}>
                <Form.Group
                  className="mb-3 col-lg"
                  // style={{ width: "25em" }}
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
                    name="user"
                    onChange={getData}
                    placeholder="Enter your user name"
                  />
                </Form.Group>
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
                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                  <Form.Control type="date" name="date" onChange={getData} />
                </Form.Group>

                <Button
                  variant="outline-success"
                  className="col-md-4"
                  type="submit"
                  onClick={addSignUpData}
                >
                  Submit
                </Button>
              </Form>
              <p className="mt-3">
                Already have an account{" "}
                <span>
                  <NavLink to="/login">LogIn</NavLink>
                </span>
              </p>
            </div>
            <SIDE_IMG />
          </section>
          <ToastContainer />
        </div>
      </Bounce>
    </>
  );
};

export default SignUp;

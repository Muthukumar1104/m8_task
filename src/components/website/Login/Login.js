import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Appcontext from "../../common/Appcontext/Appcontext";
import axios from "axios";
import Success_modal from "../../common/SuccessModal/SuccessModal";

const Login = () => {
  const { setUser, setSuccess, setMessage, message } = useContext(Appcontext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //state
  const [values, setValues] = useState({});
  const handleChangelab = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //error-handling
  const [error, setError] = useState({});
  const validate = (value) => {
    const errors = {};
    if (!value.mobile) {
      errors.mobile = "*Mobile Number field is required";
    } else if (value.mobile < 10) {
      errors.mobile = "*Mobile Number must be minimum 10 numbers";
    }
    return { errors };
  };

  //login api
  const submit = () => {
    const validated = validate(values);
    console.log(validated);
    setError(validated.errors);
    if (Object.values(validated.errors).filter((s) => s !== "").length === 0) {
      setLoading(true);
      axios({
        method: "post",
        url: "http://ecommerce.toou.in:4011/customer/phonelogin",
        data: {
          country_code: 91,
          phone_number: values?.mobile,
        },
      })
        .then((response) => {
          if (
            response?.status == 200 &&
            response?.data?.message == "Login Success"
          ) {
            // setLogin(true);
            navigate("/home");
            setLoading(false);
            setUser({ type: "login", loginfo: response.data.data });
            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem(
              "profile",
              JSON.stringify(response.data.data)
            );
          } else if (
            response?.data?.status == false &&
            response?.data?.message === "User Not Exists"
          ) {
            setLoading(false);
            setSuccess(true);
            setMessage(response.data.message);
            sessionStorage.clear();
            navigate("/");
            setValues({});
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="login-body col-lg-12 col-md-12 col-sm-12">
      <div className="login_form">
        <div id="card">
          <div id="card-body">
            <div id="card-title">
              <h3>FOODIED</h3>
            </div>
            <div className="formcontent">
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control login-form"
                  id="email"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  onChange={handleChangelab}
                />
                <label for="email">Mobile Number</label>
              </div>

              <button
                type="submit"
                className="btn btn-default login-btn mt-4"
                onClick={submit}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            <small>{error?.mobile}</small>
          </div>
        </div>
      </div>
      <Success_modal message={message} back={""} />
    </div>
  );
};

export default Login;

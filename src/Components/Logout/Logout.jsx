import React, { useEffect } from "react";
import { logOutUser } from "../../UserAuth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    logOutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Failed To Logout");
        navigate("/");
      });
  }, []);
};

export default Logout;

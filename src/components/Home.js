import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import Button from "./UX/UI/Button";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.accessToken);
  // console.log(token)

  const buttonHandler = () => {
    if (token !== null) {
      dispatch(authActions.logout());
    }
    window.location.href = "/login";
  };

  const buttonText = token !== null ? "Logout" : "Login";

  return (
    <div className="flex justify-end">
      <Button text={buttonText} onClick={buttonHandler} />
    </div>
  );
};

export default Home;

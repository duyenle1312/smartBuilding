import { useDispatch } from "react-redux";
import { authActions } from "../store";
import React, { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const userInput = {
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
      client_id: "62419ac553304",
      client_secret: "62419ac553269",
    };

    let url = "https://developer-api.seemelissa.com/v1/auth/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch(authActions.login(data.auth));
        window.history.back();
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <form
          onSubmit={submitHandler}
          className="flex w-[30rem] flex-col space-y-10"
        >
          <div className="text-center text-4xl font-medium">Log In</div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              id="email"
              value="interview@mclimate.eu" // for testing only
              required
              ref={usernameInputRef}
              type="email"
              placeholder="Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              id="password"
              value="interview_mclimate" // for testing only
              required
              ref={passwordInputRef}
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          >
            LOG IN
          </button>
        </form>
      </main>
    </>
  );
};

export default Auth;

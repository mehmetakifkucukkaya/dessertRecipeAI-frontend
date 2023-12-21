import { Input } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

//TODO: Login fonksiyonu yapılacak
//TODO: Validation yapılacak

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigateMakeRecipe = () => {
    navigate("/makeRecipe");
  };

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          username: email,
          password,
          email,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        // Handle successful login, e.g., store the token in local storage or state
        console.log("Login successful:", data.token);
        navigateMakeRecipe();
      } else {
        // Handle login error, e.g., show an error message
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <div className="mt-8 px-4 flex flex-col items-center">
      <div className="mb-8">
        <h1 className="font-semibold text-2xl">Hoş Geldiniz!</h1>
      </div>

      {/* Inputs */}
      <form className="flex flex-col w-full max-w-md">
        {/* Email */}
        <div className="mb-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            status={email.trim() === "" ? "error" : ""}
            className="rounded-xl h-12 border-gray-700 px-4"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <Input.Password
            placeholder="Şifre"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            status={password.trim() === "" ? "error" : ""}
            className="rounded-xl h-12 border-gray-700 px-4"
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone size={35} />
              ) : (
                <EyeInvisibleOutlined size={35} />
              )
            }
          />
        </div>

        {/* Button */}
        <div>
          <button
            onClick={handleLoginClick}
            className="bg-[#030712] text-white text-s mt-4 rounded-md h-12 w-full border-none hover:opacity-95"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";


const Task1 = () => {
  const [string, setString] = useState("");
  const [warning, setwarning] = useState(0);
  const fun = () => {
    setwarning(1), setString(string);
    const time = setTimeout(() => {
      setwarning(0);
    }, 2000);
  };

  useEffect(() => {
    const handlekey = (event) => {
      const name = event.key;
      name === "Enter" ? setString(eval(string).toString()) : setString(string + name.toString());
      document.removeEventListener("keypress", handlekey);
    };
    document.addEventListener("keypress", handlekey);

    
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen relative gap-10 ">
        <div className="flex justify-center bg-slate-800 text-4xl text-black px-20 py-5"> CALCULATOR</div>
      <div className="shadow">
        <div
          className={`text-green-600 h-[60px] flex items-center justify-end ${warning === 1 ? "border-[1px]" : ""} border-red-600 px-2`}
        >
          {string}
        </div>
        <div>
          <div className="flex text-sky-600">
            <div onClick={() => setString((string) => "")}>
              <Button val={"AC"} />
            </div>
            <div onClick={() => setString((string) => string.slice(0, -1))}>
              <Button val={"DE"} />
            </div>
            <div onClick={() => setString((string) => string + ".")}>
              <Button val={"."} />
            </div>
            <div
              onClick={() =>
                string.slice(-1) >= "0" && string.slice(-1) <= "9"
                  ? setString(string + "/")
                  : fun()
              }
            >
              <Button val={"/"} />
            </div>
          </div>
          <div className="flex">
            <div onClick={() => setString((string) => string + "7")}>
              <Button val={"7"} />
            </div>
            <div onClick={() => setString((string) => string + "8")}>
              <Button val={"8"} />
            </div>
            <div onClick={() => setString((string) => string + "9")}>
              <Button val={"9"} />
            </div>
            <div
              className="text-sky-600"
              onClick={() =>
                setString((string) =>
                  string.slice(-1) >= "0" && string.slice(-1) <= "9"
                    ? string + "*"
                    : fun()
                )
              }
            >
              <Button val={"*"} />
            </div>
          </div>
          <div className="flex">
            <div onClick={() => setString((string) => string + "4")}>
              <Button val={"4"} />
            </div>
            <div onClick={() => setString((string) => string + "5")}>
              <Button val={"5"} />
            </div>
            <div onClick={() => setString((string) => string + "6")}>
              <Button val={"6"} />
            </div>
            <div
              className="text-sky-600"
              onClick={() =>
                setString((string) =>
                  string.slice(-1) >= "0" && string.slice(-1) <= "9"
                    ? string + "-"
                    : fun()
                )
              }
            >
              <Button val={"-"} />
            </div>
          </div>
          <div className="flex">
            <div onClick={() => setString((string) => string + "1")}>
              <Button val={"1"} />
            </div>
            <div onClick={() => setString((string) => string + "2")}>
              <Button val={"2"} />
            </div>
            <div onClick={() => setString((string) => string + "3")}>
              <Button val={"3"} />
            </div>
            <div
              className="text-sky-600"
              onClick={() =>
                setString((string) =>
                  string.slice(-1) >= "0" && string.slice(-1) <= "9"
                    ? string + "+"
                    : fun()
                )
              }
            >
              <Button val={"+"} />
            </div>
          </div>
          <div className="flex">
            <div
              onClick={() =>
                setString((string) =>
                  string.slice(-1) >= "0" && string.slice(-1) <= "9"
                    ? string + "00"
                    : fun()
                )
              }
            >
              <Button val={"00"} />
            </div>
            <div onClick={() => setString((string) => string + "0")}>
              <Button val={"0"} />
            </div>
            <div
              className="text-sky-600"
              onClick={() =>
                setString((string) =>
                  string.slice(-1) >= "0" && string.slice(-1) <= "9"
                    ? eval(string).toString()
                    : fun()
                )
              }
            >
              <Button val={"="} w={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1;
"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useUser, useSignIn } from "@clerk/nextjs";

const Dashboard = () => {
  const notify = () => {
    toast.loading("Waiting...");
  };

  const { isLoaded, userId, sessionId, getToken, signOut } = useAuth();

  console.log(useAuth());

  const { user } = useUser();
  console.log("Our user is : ", user);

  useEffect(() => {
    async function practice() {
      console.log("So the promise is : ");
    }

    practice();
  }, []);

  return (
    <>
      {" "}
      <div classNameName="w-full h-screen flex justify-center items-center">
        <div>
          <button onClick={notify} classNameName="bg-gray-400 p-3 rounded-lg">
            Make me a toast
          </button>
          <Toaster position="top-center" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

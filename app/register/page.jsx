"use client"

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Register</button>
          <p>OR</p>
          <Link href={"/login"}>Already Signed User?</Link>
        </form>
      </section>
    </div>
  );
};

export default page;

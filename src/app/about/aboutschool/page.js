import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      this is about school
      <Link href="/about" className="bg-green-700 text-white p-2">
        About
      </Link>
    </div>
  );
};

export default page;

import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div>
      this is about page
      <Link href="/about/aboutschool" className="bg-blue-700 text-white p-2">
        About school
      </Link>
    </div>
  );
};

export default about;

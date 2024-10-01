import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

function page() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <div className="flex justify-center mt-3">
        <p className="text-6xl font-bold text-blue-600">WEB PROJECTS</p>
      </div>
      <div className="grid grid-cols-1 gap-2 p-4 m-1 lg:grid-cols-4">
        <Card />
      </div>
      </div>
    </div>
  );
}

export default page;

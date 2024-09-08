import React from "react";
import FreeSourceForm from "../components/forms/FreeSourceForm";

export const FreeSource = () => {
  return (
    <div className="flex justify-center h-[60vh] items-center">
      <div>
        <h1 className="text-xl font-semibold">Free Sources</h1>

        <div>
          <FreeSourceForm />
        </div>
      </div>
    </div>
  );
};

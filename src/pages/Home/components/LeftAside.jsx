import React, { Suspense } from "react";
import Categories from "../../../components/sections/Categories";
import { GridLoader } from "react-spinners";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<div className="flex justify-center w-full">
        <GridLoader  color="#D72050" margin={0} size={10} />
      </div>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;

import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/layout/Header";
import LatestNews from "../components/sections/LatestNews";
import Navbar from "../components/layout/Navbar";
import LeftAside from "../pages/Home/components/LeftAside";
import RightAside from "../pages/Home/components/RightAside";
import Loading from "../components/ui/Loading";

const Roots = () => {
  const { state } = useNavigation();

  return (
    <div className="container mx-auto">
      <header className="my-6">
        <Header></Header>
        
      </header>
      <Suspense className="w-11/12 mx-auto">
        <LatestNews />
      </Suspense>
      <nav className="w-11/12 mx-auto my-6">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto mt-6  grid grid-cols-12 gap-x-6">
        <aside className="col-span-3 hidden sm:flex sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-12 sm:col-span-6">
          {state == "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 hidden sm:flex sticky top-0 h-fit">
          <RightAside />
        </aside>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default Roots;

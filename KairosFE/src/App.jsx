import React from "react";
import {Routes, Route, Outlet } from 'react-router-dom';

import Hero from './landing/hero';
import Categories from './main/productCatalog';
import Aminoacidos from './main/misc/amino';
import Creatinas from './main/misc/creatina';
import Ganadores from './main/misc/ganadores';
import Preentrenos from './main/misc/preentreno';
import Proteinas from './main/misc/proteinas';
import Termogenicos from './main/misc/termogenicos';

const Layout = () => {
    return (
      <div className="w-full">
        <Categories />
        <div className='w-full'>   
          <Outlet />
        </div>
      </div>
    );
}

function App() {
  return (
    <>
      <Hero/>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="proteinas" index element={<Proteinas />} />
            <Route path="ganadores" element={<Ganadores />} />
            <Route path="creatinas" element={<Creatinas />} />
            <Route path="preentrenos" element={<Preentrenos />} />
            <Route path="aminoacidos" element={<Aminoacidos />} />
            <Route path="termogenicos" element={<Termogenicos />} />
        </Route>
      </Routes>
    </>

  )
}

export default App

import React, { useCallback, useEffect, useState } from "react";
import './Style.css';
import { Route, Routes } from "react-router-dom";
import MenuNavigation from './naviagtion/MenuNavigation';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="*" name="dashboard" element={<MenuNavigation />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;

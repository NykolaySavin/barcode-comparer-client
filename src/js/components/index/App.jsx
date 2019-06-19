import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductUpload from "../productUpload/ProductUpload.container";
import ProductMatch from "../productMatch/ProductMatch.container";
import history from './routerConfig'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter history={history}>
        <Route exact path="/" component={ProductUpload} />
        <Route path="/product" component={ProductMatch} />
      </BrowserRouter>
    </div>
  );
}

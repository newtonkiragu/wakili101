import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/MarriageFormContainer.jsx";
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer perPage={5} />, wrapper) : false;
import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import React from 'react';

function App(props) {

  return (



    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{props.free}</h5>
          <h6 class="card-price text-center">${props.price}<span class="period">/month</span></h6>
          <hr></hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.User}</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.Storage}</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.Projects}</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.Access}</li>
            <li class={props.muted}><span class="fa-li">{props.icon1}</span>{props.Private}</li>
            <li class={props.muted}><span class="fa-li">{props.icon2}</span>{props.Phone}
            </li>
            <li class={props.muted}><span class="fa-li">{props.icon3}</span>{props.Subdomain}
            </li>
            <li class={props.muted1}><span class="fa-li">{props.icon4}</span>{props.Reports}</li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;


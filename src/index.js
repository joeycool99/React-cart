import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

var arr = [
  {
    price: "0",
    free: "free",
    User: "Single User",
    muted: "text-muted",
    muted1: "text-muted",
    Storage: "5GB Storage",
    Projects: "Unlimited Public Projects",
    Access: "Community Access",
    Private: "Unlimited Private Projects",
    Phone: " Dedicated Phone Support",
    Subdomain: "Free Subdomain",
    Reports: "Monthly Status Reports",
    icon1: [<i class="fas fa-times"></i>],
    icon2: [<i class="fas fa-times"></i>],
    icon3: [<i class="fas fa-times"></i>],
    icon4: [<i class="fas fa-times"></i>]
  },
  {
    price: "9",
    free: "PLUS",
    User: [<strong>5 Users</strong>],
    muted1: "text-muted",
    Storage: "50GB Storage",
    Projects: "Unlimited Public Projects",
    Access: "Community Access",
    Private: "Unlimited Private Projects",
    Phone: " Dedicated Phone Support",
    Subdomain: "Free Subdomain",
    Reports: "Monthly Status Reports",
    icon4: [<i class="fas fa-times"></i>],
    icon1: [<i class="fas fa-check"></i>],
    icon2: [<i class="fas fa-check"></i>],
    icon3: [<i class="fas fa-check"></i>]
  },
  {
    price: "49",
    free: "PRO",
    User: [<strong>Unlimited Users</strong>],
    Storage: "150GB Storage",
    Projects: "Unlimited Public Projects",
    Access: "Community Access",
    Private: "Unlimited Private Projects",
    Phone: " Dedicated Phone Support",
    Subdomain: [<strong>Unlimited</strong>, " Free Subdomains"],
    Reports: "Monthly Status Reports",
    icon4: [<i class="fas fa-check"></i>],
    icon1: [<i class="fas fa-check"></i>],
    icon2: [<i class="fas fa-check"></i>],
    icon3: [<i class="fas fa-check"></i>]
  }
];

ReactDOM.render(
  <div>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {arr.map((plan) => (
            <App
              price={plan.price}
              free={plan.free}
              User={plan.User}
              muted={plan.muted}
              muted1={plan.muted1}
              Storage={plan.Storage}
              Projects={plan.Projects}
              Access={plan.Access}
              Private={plan.Private}
              Phone={plan.Phone}
              Subdomain={plan.Subdomain}
              Reports={plan.Reports}
              icon1={plan.icon1}
              icon2={plan.icon2}
              icon3={plan.icon3}
              icon4={plan.icon4}
            />
          ))}
        </div>
      </div>
    </section>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

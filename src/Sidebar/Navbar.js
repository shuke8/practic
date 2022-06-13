import React from "react";
import "./qwe.css";

import avatar from "./img/avatar.svg";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex align-items-center me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#" tabindex="-1">
                Среда, 13 окт
              </a>
            </li>
            <li class="nav-item ms-5">
              <div class="d-flex flex-column">
                <span>
                  Новые звонки
                  <span class="text-green"> 20 из 30 шт</span>
                </span>
                <div class="progress mt-2">
                  <div
                    class="progress-bar bg-green"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </li>
            <li class="nav-item ms-5">
              <div class="d-flex flex-column">
                <span>
                  Качество разговоров
                  <span class="text-yellow"> 40%</span>
                </span>
                <div class="progress mt-2">
                  <div
                    class="progress-bar bg-yellow"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </li>
            <li class="nav-item ms-5">
              <div class="d-flex flex-column">
                <span>
                  Конверсия в заказ <span class="text-red">67%</span>
                </span>
                <div class="progress mt-2">
                  <div
                    class="progress-bar bg-red"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </li>
            <li class="nav-item ms-5">
              <form class="d-flex">
                <input
                  style={{ border: "none" }}
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn" type="submit">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </li>
            <li class="nav-item ms-5">
              <div class="dropdown">
                <button
                  class="btn btn-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ИП Сидорова Александра Михайловна
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item ms-5">
              <div class="dropdown">
                <button
                  class="btn btn-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={avatar} alt="" />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

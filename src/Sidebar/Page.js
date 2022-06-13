import React from "react";
import "../App.css";
import Navbar from "./Navbar";

import plus from "./img/plus.svg";
import left from "./img/left.svg";
import calendar from "./img/calendar.svg";
import right from "./img/right.svg";
import callBlue from "./img/call-blue.svg";
import callAvatar from "./img/call-avatar.png";
import grade from "./img/grade.svg";
import callGreen from "./img/call-green.svg";
import callRed from "./img/call-red.svg";
import gradeGray from "./img/grade-gray.svg";
import gradeRed from "./img/grade-red.svg";

export default function Page() {
  return (
    <div
      style={{
        width: "calc(100% - 240px)",
        marginLeft: "auto",
        marginRight: "0",
      }}
    >
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      <div class="bg-light-blue pt-3" style={{ height: "100vh" }}>
        <div class="container">
          <div class="d-flex align-items-center justify-content-end">
            <button class="btn bg-white btn-md rounded-pill">
              <span>
                Баланс: <span>272 ₽ </span>
                <img src={plus} alt="" />
              </span>
            </button>
            <div class="d-flex align-items-center">
              <button class="btn">
                <img src={left} alt="" />
              </button>
              <button class="btn">
                <img src={calendar} alt="" />
              </button>
              <button class="btn">
                <img src={right} alt="" />
              </button>
            </div>
          </div>

          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid p-0">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <form class="d-flex">
                      <button class="btn" type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                      <input
                        class="form-control bg-transparent border-0 me-2"
                        type="search"
                        placeholder="Поиск по звонкам"
                        aria-label="Search"
                      />
                    </form>
                  </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <div class="dropdown">
                      <button
                        class="btn btn-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Все типы
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
                  <li class="nav-item">
                    <div class="dropdown">
                      <button
                        class="btn btn-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Все сотрудники
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
                  <li class="nav-item">
                    <div class="dropdown">
                      <button
                        class="btn btn-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Все звонки
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
                  <li class="nav-item">
                    <div class="dropdown">
                      <button
                        class="btn btn-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Все источники
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
                  <li class="nav-item">
                    <div class="dropdown">
                      <button
                        class="btn btn-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Все оценки
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
                  <li class="nav-item">
                    <div class="dropdown">
                      <button
                        class="btn btn-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Все ошибки
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

          <table class="table bg-white">
            <thead>
              <tr>
                <th scope="col">Тип</th>
                <th scope="col">Время</th>
                <th scope="col">Сотрудник</th>
                <th scope="col">Звонок</th>
                <th scope="col">Источник</th>
                <th scope="col">Оценка</th>
                <th scope="col">Длительность</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img src={callBlue} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td>
                  <img src={grade} alt="" />
                </td>
                <td>12:06</td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={callGreen} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td>
                  <button class="btn btn-outline-primary">Распознать</button>
                </td>
                <td>12:06</td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={callRed} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td class="text-red">Скрипт не использован</td>
                <td>12:06</td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={callBlue} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td></td>
                <td>12:06</td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={callBlue} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td>
                  <img src={gradeGray} alt="" />
                </td>
                <td>12:06</td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={callBlue} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td>
                  <img src={gradeRed} alt="" />
                </td>
                <td>12:06</td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={callBlue} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td>
                  <img src={grade} alt="" />
                </td>
                <td>12:06</td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={callGreen} alt="" />
                </th>
                <td>19:00</td>
                <td>
                  <img src={callAvatar} alt="" />
                </td>
                <td>+7 (987) 567-17-12</td>
                <th>Rabota.ru</th>
                <td>
                  <button class="btn btn-outline-primary">Распознать</button>
                </td>
                <td>12:06</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./qwe.css";

import logo from "./img/logo.svg";
import chartTimeline from "./img/chart-timeline-variant.svg";
import orders from "./img/orders-24px.svg";
import mailOutline from "./img/mail_outline-24px.svg";
import calls from "./img/calls-24px.svg";
import news from "./img/new.svg";
import people from "./img/people-24px.svg";
import documents from "./img/documents-24px.svg";
import permIdentity from "./img/perm_identity_black_24dp.svg";
import briefcase from "./img/briefcase-outline.svg";
import localLibrary from "./img/local_library_black_24dp.svg";
import settings from "./img/settings-24px.svg";
import vector from "./img/Vector.svg";
import alert from "./img/alert_24.svg";

export default function Qwe() {
  return (
    <div class="w3-sidebar w3-bar-block">
      <div class="w3-bar-item">
        <img src={logo} alt="" />
      </div>
      <a href="#" class="w3-bar-item w3-button">
        <img src={chartTimeline} alt="" /> Итоги
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={orders} alt="" /> Заказы
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={mailOutline} alt="" /> Сообщения
      </a>
      <a href="#" class="w3-bar-item w3-button active">
        <img src={calls} alt="" /> Звонки
        <img
          style={{ right: "12px", position: "absolute" }}
          src={news}
          alt=""
        />
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={people} alt="" /> Контрагенты
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={documents} alt="" /> Документы
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={permIdentity} alt="" /> Исполнители
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={briefcase} alt="" /> Отчеты
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={localLibrary} alt="" /> База знаний
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src={settings} alt="" /> Настройки
      </a>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "64px" }}
          class="bn bn-blue bn-medium"
        >
          Добавить заказ <img src={vector} alt="" />
        </button>
        <button
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "32px" }}
          class="bn bn-blue bn-medium"
        >
          Оплата <img src={alert} alt="" />
        </button>
      </div>
    </div>
  );
}

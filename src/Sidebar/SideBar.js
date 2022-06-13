import React from "react";
import "../App.css";

export default function SideBar() {
  return (
    <div class="w3-sidebar w3-bar-block">
      <div class="w3-bar-item">
        <img src="./img/logo.svg" alt="" />
      </div>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/chart-timeline-variant.svg" alt="" /> Итоги
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/orders-24px.svg" alt="" /> Заказы
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/mail_outline-24px.svg" alt="" /> Сообщения
      </a>
      <a href="#" class="w3-bar-item w3-button active">
        <img src="./img/calls-24px.svg" alt="" /> Звонки
        <img
          style={{ right: "12px", position: "absolute" }}
          src="./img/new.svg"
          alt=""
        />
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/people-24px.svg" alt="" /> Контрагенты
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/documents-24px.svg" alt="" /> Документы
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/perm_identity_black_24dp.svg" alt="" /> Исполнители
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/briefcase-outline.svg" alt="" /> Отчеты
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/local_library_black_24dp.svg" alt="" /> База знаний
      </a>
      <a href="#" class="w3-bar-item w3-button">
        <img src="./img/settings-24px.svg" alt="" /> Настройки
      </a>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "64px" }}
          class="bn bn-blue bn-medium"
        >
          Добавить заказ <img src="./img/Vector.svg" alt="" />
        </button>
        <button
          style="margin-left: auto; margin-right: auto; margin-top: 32px"
          class="bn bn-blue bn-medium"
        >
          Оплата <img src="./img/alert_24.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

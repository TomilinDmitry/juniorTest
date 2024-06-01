import React, { useState } from "react";
import style from "./index.module.scss";
import { useLocation } from "react-router-dom";
import user from "../../images/icons/mi_user.svg";
import calendar from "../../images/icons/mi_calendar.svg";
import call from "../../images/icons/mi_call.svg";
import email from "../../images/icons/mi_email.svg";
import link from "../../images/icons/mi_link-alt.svg";
import locationImg from "../../images/icons/mi_location.svg";
import mobile from "../../images/icons/mi_mobile.svg";
import mobileCall from "../../images/icons/callMobile.svg";
import photo1 from "../../images/photo/photo1.png";
import photo2 from "../../images/photo/photo2.png";
import photo1Mobile from "../../images/photo/photo1Mobile.png";
import photo2Mobile from "../../images/photo/photo2Mobile.png";
import telegram from "../../images/icons/Telegram.svg";
import Whatsapp from "../../images/icons/Whatsapp.svg";
import VK from "../../images/icons/VK.svg";
import Viber from "../../images/icons/Viber.svg";
import Tiktok from "../../images/icons/Tiktok.svg";
import Ok from "../../images/icons/Ok.svg";
import YouTube from "../../images/icons/YouTube.svg";
import Facebook from "../../images/icons/Facebook.svg";
import Instagram from "../../images/icons/Instagram.svg";
import LinkedIn from "../../images/icons/LinkedIn.svg";
export const MainContainer = () => {
  const location = useLocation();
  const [photo, setPhoto] = useState<number>(1);
  return (
    <div className={style.wrapper}>
      <div className={style.buttons}>
        <button>
          <a
            href='/'
            className={`${
              location.pathname === "/"
                ? style.active
                : style.notActive
            }`}>
            О компании{" "}
          </a>{" "}
        </button>
        <button>
          <a
            href='#/profile'
            className={`${
              location.pathname === "/profile"
                ? style.active
                : style.notActive
            }`}>
            О сотруднике{" "}
          </a>{" "}
        </button>
      </div>
      <div className={style.container}>
        <div className={style.containerBlock}>
          <div className={style.photo}>
            <section className={style.mobileTitle}>
              <h1>LOGO</h1>
            </section>
            <div className={style.desktop}>
              {photo === 1 && <img src={photo1} alt='Photo1' />}
              {photo === 2 && <img src={photo2} alt='Photo2' />}
            </div>
            <div className={style.mobile}>
              {photo === 1 && <img src={photo1Mobile} alt='Photo1' />}
              {photo === 2 && <img src={photo2Mobile} alt='Photo2' />}
            </div>
            <div className={style.dots}>
              <button
                className={`${
                  photo === 1 ? style.activeDotOne : style.dotOne
                }`}
                onClick={() => setPhoto(1)}
              />
              <button
                className={`${
                  photo === 2 ? style.activeDotTwo : style.dotTwo
                }`}
                onClick={() => setPhoto(2)}
              />
            </div>
            <button className={style.addButton}>
              Добавить в контакты
            </button>
            <div className={style.mobileButtons}>
              <button className={style.cardButton}>
                {" "}
                <a href='https://disk.yandex.ru/i/uJD_dZV2SqIaKw'>
                  Визитка{" "}
                </a>
              </button>
              <button className={style.callButton}>
                {" "}
                <a href={`tel:+79521190701`}>
                  <img src={mobileCall} alt='call' />
                  Позвонить
                </a>
              </button>
            </div>
          </div>
          <div className={style.infoContainer}>
            <section className={style.title}>
              <h1>LOGO</h1>
            </section>
            <div className={style.info}>
              <div className={style.infoNameBlock}>
                <span className={style.secondName}>Томилин</span>
                <br />
                <span className={style.name}>Дмитрий Валерьевич</span>
              </div>
              <span className={style.post}>Frontend-разработчик</span>
              <span className={style.underline}></span>
              <div className={style.contact}>
                <ul>
                  <li>
                    {" "}
                    <img src={mobile} alt='Phone' />
                    +7 (952)-119-07-01
                  </li>
                  <li>
                    {" "}
                    <img src={call} alt='Phone' />
                    <a href={`tel:+79521190701`}>
                      {" "}
                      +7 (952)-119-07-01
                    </a>
                  </li>
                  <li>
                    <img src={email} alt='Email' />
                    <a href={`mailto:bezzy69@yandex.ru`}>
                      bezzy69@yandex.ru
                    </a>
                  </li>
                  <li>
                    <img src={link} alt='gitHub' />
                    <a href='https://github.com/TomilinDmitry'>
                      github.com/TomilinDmitry
                    </a>
                  </li>
                  <li>
                    <img src={locationImg} alt='locaiton' />
                    г.Калининград ул.Минусинская
                  </li>
                  <li>
                    <img src={calendar} alt='calendar' />7 сентября
                    2002 г.
                  </li>
                  <li>
                    <img src={user} alt='calendar' />
                    Junior{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.social}>
          <ul>
            <li>
              <a href='https://t.me/dftomilin'>
                <img src={telegram} alt='tg' />
              </a>
            </li>
            <li>
              <a href='https://vk.com/crymore3'>
                <img src={VK} alt='VK' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={Whatsapp} alt='Whatsapp' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={Viber} alt='viber' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={Ok} alt='Ok' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={Tiktok} alt='TikTok' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={YouTube} alt='YouTube' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={Instagram} alt='Instagram' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={LinkedIn} alt='LinkedIn' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={Facebook} alt='Facebook' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

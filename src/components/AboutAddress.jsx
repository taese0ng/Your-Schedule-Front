import React from 'react'
import "../css/About.scss";

function AboutAddress(){
    return(
        <ul className="about__notice">
            <li className="about__adress">
                <p className="about__title">주소 : </p>
                <p className="about__content">전라남도 여수시 돌산읍 돌산로 3600-1 (돌산읍)</p>
            </li>
            <li className="about__hours">
                <p className="about__title">이용시간 : </p>
                <p className="about__content">상시 가능</p>
            </li>
            <li className="about__dayoff">
                <p className="about__title">쉬는 날 :</p>
                <p className="about__content">연중무휴</p>
            </li>
            <li className="about__phone">
                <p className="about__title">연락처 :</p>
                <p className="about__content">061-659-4628</p>
            </li>
            <li className="about__fee">
                <p className="about__title">입장료 :</p>
                <p className="about__content">무료</p>
            </li>
            <li className="about__parking">
                <p className="about__title">주차시설 :</p>
                <p className="about__content">주차 가능(승용차 150대, 대형차 15대) / 무료</p>
            </li>
        </ul>
    )
}

export default AboutAddress;
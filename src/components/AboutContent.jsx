import React from 'react'
import "../css/About.scss";

function AboutContent(props){
    return(
        <ul className="about__data">
            <li className="about__Img_box">
                <img className="about__Img" src="http://tong.visitkorea.or.kr/cms/resource/19/2653419_image2_1.jpg" alt="돌산공원"/>
            </li>

            <li className="about__description__box">
                <p className="about__name">{props.info.name}</p>
                <p className="about__description">
                    돌산공원은 돌산대교와 마주보는 자리에 위치하고 하고 있으며 87,000여평의 부지에 1987년 조성되었다. 
                    공원에는 2004년 sbs아침드라마 “선택” 세트 촬영장이 설치되어 많은 관광객들이 관람하고 있으며,
                    세트장의 일부를 전통찻집으로 개조하여 돌산대교를 바라보며 차를 마시는 풍경이 일품이다. 
                    공원의 뷰포인트에서 바라보는 돌산대교 머리위로 지는 해넘이와 돌산대교 야경, 
                    그리고 여수시 중앙동과 종화동을 아우르는 해양공원의 야경, 장군도 야경 등을 바라보는 경치 또한 장관이다.
                    중앙부지에는 1994년 삼여통합과 관련된 각종 자료가 타임캡슐 안에 보관되어 100년 후에 공개할 예정이다.
                </p>
            </li>
        </ul>
    )
}

export default AboutContent;
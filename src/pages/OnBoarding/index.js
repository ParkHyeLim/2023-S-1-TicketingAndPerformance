import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";
import "./index.css";
import p1 from "../../asset/onboding_image1.png"
import p2 from "../../asset/capture_image.png"
import { useRef } from 'react';

const OnBoarding = () => {
  const contentRef = useRef();

  const handleClick = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>온보딩 네비게이션</div>
      <div id="page_intro">
        <div id="box1">
          <img className="img" src={p1} alt={"onbording_image"} />
          <div>
            <p className="intro">문화 생활 시작의 발걸음</p>
            <p className="intro"><span>무한도전</span> 에서</p>
            <p className="intro">힘차게 내딛어 보세요!</p>
          </div>
        </div>
        <div className="btn_center">
          <Button styleClass="arrow" onClick={handleClick}>아래로 스크롤</Button>
        </div>
      </div>

      <div className="page row" ref={contentRef}>
        <div>
          <p className="text1">무한도전은
            <br /> 문화생활을 함께 해줄 동반자 서비스 입니다
          </p>
          <p className="text2">다양한 공연 정보 탐색부터
            <br />직접 티켓팅을 해보고 실력을 키울 수 있는 연습까지.
            <br />무한도전에서는 능동적으로 문화생활을 시작 할 수 있습니다.
          </p>
        </div>
        <div>
          <img className="img" src={p1} alt={"onbording_image"} />
        </div>
      </div>

      <div className="page row" id="gray">
        <div>
          <p className="text3">티켓팅 연습</p>
          <p className="text1">좌석 위치를
            <br />한눈에
          </p>
          <p className="text2">티켓팅 연습을 위해 좌석 위치를 확인하고, 
            <br />직접 클릭하는 방식으로 연습해 볼 수 있어요.
          </p>
        </div>
        <div>
          <img className="img" src={p1} alt={"onbording_image"} />
        </div>
      </div>

      <div className="page column">
        <div>
          <p className="text3">공연 정보</p>
          <p className="text1">다양한 공연 정보를
            <br />둘러볼 수 있어요.
          </p>
          <p className="text2">뮤지컬, 연극, 콘서트 등 다양한 공연 정보를 확인 할 수 있어요.
            <br />세세한 공연 정보가 궁금하다면 포스터 사진을 눌러 상세 페이지로 넘어갈 수 있어요.
          </p>
        </div>
        <div>
          <img className="img2" src={p2} alt={"capture_image"} />
        </div>
      </div >

      <div className="page column">
        <div>
          <p className="text3">통계</p>
          <p className="text1">도전한 티켓팅 횟수를
            <br />한눈에 볼 수 있어요.
          </p>
          <p className="text2">지금껏 도전한 티켓팅 시도 횟수를 알아보고, 성공한 횟수를 한눈에 볼 수 있어요.
            <br />점차 늘어가는 실력을 확인하고 뿌듯함을 느껴보세요!
          </p>
        </div>
        <div>
          <img className="img2" src={p2} alt={"capture_image"} />
        </div>
      </div >

      <div className="page column">
        <div>
          <p className="text3">만든 사람들</p>
          <p className="text1">무한도전 서비스를 기획하고,
            <br />제작한 사람들을 알아볼까요?
          </p>
        </div>
        <Link to="/main" style={{ textDecoration: "none" }}>
          <Button styleClass="main">시작해볼까요?</Button>
        </Link>
      </div>
    </>
  );
};

export default OnBoarding;
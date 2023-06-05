import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  OrangeContainer,
  Modal,
  Timer,
  MouseSpeed,
  SeatGroup,
  DeleyTimer,
  ResultModal,
} from "../../components";

import "./index.css";
import stageImageA from "../../asset/images/Stage_image_A.png";
import stageImageB from "../../asset/images/Stage_image_B.png";
import Floor from "../../asset/images/Floor.png";
import reset from "../../asset/images/reset_image.png";

const Ticketing = () => {
  // 클릭시 마우스 정보
  const [click, setClick] = useState(false);
  const [downClick, setDownClick] = useState(0);
  const [upClick, setUpClick] = useState(0);
  const [allDisable, setAllDisable] = useState(false);
  const [disableList, setDisableList] = useState([]);
  const [checked, setChecked] = useState(false);
  // 모달창에서 정보 받아오기
  const [setting, setSetting] = useState("setting_A");
  const [difficulty, setDifficulty] = useState("상");

  const checkSeat = (value) => {
    setClick(value);
  };

  const checkSeatDown = (value) => {
    setDownClick(value);
  };

  const checkSeatUp = (value) => {
    setUpClick(value);
  };

  const updateDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const updateSetting = (selectedSetting) => {
    setSetting(selectedSetting);
  };

  const updateCheck = (value) => {
    setChecked(value);
  };

  const handleDisabled = (value) => {
    console.log("그룹의 모든 버튼이 disable 되었습니다");
    setDisableList((prevList) => [...prevList, value]);
    console.log(disableList);
  };

  useEffect(() => {
    if (disableList.length === 7) {
      setAllDisable(true);
    }
  }, [disableList]);

  const commonProps = {
    clickValue: click,
    childClick: checkSeat,
    childDown: checkSeatDown,
    childUp: checkSeatUp,
    everyDisabled: handleDisabled,
  };

  return (
    <>
      <Modal
        updateDifficulty={updateDifficulty}
        updateSetting={updateSetting}
        checkClick={updateCheck}
      />

      {click || allDisable ? (
        <ResultModal
          clickValue={click}
          disableValue={allDisable}
          mode={difficulty}
        />
      ) : null}
      {checked ? (
        <>
          <DeleyTimer styleClass="box" Time={3} />
          <OrangeContainer className="OrangeContainer" category={"티켓팅 연습"}>
            <div className="infor">
              <Timer clickValue={click} disableValue={allDisable} />
              <MouseSpeed
                onMouseDownClick={downClick}
                onMouseUpClick={upClick}
              />
            </div>
            <div className="seatContainer">
              {setting === "setting_A" ? (
                difficulty === "상" ? (
                  <>
                    <img
                      className="stage_image"
                      src={stageImageA}
                      alt={"stage 공간"}
                    />
                    <img className="Floor1" src={Floor} alt={"stage 공간"} />
                    <img className="Floor2" src={Floor} alt={"stage 공간"} />
                    <img className="Floor3" src={Floor} alt={"stage 공간"} />
                    <SeatGroup
                      styleGroub="seatBox A"
                      size={60}
                      speed={3}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox B"
                      size={60}
                      speed={1}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox C"
                      size={60}
                      speed={1}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox D"
                      size={60}
                      speed={3}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox E"
                      size={60}
                      speed={7}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox F"
                      size={60}
                      speed={7}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox G"
                      size={60}
                      speed={7}
                      {...commonProps}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="stage_image"
                      src={stageImageA}
                      alt={"stage 공간"}
                    />
                    <img className="Floor1" src={Floor} alt={"stage 공간"} />
                    <img className="Floor2" src={Floor} alt={"stage 공간"} />
                    <img className="Floor3" src={Floor} alt={"stage 공간"} />
                    <SeatGroup
                      styleGroub="seatBox A"
                      size={60}
                      speed={10}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox B"
                      size={60}
                      speed={5}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox C"
                      size={60}
                      speed={5}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox D"
                      size={60}
                      speed={10}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox E"
                      size={60}
                      speed={25}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox F"
                      size={60}
                      speed={25}
                      {...commonProps}
                    />
                    <SeatGroup
                      styleGroub="seatBox G"
                      size={60}
                      speed={25}
                      {...commonProps}
                    />
                  </>
                )
              ) : difficulty === "상" ? (
                <>
                  <img
                    className="stage_image"
                    src={stageImageB}
                    alt={"stage 공간"}
                  />
                  <img className="Floor4" src={Floor} alt={"stage 공간"} />
                  <img className="Floor5" src={Floor} alt={"stage 공간"} />
                  <SeatGroup
                    styleGroub="seatBox a"
                    size={78}
                    speed={1}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox b"
                    size={78}
                    speed={1}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox c"
                    size={75}
                    speed={3}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox d"
                    size={75}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox e"
                    size={75}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox f"
                    size={100}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox g"
                    size={100}
                    speed={5}
                    {...commonProps}
                  />
                </>
              ) : (
                <>
                  <img
                    className="stage_image"
                    src={stageImageB}
                    alt={"stage 공간"}
                  />
                  <img className="Floor4" src={Floor} alt={"stage 공간"} />
                  <img className="Floor5" src={Floor} alt={"stage 공간"} />
                  <SeatGroup
                    styleGroub="seatBox a"
                    size={78}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox b"
                    size={78}
                    speed={5}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox c"
                    size={75}
                    speed={10}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox d"
                    size={75}
                    speed={10}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox e"
                    size={75}
                    speed={10}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox f"
                    size={136}
                    speed={15}
                    {...commonProps}
                  />
                  <SeatGroup
                    styleGroub="seatBox g"
                    size={136}
                    speed={15}
                    {...commonProps}
                  />
                </>
              )}
            </div>
          </OrangeContainer>
        </>
      ) : (
        <OrangeContainer className="OrangeContainer" category={"티켓팅연습"}>
          <div className="reset">
            <img className="resetImage" src={reset} alt="새로고침" />
            <p className="resetText">
              새로고침(F5) 하셔서 난이도와 좌석 형태를 선택해주세요!
            </p>
          </div>
        </OrangeContainer>
      )}
    </>
  );
};

export default Ticketing;

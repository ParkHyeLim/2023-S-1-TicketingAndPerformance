import React from "react";

import "./index.css";

const DetailInfo = ({ performance }) => {
  const splitDetails = (detailInfo) => {
    // ,를 기준으로 정보를 쪼개어 줄넘김하여 출력
    const dates = detailInfo[0].split(", ");
    return dates.map((date, index) => <li key={index}>{date.trim()}</li>);
  };

  return (
    <div className="detail-container">
      <p className="detail-genre">{performance.genrenm}</p>
      <h2 className="detail-title">{performance.prfnm}</h2>
      <div className="detail-title-line"></div>
      <div className="detail-contents">
        <img className="detail-img" src={performance.poster} alt="공연포스터" />

        <ul className="info">
          <li>
            <div className="infoItem">
              <strong>공연기간</strong>
            </div>
            <div className="infoDesc">
              {performance.prfpdfrom}~{performance.prfpdto}
            </div>
          </li>
          <li>
            <div className="infoItem">
              <strong>공연장소</strong>
            </div>
            <div className="infoDesc">{performance.fcltynm}</div>
          </li>
          <li>
            <div className="infoItem">
              <strong>공연시간</strong>
            </div>
            <div className="infoDesc">
              <ul className="manyDesc">
                {splitDetails(performance.dtguidance)}
              </ul>
            </div>
          </li>
          <li>
            <div className="infoItem">
              <strong>관람연령</strong>
            </div>
            <div className="infoDesc">{performance.prfage}</div>
          </li>
          <li>
            <div className="infoItem">
              <strong>티켓가격</strong>
            </div>
            <div className="infoDesc">
              <ul className="manyDesc">
                {splitDetails(performance.pcseguidance)}
              </ul>
            </div>
          </li>
          <li>
            <div className="infoItem">
              <strong>출연진</strong>
            </div>
            <div className="infoDesc">{performance.prfcast}</div>
          </li>
          <li>
            <div className="infoItem">
              <strong>러닝타임</strong>
            </div>
            <div className="infoDesc">{performance.prfruntime}</div>
          </li>
          <li>
            <div className="infoItem">
              <strong>공연상태</strong>
            </div>
            <div className="infoDesc">{performance.prfstate}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailInfo;

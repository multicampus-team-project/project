import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RanksCarousel() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [performances, setPerformances] = useState([]);

  const maxRank = 10;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/boxoffice?catecode=${selectedGenre}`)
      .then((response) => {
        const boxOfData = response.data.boxofs.boxof;

        if (boxOfData && boxOfData.length > 0) {
          // 데이터가 있는 경우
          const filterData = boxOfData.filter((performance) => performance.rnum <= maxRank);
          setPerformances(filterData);
        } else {
          // 데이터가 없는 경우
          setPerformances([]); // 데이터를 빈 배열로 설정
        }
      })
      .catch((error) => {
        console.error("API 에러:", error);
      });
  }, [selectedGenre]);

  return (
    <div id="ranksCarouselBox">
      <div className="inner">
        <h1 className="title1">공연차트</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {performances.map((performance) => {
            return (
              <SwiperSlide key={performance.mt20id}>
                <Link to={`/Reservation/${performance.mt20id}`}>
                  <ul className="slideWrap">
                    <li>
                      <div className="movieBox">
                        <div className="posterBox">
                          <p>{performance.cate}</p> {/* 장르 정보 출력 */}
                          <p>순위 : {performance.rnum}</p>
                          <img
                            src={"http://www.kopis.or.kr" + performance.poster}
                            alt={performance.prfnm}
                            className="poster-image"
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                          <div className="hoverBox">
                            <Button variant="light">상세보기</Button>
                            <Button variant="danger">예매하기</Button>
                          </div>
                        </div>
                        <div className="movieInfoBox">
                          <strong className="movieName">{performance.prfnm}</strong>
                          <span>공연장소 : {performance.prfplcnm}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
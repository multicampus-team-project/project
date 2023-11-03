import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function GenresCarousel() {
  const [selectedGenre, setSelectedGenre] = useState("AAAA");
  const [performances, setPerformances] = useState([]);

  const maxRank = 10;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/boxoffice?catecode=${selectedGenre}`)
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

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div id="genresCarouselBox">
      <div className="mainInner">
        <h1 className="title1">장르별 공연🎪</h1>
        <Nav className="sliderTabs" variant="pills" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => handleGenreChange("AAAA")}>
              연극
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => handleGenreChange("BBBC")}>
              무용(서양/한국무용)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => handleGenreChange("BBBR")}>
              대중무용
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => handleGenreChange("CCCA")}>
              서양음악(클래식)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={() => handleGenreChange("CCCC")}>
              한국음악(국악)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5" onClick={() => handleGenreChange("CCCD")}>
              대중음악
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6" onClick={() => handleGenreChange("EEEA")}>
              복합
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-7" onClick={() => handleGenreChange("EEEB")}>
              서커스/마술
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-8" onClick={() => handleGenreChange("GGGA")}>
              뮤지컬
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {performances.length > 0 ? (
            performances.map((performance) => {
              return (
                <SwiperSlide key={performance.mt20id}>
                  <Link to={`/Reservation/${performance.mt20id}`}>
                    <div className="movieBox">
                      <div className="posterBox">
                        {/* <p>{performance.cate}</p> 장르 정보 출력
                        <p>순위 : {performance.rnum}</p> */}
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
                        <span>{performance.prfplcnm}</span>
                        <span className="movieDate"> {performance.prfpd}</span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })
          ) : (
            <div>데이터가 없습니다.</div>
          )}
        </Swiper>
      </div>
    </div>
  );
}

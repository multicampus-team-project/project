import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Nav } from "react-bootstrap";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [selectedGenre, setSelectedGenre] = useState("AAAA");
  const [prfstate, setPrfstate] = useState("01");
  const [performances, setPerformances] = useState([]);
  const [noDataMessage, setNoDataMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/data?shcate=${selectedGenre}&prfstate=${prfstate}`)
      .then((response) => {
        setPerformances(response.data.dbs.db);
        console.log(response.data.dbs.db.length);
        if (response.data.dbs.db.length === 0) {
          setNoDataMessage("데이터가 없어요");
          console.log(response.data.dbs.db.length);
        } else {
          setNoDataMessage("");
        }
      })
      .catch((error) => {
        console.error("API 에러:", error);
        setNoDataMessage("데이터를 불러오는 중에 오류가 발생했습니다");
      });
  }, [selectedGenre, prfstate]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleStateChange = (state) => {
    setPrfstate(state);
  };

  return (
    <>
      <h1 className="title1">장르별 랭킹</h1>
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
          <Nav.Link eventKey="link-2" onClick={() => handleGenreChange("BBBE")}>
            대중무용(클릭시 에러처리 아직 안했어요 클릭 ㄴㄴㄴㄴㄴ)
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
          <Nav.Link eventKey="link-4" onClick={() => handleGenreChange("CCCD")}>
            대중음악
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={() => handleGenreChange("EEEA")}>
            복합
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={() => handleGenreChange("EEEB")}>
            서커스/마술
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={() => handleGenreChange("GGGA")}>
            뮤지컬
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-9" onClick={() => handleStateChange("01")}>
            공연예정
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-10" onClick={() => handleStateChange("02")}>
            공연중
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {performances.map((performance) => {
          return (
            <SwiperSlide key={performance.prfid}>
              <ul className="slideWrap">
                <li>
                  <div className="movieBox">
                    <div className="posterBox">
                      <p>{performance.genrenm}</p>
                      <img
                        src={performance.poster}
                        alt={performance.prfnm}
                        className="poster-image"
                        style={{ width: "300px", height: "400px" }}
                      />
                      <div className=""></div>
                      <div className="hoverBox">
                        <Button variant="light">상세보기</Button>
                        <Button variant="danger">예매하기</Button>
                      </div>
                    </div>
                    <div className="movieInfoBox">
                      <strong className="movieName">{performance.prfnm}</strong>
                      <span>공연중인지?? {performance.prfstate}</span>
                      <span className="movieDate">
                        {performance.prfpd}~{performance.prfed}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </SwiperSlide>
          );
        })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

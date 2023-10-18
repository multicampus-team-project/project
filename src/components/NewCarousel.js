import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Badge } from "react-bootstrap";

export default function NewCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div id="newCarouselBox">
      <div className="inner">
        <h1 className="title1">새로 오픈한 공연</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: false,
            dynamicBullets: true
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {[0, 1, 2, 3].map(function (a, i) {
            return (
              <SwiperSlide>
                <ul className="slideWrap">
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>

                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>
                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>

                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>

                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>

                        <span>공연 장소 바인딩</span>
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
      </div>
    </div>
  );
}
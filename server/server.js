const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const axios = require("axios");
const { parseString } = require("xml2js");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
require("dotenv").config();

// XML 파싱 함수
function parseXML(xmlData) {
  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        reject({ error: "파싱 에러" });
      } else {
        resolve(result);
      }
    });
  });
}

// KOPIS API(공연 정보) 요청 함수
async function ParseAPI() {
  const today = new Date();
  const formatstdate = today.toISOString().slice(0, 10).replace(/-/g, "");

  const apiUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${process.env.KOPIS_API}&stdate=${formatstdate}&eddate=20240301&cpage=1&rows=10&prfstate=02&`;
  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
}

// API 데이터 가져오는 엔드포인트
app.get("/api/data", async (req, res) => {
  try {
    const apiData = await ParseAPI();
    res.json(apiData);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

async function SearchAPI(searchTerm) {
  const today = new Date();
  const formatstdate = today.toISOString().slice(0, 10).replace(/-/g, "");

  const apiUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${process.env.KOPIS_API}&stdate=${formatstdate}&eddate=20240301&cpage=1&rows=10&prfstate=02&shprfnm=${searchTerm}`;
  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
}

app.get("/api/data/:searchTerm", async (req, res) => {
  const searchTerm = req.params.searchTerm; // URL 경로에서 searchTerm 매개변수를 가져옵니다.
  try {
    const apiData = await SearchAPI(searchTerm);
    res.json(apiData);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

/////////////////////////////////////////////////////////////////////

// KOPIS API(박스오피스 정보) 요청 함수
async function ParseBoxOfficeAPI(catecode) {
  const ststype = "day"; // 일별 예매상황판 목록 요청

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedDate = yesterday.toISOString().slice(0, 10).replace(/-/g, "");

  // 서버에서 받은 catecode 및 어제 날짜를 동적으로 API 주소에 추가
  const apiUrl = `http://www.kopis.or.kr/openApi/restful/boxoffice?service=${process.env.KOPIS_API}&ststype=${ststype}&date=${formattedDate}&catecode=${catecode}`;

  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
}

// API 데이터 가져오는 엔드포인트 (일별 예매상황판 목록)
app.get("/api/boxoffice", async (req, res) => {
  const { catecode } = req.query; // 클라이언트에서 catecode를 쿼리 파라미터로 전달

  try {
    const boxOfficeData = await ParseBoxOfficeAPI(catecode);
    res.json(boxOfficeData);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

/////////////////////////////////////////////////////////////////////

// 공연 상세 API
const performanceData = async (mt20id) => {
  const apiUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr/${mt20id}?service=${process.env.KOPIS_API}`;

  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
};

app.get("/api/pblprfr/:mt20id", async (req, res) => {
  const { mt20id } = req.params;
  try {
    const result = await performanceData(mt20id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

/////////////////////////////////////////////////////////////////////

app.use(cookieParser()); // cookie-parser 미들웨어 설정

app.use(
  session({
    secret: crypto.randomBytes(32).toString("hex"), // 32바이트 길이의 랜덤 키 생성
    resave: false,
    saveUninitialized: true,
  })
);

// 멤버 정보 가져오기 라우팅
const memberRouter = require("./routes/member");
app.use("/", memberRouter);

// 예약 라우팅
const reservationRouter = require("./routes/reservation");
app.use("/", reservationRouter);

// 회원가입 라우팅
const signupRouter = require("./routes/signup");
app.use("/", signupRouter);

// 로그인 라우팅
const loginRouter = require("./routes/login");
app.use("/", loginRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});

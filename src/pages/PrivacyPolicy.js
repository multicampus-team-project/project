import React from "react";
import "./Privacy.css";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div>
      <SubHeader />
      <div className="containerStyle">
        <h1 className="headStyle">개인정보처리방침</h1>

        <h2 className="headingStyle">제1조(목적)</h2>
        <p className="paragraphStyle">
          티켓 1번가(이하 ‘회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘회사 서비스’)를 이용하는 개인(이하
          ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호
          등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을
          신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.
        </p>

        <h2 className="headingStyle">제2조(개인정보 처리의 원칙)</h2>
        <p className="paragraphStyle">
          개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의
          동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는
          수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.
        </p>

        <h2 className="headingStyle">제3조(본 방침의 공개)</h2>
        <ul>
          <li className="listItemStyle">
            회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결화면을
            통해 본 방침을 공개하고 있습니다.
          </li>
          <li className="listItemStyle">
            회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수
            있도록 합니다.
          </li>
        </ul>

        <h2 className="headingStyle">제4조(본 방침의 변경)</h2>
        <ul>
          <li className="listItemStyle">
            본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수
            있습니다.
          </li>
          <li className="listItemStyle">
            회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.
            <ol>회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법</ol>
            <ol>서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법</ol>
          </li>
          <li className="listItemStyle">
            회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한
            변경이 있을 경우에는 최소 30일 전에 공지합니다.
          </li>
        </ul>

        <h2 className="headingStyle">제5조(회원 가입을 위한 정보)</h2>
        <p className="paragraphStyle">
          회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은 정보를 수집합니다.
        </p>
        <ul>
          <li className="listItemStyle">필수 수집 정보: 이메일 주소, 비밀번호, 이름 및 휴대폰 번호</li>
        </ul>

        <h2 className="headingStyle">제6조(본인 인증을 위한 정보)</h2>
        <p className="paragraphStyle">회사는 이용자의 본인인증을 위하여 다음과 같은 정보를 수집합니다.</p>
        <ul>
          <li className="listItemStyle">필수 수집 정보: 휴대폰 번호, 이메일 주소, 이름 및 성별 </li>
        </ul>

        <h2 className="headingStyle">제7조(결제 서비스를 위한 정보)</h2>
        <p className="paragraphStyle">
          회사는 이용자에게 회사의 결제 서비스 제공을 위하여 다음과 같은 정보를 수집합니다
        </p>
        <ul>
          <li className="listItemStyle">
            필수 수집 정보:  카드번호, 카드비밀번호, 유효기간, 생년월일 6자리(yy/mm/dd), 은행명 및 계좌번호 
          </li>
        </ul>

        <h2 className="headingStyle">제8조(현금 영수증 발행을 위한 정보)</h2>
        <p className="paragraphStyle">회사는 이용자의 현금영수증을 발행하기 위하여 다음과 같은 정보를 수집합니다.</p>
        <ul>
          <li className="listItemStyle">
            필수 수집 정보: 현금영수증 발행 대상자 이름, 현금영수증 발행 대상자 생년월일, 현금영수증 발행 대상자 주소,
            휴대폰 번호 및 현금영수증 카드번호
          </li>
        </ul>

        <h2 className="headingStyle">제9조(회사 서비스 제공을 위한 정보)</h2>
        <p className="paragraphStyle">
          회사는 이용자에게 회사의 서비스를 제공하기 위하여 다음과 같은 정보를 수집합니다.
        </p>
        <ul>
          <li className="listItemStyle">필수 수집 정보: 아이디, 이메일 주소, 이름, 생년월일 및 연락처</li>
        </ul>

        <h2 className="headingStyle">제10조(서비스 이용 및 부정 이용 확인을 위한 정보)</h2>
        <p className="paragraphStyle">
          회사는 이용자의 서비스 이용 및 부정이용의 확인 및 분석을 위하여 다음과 같은 정보를 수집합니다.
        </p>
        <ul>
          <li className="listItemStyle">필수 수집 정보: 서비스 이용기록, 쿠키, 접속지 정보 및 기기정보</li>
        </ul>
        <p className="paragraphStyle">
          ※ 부정이용 : 회원탈퇴 후 재가입, 상품구매 후 구매취소 등을 반복적으로 행하는 등 회사가 제공하는 할인쿠폰,
          이벤트 혜택 등의 경제상 이익을 불·편법적으로 수취하는 행위, 이용약관 등에서 금지하고 있는 행위, 명의도용 등의
          불·편법행위 등을 말합니다. 수집되는 정보는 회사 서비스 이용에 따른 통계∙분석에 이용될 수 있습니다.
        </p>

        <h2 className="headingStyle">제11조(개인정보 수집 방법)</h2>
        <p className="paragraphStyle">회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.</p>
        <ul>
          <li className="listItemStyle">이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식</li>
          <li className="listItemStyle">
            이용자가 고객센터의 상담, 게시판에서의 활동 등 회사의 서비스를 이용하는 과정에서 이용자가 입력하는 방식
          </li>
        </ul>

        <h2 className="headingStyle">제12조(개인정보의 이용)</h2>
        <p className="paragraphStyle">회사는 개인정보를 다음 각 호의 경우에 이용합니다.</p>
        <ul>
          <li className="listItemStyle">이벤트 및 행사 안내 등 마케팅을 위한 경우</li>
          <li className="listItemStyle">인구통계학적 분석, 서비스 방문 및 이용기록의 분석을 위한 경우</li>
          <li className="listItemStyle">개인정보 및 관심에 기반한 이용자간 관계의 형성을 위한 경우</li>
        </ul>

        <h2 className="headingStyle">제13조(개인정보의 보유 및 이용기간)</h2>
        <ul>
          <li className="listItemStyle">
            회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적이 달성을 위한 기간 동안 개인정보를 보유 및
            이용합니다.
          </li>
          <li className="listItemStyle">
            전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 가입 및 이용 방지를 위하여 회원 탈퇴
            시점으로부터 최대 1년간 보관합니다.
          </li>
        </ul>

        <h2 className="headingStyle">제14조(개인정보의 파기원칙)</h2>
        <p className="paragraphStyle">
          회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을
          경우에는 해당 정보를 지체 없이 파기합니다.
        </p>

        <h2 className="headingStyle">제15조(개인정보 정보변경 등)</h2>
        <ul>
          <li className="listItemStyle">
            이용자는 회사에게 전조의 방법을 통해 개인정보의 오류에 대한 정정을 요청할 수 있습니다.
          </li>
          <li className="listItemStyle">
            회사는 전항의 경우에 개인정보의 정정을 완료하기 전까지 개인정보를 이용 또는 제공하지 않으며 잘못된
            개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록
            하겠습니다.
          </li>
        </ul>

        <h2 className="headingStyle">제16조(비밀번호의 암호화)</h2>
        <p className="paragraphStyle">
          이용자의 비밀번호는 일방향 암호화하여 저장 및 관리되고 있으며, 개인정보의 확인, 변경은 비밀번호를 알고 있는
          본인에 의해서만 가능합니다.
        </p>

        <h2 className="headingStyle">제17조(개인정보 유출 등에 대한 조치)</h2>
        <p className="paragraphStyle">
          회사는 개인정보의 분실·도난·유출(이하 "유출 등"이라 한다) 사실을 안 때에는 지체 없이 다음 각 호의 모든 사항을
          해당 이용자에게 알리고 방송통신위원회 또는 한국인터넷진흥원에 신고합니다.
        </p>
        <ul>
          <li className="listItemStyle">유출 등이 된 개인정보 항목 </li>
          <li className="listItemStyle">유출 등이 발생한 시점 </li>
          <li className="listItemStyle"> 이용자가 취할 수 있는 조치</li>
          <li className="listItemStyle">정보통신서비스 제공자 등의 대응 조치 </li>
          <li className="listItemStyle">이용자가 상담 등을 접수할 수 있는 부서 및 연락처 </li>
        </ul>

        <h2 className="headingStyle">제18조(회사의 개인정보 보호 책임자 지정)</h2>
        <ul>
          <li className="listItemStyle">
            회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및
            개인정보 보호 책임자를 지정하고 있습니다.
          </li>
          <li className="listItemStyle">
            회사는 개인정보의 보호를 위해 개인정보보호 전담부서를 운영하고 있으며, 개인정보처리방침의 이행사항 및
            담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 해결하고 바로 잡을 수 있도록 최선을 다하고 있습니다.
          </li>
        </ul>

        <p className="paragraphStyle">부칙 </p>
        <p>제1조 본 방침은 2023.11.01부터 시행됩니다.</p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

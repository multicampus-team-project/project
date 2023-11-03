import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div id="faqWrap">
      <div className="titleBox">
        <h3>FAQ</h3>
        <p>자주 문의하는 질문에 대한 답변을 찾아보세요.</p>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>회원가입의 조건이 있나요?</Accordion.Header>
          <Accordion.Body>
            <p>
              티켓1번가 회원 가입은 만 14세 이상이면 별도의 가입비나 수수료 없이
              무료로 가입할 수 있으며, 가입 후 티켓1번가의 모든 서비스를
              이용하실 수 있습니다.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>회원탈퇴는 어떻게 하나요?</Accordion.Header>
          <Accordion.Body>
            <p>회원탈퇴는 언제든지 요청하실 수 있으며, 요청 즉시 탈퇴됩니다.</p>
            <p>
              탈퇴를 요청하시기 전에 주문 상품의 구매 절차를 완료하셔야 하며,
              철회 또는 취소로 인한 불이익은 회원님이 부담하셔야 함을 유의해
              주시기 바랍니다.
            </p>

            <p>
              전자상거래 등에서의 소비자보호에 관한 법률 제 6조(거래기록의 보전
              등)에 의거, 주문정보는 5년간 데이터로만 보관하며(다른 용도로 절대
              사용불가) 이후 파기됩니다.
            </p>
            {/* <strong>[회원탈퇴 방법] </strong>
            <p>
              ① 회원 직접 탈퇴 방법 - 고객님께서 직접 인터넷으로 통해 회원탈퇴를
              하실려면 티켓1번가 홈페이지 로그인을 하신 후 [마이페이지 `&gt`
              회원탈퇴] 메뉴를 클릭해주세요. 또한 모바일 페이지 [마이페이지 >
              회원탈퇴] 를 통해서도 탈퇴 요청이 가능합니다. 이동한 회원탈퇴
              페이지에서 탈퇴안내 확인 후 탈퇴사유를 선택하시고, 탈퇴 신청을
              클릭하시면 회원탈퇴가 완료됩니다.
            </p>
            <p>
              ② 고객센터를 통한 탈퇴 방법 - 성함, ID, 생년월일, 휴대폰번호 확인
              하여 고객센터(1111 - 1111)로 전화 주시면 담당자가
              처리해드리겠습니다.
            </p> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>예매한 티켓은 어떻게 받나요?</Accordion.Header>
          <Accordion.Body>
            <p>결제하실 때 티켓 수령 방법을 선택 및 확인하실 수 있습니다.</p>
            <p>
              특정 상품은 배송 방식이 지정되어 있어 선택하지 못하실 수 있습니다.
              <br />
              (※티켓은 묶음배송 불가)
            </p>

            <strong>[예매번호 입장] </strong>
            <p>
              ① 예매번호입장(현장수령)은 예매시 부여되는 고유한 ′예매번호′로
              공연 당일 티켓을 수령하거나 입장 하실 수 있습니다.{" "}
            </p>
            <p>② 티켓 수령시 예매번호, 신분증을 지참하셔야 합니다. </p>
            <p>
              ③ 예매 완료 후 예매확인서 또는 예매(입금) 확인 메일을 출력하여
              가시면 편리합니다.
            </p>
            <p>
              ④ 상품 중 [예매번호] 방식으로 예매시 현장에서 티켓을 수령하지
              않고, 예매자 확인 후 바로 이용 가능한 상품도 있습니다.
            </p>
            <p>
              ⑥ 기획사 사정으로 예매번호로 입장되지 않는 공연도 있으니 공연
              안내페이지를 확인해 주십시오.{" "}
            </p>
            <strong>[배송] </strong>
            <p>
              ① 예매완료(결제익일) 기준 2-3일 이내에 배송됩니다. (주말, 공휴일을
              제외한 영업일 기준){" "}
            </p>
            <p>
              ② 배송료는 3,000원이며, 공연일 14일 전 예매분에 한해 배송 신청이
              가능합니다.{" "}
            </p>
            <p>
              ③ 단, 할인 받은 예매건 또는 공연 특성에 따라 배송 신청이 불가능할
              수 있습니다.{" "}
            </p>
            <strong>[현장수령] </strong>
            <p>
              ① 배송이 불가능한 기간에 예매하시면 티켓은 현장수령만 가능합니다.{" "}
            </p>
            <p>
              ② 티켓 현장수령시 예매자 본인이 가지 않으셔도 대리인이 수령하실 수
              있습니다. (주최사의 요청에 따라 티켓의 대리수령이 제한되는 경우도
              있으니, 예매하신 상품페이지의 공지사항을 확인하여 주시기 바랍니다.
              ){" "}
            </p>
            <p>
              ③ 대리인 수령이 가능하며 예매자 성함, 주민번호, 예매번호를 현장
              수령자에게 알려주거나 예매 내역을 프린트하고 예매자분
              주민등록번호를 적어오시면 확인 후 티켓을 받으실 수 있습니다.{" "}
            </p>
            <p>
              ④ 단, 할인율 적용 예매 시에는 할인 증빙으로 인해 대리 수령이
              어려울 수 있사오니 고객센터 [111-1111]로 문의해 주시기 바랍니다.
            </p>
            <strong>[유의 사항] </strong>
            <p>
              ①배송으로 신청하셨는데 공연 3일 전까지 티켓을 수령하지 못하셨거나
              연락을 받지 못하셨다면 상단 메뉴의 [문의하기]나
              고객센터[1111-1111]로 연락주시기 바랍니다.{" "}
            </p>
            <p>
              ② 반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며, 공연
              관람 및 환불도 불가능 하오니 공연 전에 미리 확인해 주시기
              바랍니다.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            티켓 예매 내역 확인은 어디에서 하나요?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              상단 메뉴의 <Link to="/mypage/check">예매확인</Link> 또는{" "}
              <Link to="/mypage">마이페이지</Link>
              <Link to="/mypage/check">예매내역</Link>에서 확인이 가능합니다.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            티켓이 반송됐을 경우 어떻게 해야 하나요?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              예약번호입장(현장수령)으로만 예매되는 공연을 예매하신 경우 티켓
              배송으로 예매하실 수 없어 반송처리될 수 있습니다.{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

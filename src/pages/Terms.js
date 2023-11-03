import React from "react";
import "./Privacy.css";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";

function Terms() {
  return (
    <div>
      <SubHeader />
      <div className="containerStyle">
        <h1 className="headStyle">이용 약관</h1>

        <h2 className="headingStyle">제1조(목적)</h2>
        <ul>
          <li className="listItemStyle">
            본 약관은 티켓1번가가 운영하는 온라인 쇼핑몰에서 제공하는 서비스(이하 '서비스'라 합니다)를 이용함에 있어
            당사자의 권리 의무 및 책임사항을 규정하는 것을 목적으로 합니다. 
          </li>
          <li className="listItemStyle">
            PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 본 약관을 준용합니다.
          </li>
        </ul>

        <h2 className="headingStyle">제2조(정의)</h2>
        <ul>
          <li className="listItemStyle">
            '회사'라 함은, '티켓1번가'가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여
            재화등을 거래할 수 있도록 설정한 가상의 영업장을 운영하는 사업자를 말하며, 아울러  'url'을 통해 제공되는
            전자상거래 관련 서비스의 의미로도 사용합니다.  
          </li>
          <li className="listItemStyle">
            '이용자'라 함은, '사이트'에 접속하여 본 약관에 따라 '회사'가 제공하는 서비스를 받는 회원 및 비회원을
            말합니다. 
          </li>
          <li className="listItemStyle">
            '회원'이라 함은, '회사'에 개인정보를 제공하고 회원으로 등록한 자로서, '회사'의 서비스를 계속하여 이용할 수
            있는 자를 말합니다.
          </li>
          <li className="listItemStyle">
            '비회원'이라 함은, 회원으로 등록하지 않고, '회사'가 제공하는 서비스를 이용하는 자를 말합니다.
          </li>
          <li className="listItemStyle">'상품'이라 함은 '사이트'를 통하여 제공되는 재화 또는 용역을 말합니다. </li>
          <li className="listItemStyle">
            '구매자'라 함은 '회사'가 제공하는 '상품'에 대한 구매서비스의 이용을 청약한 '회원' 및 '비회원'을 말합니다. 
          </li>
        </ul>

        <h2 className="headingStyle">제3조(약관 외 준칙)</h2>
        <p className="paragraphStyle">
          본 약관에서 정하지 아니한 사항은 법령 또는 회사가 정한 서비스의 개별 약관, 운영정책 및 규칙(이하
          '세부지침'이라 합니다)의 규정에 따릅니다. 또한 본 약관과 세부지침이 충돌할 경우에는 세부지침이 우선합니다. 
        </p>

        <h2 className="headingStyle">제4조(약관의 명시 및 개정)</h2>
        <ul>
          <li className="listItemStyle">
            '회사'는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지, 전화번호, 모사전송번호(FAX), 전자우편주소,
            사업자등록번호, 통신판매업신고번호 등을 이용자가 쉽게 알 수 있도록 '회사' 홈페이지의 초기 서비스화면에
            게시합니다. 다만 본 약관의 내용은 '이용자'가 연결화면을 통하여 확인할 수 있도록 할 수 있습니다. 
          </li>
          <li className="listItemStyle">
            '회사'는 '이용자'가 약관에 동의하기에 앞서 약관에 정해진 내용 중 청약철회, 배송책임, 환불조건 등과 같은
            내용을 '이용자'가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 통하여 '이용자'의 확인을 구합니다. 
          </li>
          <li className="listItemStyle">
            '회사'는 '전자상거래 등에서의 소비자보호에 관한 법률', '약관의 규제에 관한 법률','전자거래기본법',
            '정보통신망 이용촉진등에 관한 법률', '소비자보호법' 등 관련법령(이하 '관계법령'이라 합니다)에 위배되지 않는
            범위내에서 본 약관을 개정할 수 있습니다.
          </li>
          <li className="listItemStyle">
            '회사'가 본 약관을 개정하고자 할 경우, 적용일자 및 개정사유를 명시하여 현행약관과 함께 온라인 쇼핑몰의
            초기화면에 그 적용일자 7일전부터 적용일자 전날까지 공지합니다. 다만, '이용자'에게 불리한 내용으로 약관을
            변경하는 경우 최소 30일 이상 유예기간을 두고 공지합니다.
          </li>
          <li className="listItemStyle">
            '회사'가 본 약관을 개정한 경우, 개정약관은 적용일자 이후 체결되는 계약에만 적용되며 적용일자 이전 체결된
            계약에 대해서는 개정 전 약관이 적용됩니다. 다만, 이미 계약을 체결한 '이용자'가 개정약관의 내용을 적용받고자
            하는 뜻을 '회사'에 전달하고 '회사'가 여기에 동의한 경우 개정약관을 적용합니다. 
          </li>
          <li className="listItemStyle">
            본 약관에서 정하지 아니한 사항 및 본 약관의 해석에 관하여는 관계법령 및 건전한 상관례에 따릅니다.
          </li>
        </ul>

        <h2 className="headingStyle">제5조(제공하는 서비스)</h2>
        <ul>
          '회사'는 다음의 서비스를 제공합니다.
          <li className="listItemStyle">구매계약이 체결된 재화 또는 용역의 배송</li>
          <li className="listItemStyle">결제대금 보호서비스, 이용자 문의서비스, 상품 구매평 등 기타 정보 제공</li>
          <li className="listItemStyle">기타 '회사'가 정하는 업무</li>
        </ul>

        <h2 className="headingStyle">제6조(서비스의 중단 등)</h2>
        <ul>
          <li className="listItemStyle">
            '회사'가 제공하는 서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다. 다만 '회사' 시스템의 유지 · 보수를
            위한 점검, 통신장비의 교체 등 특별한 사유가 있는 경우 서비스의 전부 또는 일부에 대하여 일시적인 제공 중단이
            발생할 수 있습니다.
          </li>
          <li className="listItemStyle">
            '회사'는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우,
            전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 발생한 경우 서비스의
            전부 또는 일부를 제한하거나 중지할 수 있습니다.
          </li>
          <li className="listItemStyle">
            '쇼핑몰'은 재화 또는 용역이 품절되거나 상세 내용이 변경되는 경우 장차 체결되는 계약에 따라 제공할 재화나
            용역의 내용을 변경할 수 있습니다. 이 경우 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 즉시
            공지합니다.
          </li>
          <li className="listItemStyle">
            '회사'가 서비스를 정지하거나 이용을 제한하는 경우 그 사유 및 기간, 복구 예정 일시 등을 지체 없이
            '이용자'에게 알립니다.
          </li>
        </ul>

        <h2 className="headingStyle">제7조(회원가입)</h2>
        <ul>
          <li className="listItemStyle">
            '회사'가 정한 양식에 따라 '이용자'가 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써
            회원가입을 신청합니다.
          </li>
          <li className="listItemStyle">
            '회사'는 전항에 따라 회원가입을 신청한 '이용자' 중 다음 각호의 사유가 없는 한 '회원'으로 등록합니다.
            <ol className="listInlistStyle">
              - 가입신청자가 본 약관에 따라 회원자격을 상실한 적이 있는 경우. 다만, '회사'의 재가입 승낙을 얻은 경우에는
              예외로 합니다.
            </ol>
            <ol className="listInlistStyle">- 회원정보에 허위, 기재누락, 오기 등 불완전한 부분이 있는 경우 </ol>
            <ol className="listInlistStyle">
              - 기타 회원으로 등록하는 것이 '회사'의 운영에 현저한 지장을 초래하는 것으로 인정되는 경우
            </ol>
          </li>
          <li className="listItemStyle">
            회원가입 시기는 '회사'의 가입승낙 안내가 '회원'에게 도달한 시점으로 합니다. 
          </li>
        </ul>

        <h2 className="headingStyle">제8조(회원탈퇴 및 자격상실 등)</h2>
        <ul>
          <li className="listItemStyle">
            '회원'은 '회사'에 언제든지 탈퇴를 요청할 수 있으며, '회사'는 지체없이 회원탈퇴 요청을 처리합니다. 다만 이미
            체결된 거래계약을 이행할 필요가 있는 경우에는 본약관이 계속 적용됩니다.
          </li>
          <li className="listItemStyle">
            '쇼핑몰'은 다음 각호의 사유가 발생한 경우 '회사'의 자격을 제한 또는 정지시킬 수 있습니다. 
            <ol className="listInlistStyle">- 회원가입 시 허위정보를 기재한 경우</ol>
            <ol className="listInlistStyle">- 다른 이용자의 정상적인 이용을 방해하는 경우  </ol>
            <ol className="listInlistStyle">- 관계법령 또는 본 약관에서 금지하는 행위를 한 경우 </ol>
            <ol className="listInlistStyle">- 공서양속에 어긋나는 행위를 한 경우 </ol>
            <ol className="listInlistStyle">- 기타 '회원'으로 등록하는 것이 적절하지 않은 것으로 판단되는 경우  </ol>
          </li>
          <li className="listItemStyle">
            '회사'의 서비스를 1년 동안 이용하지 않는 '회원'의 경우 휴면계정으로 전환하고 서비스 이용을 제한할 수
            있습니다.
          </li>
          <li className="listItemStyle">
            휴면계정 전환 시 계정 활성을 위해 필요한 아이디(ID), 비밀번호, 이름, 중복가입 방지를 위한 본인 인증값(DI),
            휴대전화 번호를 제외한 나머지 정보는 별도로 저장 및 관리됩니다. 다만, 관계법령에 의해 보존할 필요가 있는
            경우 '회사'는 정해진 기간 동안 회원정보를 보관합니다.
          </li>
        </ul>

        <p className="paragraphStyle">부칙 </p>
        <p>본 약관은 2023.11.01부터 시행됩니다.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;

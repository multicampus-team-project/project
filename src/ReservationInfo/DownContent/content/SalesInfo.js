import "./SalesInfo.css";

const SalesInfo = (props) => {
  const { performanceData } = props;
  return (
    <div className="SalesInfo">
      <h3>상품 관련 정보</h3>
      <table>
        <tbody>
          <tr>
            <th>공연 이름</th>
            <td>{performanceData.prfnm}</td>
            <th>고객 문의</th>
            <td>1111-1111</td>
          </tr>
          <tr>
            <th>공연 시간</th>
            <td>{performanceData.prfruntime}</td>
            <th>관람 등급</th>
            <td>{performanceData.prfage}</td>
          </tr>
          <tr>
            <th>공연 장소</th>
            <td>{performanceData.fcltynm}</td>
            <th>출연</th>
            <td>{performanceData.prfcast}</td>
          </tr>
          <tr>
            <th>유효기간/이용조건</th>
            <td colSpan={3}>
              {performanceData.prfpdfrom} ~ {performanceData.prfpdto} 예매한 공연 날짜, 회차에 한해 이용가능
            </td>
          </tr>
          <tr>
            <th>취소환불방법</th>
            <td colSpan={3}>
              마이페이지 예매/취소내역에서 직접 취소 또는 고객센터 (1111-1111)를 통해서 예매를 취소할 수 있습니다.
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>예매 유의사항</h3>
      <ul className="ul-style">
        <li className="li-style">
          다른 이용자의 원활한 예매 및 취소에 지장을 초래할 정도로 반복적인 행위를 지속하는 경우 회원의 서비스 이용을
          제한할 수 있습니다.
        </li>
        <li className="li-style">
          일부 상품의 판매 오픈 시 원활한 서비스 제공을 위하여 특정 결제수단 이용이 제한될 수 있습니다.
        </li>
      </ul>
      <br />
      <br />

      <h3>티켓 수령 안내</h3>
      <ul className="ul-style">
        <strong>예약 번호 입장</strong>
        <li className="li-style">공연 당일 현장 교부처에서 예약번호 및 본인 확인 후 티켓을 수령하실 수 있습니다.</li>
        <li className="li-style">상단 예매확인/취소 메뉴에서 예매내역을 프린트하여 가시면 편리합니다.</li>
      </ul>
      <ul className="ul-style">
        <strong>티켓배송</strong>
        <li className="li-style">
          예매완료(결제익일) 기준 4~5일 이내에 배송됩니다. (주말, 공휴일을 제외한 영업일 기준)
        </li>
        <li className="li-style">
          배송 중 전달 불가사항이 발생할 시에는 반송되며, 본인 수령 불가 시 경우에 따라 대리 수령도 가능합니다.
        </li>
        <li className="li-style">
          공연 3일 전까지 티켓을 배송받지 못하신 경우 고객센터(1111-1111)로 연락 주시기 바랍니다.
        </li>
        <li className="li-style">
          반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며, 공연 관람 및 환불이 불가합니다.
        </li>
        <li className="li-style">티켓 배송 (배송상태 : 배송 준비중 이후) 후에는 주소 변경이 불가합니다.</li>
      </ul>
    </div>
  );
};

export default SalesInfo;

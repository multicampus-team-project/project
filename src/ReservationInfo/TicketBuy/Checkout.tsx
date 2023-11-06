import React, { useEffect, useRef, useState } from "react";
import { PaymentWidgetInstance, loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export function CheckoutPage() {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance["renderPaymentMethods"]> | null>(null);

  const location = useLocation();
  const reservationNumber = location.state.reservationNumber;
  const selectedSeat = location.state.selectedSeat;
  const memberId = location.state.memberId;
  const performanceData = location.state.performanceData;
  const performanceName = performanceData.prfnm[0];

  const selectedPrice = location.state.selectedPrice[0];
  const priceWithoutComma = selectedPrice.replace(/,/g, ""); // 쉼표 제거
  const priceAsNumber = parseFloat(priceWithoutComma); // 문자열을 숫자로 변환
  const [price, setPrice] = useState(priceAsNumber);

  const clientKey = "test_ck_Z1aOwX7K8mEblxnoezwA8yQxzvNP";
  const customerKey = reservationNumber;

  useEffect(() => {
    (async () => {
      // ------  결제위젯 초기화 ------
      // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제

      // ------  결제위젯 렌더링 ------
      // 결제 UI를 렌더링할 위치를 지정합니다. `#payment-method`와 같은 CSS 선택자와 결제 금액 객체를 추가하세요.
      // DOM이 생성된 이후에 렌더링 메서드를 호출하세요.
      // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        { value: price },
        // 렌더링하고 싶은 결제 UI의 variantKey
        // 아래 variantKey는 문서용 테스트키와 연동되어 있습니다. 멀티 UI를 직접 만들고 싶다면 계약이 필요해요.
        // https://docs.tosspayments.com/guides/payment-widget/admin#멀티-결제-ui
        { variantKey: "DEFAULT" }
      );

      // ------  이용약관 렌더링 ------
      // 이용약관 UI를 렌더링할 위치를 지정합니다. `#agreement`와 같은 CSS 선택자를 추가하세요.
      // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
      paymentWidget.renderAgreement(
        "#agreement",
        { variantKey: "AGREEMENT" } // 기본 이용약관 렌더링
      );
      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  const handleOrderClick = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
      await paymentWidget?.requestPayment({
        orderId: `${reservationNumber}`,
        orderName: `${performanceName}`,
        successUrl: `http://localhost:3000/success`,
        failUrl: `${window.location.origin}/fail`,
        customerEmail: "customer123@gmail.com",
        customerName: "김토스",
      });
    } catch (error) {
      // 에러 처리하기
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="mt-5 text-center">주문서</h1>
      <div id="payment-widget" />
      <div id="agreement" />
      <div className="text-center">
        <span>{`총 가격 : ${price.toLocaleString()}원`}</span>
        <br />
        <Button onClick={handleOrderClick}>결제하기</Button>
      </div>
    </div>
  );
}

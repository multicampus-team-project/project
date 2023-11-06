import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export function SuccessPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(false);
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/payment`, {
        params: {
          amount: amount,
          orderId: orderId,
          paymentKey: paymentKey,
        },
      })
      .then((response) => {
        // 성공적으로 데이터를 받았을 때 처리
        console.log("결제 성공");
        console.log(response.data.success);
        setData(true);
      })
      .catch((error) => {
        // 에러 처리
        setData(false);
        console.error("결제 실패 에러:", error);
      });
  }, [amount, orderId, paymentKey]); // 빈 배열을 전달하면 컴포넌트가 마운트될 때만 실행됩니다.

  const handlePaymentOK = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/move-reservation`, { orderId })
      .then((response) => {
        if (response.data.success) {
          console.log("예약 성공");
          const copiedData = response.data.copiedData[0];
          navigate("/orderComplete", { state: { copiedData } });
          console.log(copiedData);
        } else {
          console.error("예약 실패");
        }
      })
      .catch((error) => {
        console.error("서버 오류:", error);
      });
  };

  return (
    <div className="text-center">
      <h1 className="mt-5">결제 성공</h1>
      <div>{`결제 금액: ${Number(amount).toLocaleString()}원`}</div>
      <Button onClick={handlePaymentOK}>예매 확인 페이지로</Button>
    </div>
  );
}

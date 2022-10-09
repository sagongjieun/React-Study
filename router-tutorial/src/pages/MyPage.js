import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  // 로그인되지 않았다면 로그인페이지로 리다이렉트
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;

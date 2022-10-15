/**
 * 액션 타입 정의
 * 액션 타입 : 대문자
 * 문자열 내용 : 모듈이름 / 액션이름 -> 중복으로 인한 충돌 방지
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/**
 * 액션 생성 함수
 * export 를 통해 다른 파일에서 이 함수를 사용할 수 있게 함
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/**
 * counter 모듈의 초기 상태
 */
const initialState = { number: 0 };

/**
 * reducer 함수
 */
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

/**
 * 함수 내보내기
 * exoprt에 default가 붙으면? 단 한 개만 내보낼 수 있다는 의미
 */
export default counterReducer;

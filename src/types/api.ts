import axios, { AxiosResponse } from "axios";

/** Axios Response 데이터 형식
 *  config : 요청에 대한 axios 구성 설정
 *  data 서버가 제공한 응답 데이터
 *  headers : 헤더 정보
 *  request : 요청
 *  status : 응답 HTTP 상태 코드
 *  statusText : 응답 HTTP 상태 메시지
 */

// 본인 서버에서 내려주는 응답 구조
export interface APIResponse<T> {
  statusCode: number;
  errorCode: number;
  message: string;
  result: T;
  timestamp: Date;
}

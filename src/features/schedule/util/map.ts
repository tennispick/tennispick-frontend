export const transferMapToArray = <T>(date: Date, map: Map<string, T>) => {
  const month = date.getMonth() + 1;
  const depth1 = Array.from(map.values());
  const depth2 = Array.from(depth1.values());
};

// 날짜를 순회하다 보면 월,일만 있음

// 년도를 알 수 없음

// 하지만 이 날짜를 가져올 때 date를 가지고 있음

// 이 date에서 년, 월을 추출할 수 있음

// example) 2023-12-31일을 기점으로 하면, 12월보다 작은건 없음

// 입력된 month의 월을 map의 key에서 찾기.

// 찾은 key의 인덱스가 0이 아니면, 그 전의 key는 이전년도이기 때문에, -1년을 해주면 됌

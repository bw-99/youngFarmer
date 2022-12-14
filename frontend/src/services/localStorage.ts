// 만료 시간과 함께 데이터를 저장
export function setItemWithExpireTime(keyName:string, keyValue:any, tts:number) {
    window.localStorage.removeItem(keyName);
    // localStorage에 저장할 객체
    const obj = {
      value : keyValue,
      expire : Date.now() + tts
    }
  
    // 객체를 JSON 문자열로 변환
    const objString = JSON.stringify(obj);
    console.log(objString);
  
    // setItem
    window.localStorage.setItem(keyName, objString);
  }


  // 만료 시간을 체크하며 데이터 읽기
export function getItemWithExpireTime(keyName:string) {
    console.log("get item with expire time");
    
    // localStorage 값 읽기 (문자열)
    const objString = window.localStorage.getItem(keyName);
    
    // null 체크
    if(!objString) {
      return null;
    }
    
    // 문자열을 객체로 변환
    const obj = JSON.parse(objString);
    console.log(obj);
    
    
    // 현재 시간과 localStorage의 expire 시간 비교
    if(Date.now() > obj.expire) {
      // 만료시간이 지난 item 삭제
      window.localStorage.removeItem(keyName);
      
      // null 리턴
      return null;
    }
    
    // 만료기간이 남아있는 경우, value 값 리턴
    return obj.value;
  }

  export function removeItem(keyName: string) {
    window.localStorage.removeItem(keyName);
  }



export function setItemWithNoExpireTime(keyName:string, keyValue:any) {
  window.localStorage.removeItem(keyName);
  // localStorage에 저장할 객체
  const obj = {
    value : keyValue,
  }

  // 객체를 JSON 문자열로 변환
  const objString = JSON.stringify(obj);
  console.log(objString);

  // setItem
  window.localStorage.setItem(keyName, objString);
}

  export function getItemWithNoExpireTime(keyName:string) {
    const objString = window.localStorage.getItem(keyName);
    // null 체크
    if(!objString) {
      return null;
    }
    
    // 문자열을 객체로 변환
    const obj = JSON.parse(objString);
    console.log(obj);
    
    return obj.value;
  }
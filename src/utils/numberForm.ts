export const addNumberCommas = (numebr: number) => {
  let returnString = numebr?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return returnString;
};

// 입력한 숫자가 두자리수보다 아래일 때, 입력된 갯수만큼 0을 채워서 반환.
export const numberZeroFillFormat = (str: string | number, fillCount: number): string => {

  let argNumber: number;
  if(typeof(str) === "string")
    argNumber = parseInt(str);
  else
    argNumber = str;

  if(argNumber < 10){
    const argString = argNumber.toString();
    return argString.padStart(fillCount, "0");
  }
  else
    return argNumber.toString();
};
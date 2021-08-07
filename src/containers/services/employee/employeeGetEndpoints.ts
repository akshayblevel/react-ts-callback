import { httpGet } from '../httpRequest';

export function getEmployeeList(successCallBack: any) {
  httpGet('https://607050b585c3f0001746fd55.mockapi.io/crud/employee')
    .then((res: any) => {
      successCallBack(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

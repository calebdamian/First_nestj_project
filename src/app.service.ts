import { Injectable } from '@nestjs/common';

var msg: string = "";

function createDocumentation(msg: string) {
  msg += "To get all users: GET localhost:{{port}}/user/";
  msg += "<br/>To get a singleuser: GET localhost:{{port}}/user/:userId";
  msg += "<br/>To create an user: POST localhost:{{port}}/user/create";
  msg += "<br/>To update an user: PUT localhost:{{port}}/user/update/:userId";
  msg += "<br/>To delete an user: DELETE localhost:{{port}}/user/delete/:userId"
  msg += "<br/><br/><br/> Developed by: Caleb Naranjo"
  return msg;
}

@Injectable()
export class AppService {
  getHello(): string {
    return `${createDocumentation(msg)}`;
  }
}

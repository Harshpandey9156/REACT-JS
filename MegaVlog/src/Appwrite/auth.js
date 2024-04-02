import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.apwriteURL)
      .setProject(config.apwriteProjectID);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
        const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
          );
          if (userAccount) {
            //call another method for the login of the account
            return this.login({email,password});
          } 
          else {
            return userAccount;
          }

    }
     catch (error) {
      throw error;
    }
  }
   async login({email,password}){
       try {
        return  await this.account.createEmailSession(email,password);
        //    if(userAccount){
        //        return userAccount;
        //    }
        //    else{
            //    return userAccount;
        //    }
       } catch (error) {
           throw error;
       }
   }
   async getCurretUser(){
         try {
              return await this.account.get();
         } catch (error) {
              throw error;//here we can use the log statemnt also for show the error if we not wants to to do
         }
    return null ; //here if an error in this try and catch then it will return
   }
   async   logout(){
         try {
              return await this.account.deleteSessions("current");
         } catch (error) {
              throw error;
         }
    }
}

const authService = new AuthService();
// AuthService.client = new Client();

export default authService;

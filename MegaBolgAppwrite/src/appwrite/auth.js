import conf from "../conf/conf";

import { Account, Client, ID } from "appwrite";

export class AuthService {
    client = new Client ();
    account;

    constructor (){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);

            this.account = new Account (this.client)
    }

    async createAccount({email,password,name}){
        try {
              const userAccount = await this.account.create(ID.unique(),email,name)
              if(userAccount){
                return this.login({email,password})
              }else {
                return userAccount
              }
        }catch (error){
            throw error
        }
    }
    async login({email,password}){
        try {
return await this.account.createEmailSession(email,password);
        }catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error){
            throw error
        }

        return null;
    }
}

const authService = new AuthService(
   
)

export default AuthService
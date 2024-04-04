import config from "../config/config.js";
import { Client, Databases, ID,Storage,Query } from "appwrite";

export class Service{
    client =new Client();
    databases;
    bucket;
    constructor(){
        this.client
      .setEndpoint(config.apwriteURL)
      .setProject(config.apwriteProjectID);
      this.databases =new Databases(this.client);
      this.bucket=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage, status,userId}){
        try {
            return await this.databases.createDocument(
                config.apwriteDatabaseID,
                config.apwriteCollectionID,
                slug,  //or we can take the value the unidive values in this-> id.unique()
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId


                }
                
                )
            
        } catch (error) {
            console.log("Appright Servises:: createPost " ,error);
            
        }

    }
    async updatePost(slug,  {title,content,featuredImage, status,userId}){
        try {
            return await  this.databases.updateDocument(
                config.apwriteDatabaseID,
                config.apwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            
        }

    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.apwriteDatabaseID,
                config.apwriteCollectionID,
                slug
            

            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    async
}


const service=new Service();
export default service;

 
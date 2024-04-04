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
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.apwriteDatabaseID,
                config.apwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appright Services::getPost",error);
            
        }
    }
    async getPosts(queries=[Query.equals("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.apwriteDatabaseID,
                config.apwriteCollectionID,
                queries,

            )
        } catch (error) {
            console.log("Appright Services:: getPosts",error);
            return false;
            
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.apwriteBucketID,
                ID.unique(),
                file
                )
        } catch (error) {
            console.log("Appright Services:: uploadFile",error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                config.apwriteBucketID,
                fileId
            )
            
        } catch (error) {
            console.log("Appright Services:: deleteFile",error);
        }
    }
    // for the review of the file we can us e the asyc and without aysn we can use this also. this is more faster service

    getfilePreview(fileId){
        return this.bucket.getFilePreview(
            config.apwriteBucketID,
            fileId
        )
    }
}


const service=new Service();
export default service;

 
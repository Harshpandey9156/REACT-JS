const config={
    apwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    apwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTIONS_ID),
    
    apwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    apwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASES_ID),


}

export default config;
import React, { useState, useEffect } from 'react'
import  {projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file) => {
    
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
        }, (err) =>{
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();  
            collectionRef.add({ url: url, createdAt })
            setUrl(url);
        })
    },[file])
    
    return {progress, url, error };
}
 
export default useStorage;
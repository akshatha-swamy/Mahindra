export const imageObject=(keys,images)=>{
        let imgbit={}
        images.keys().map((image,ind) => imgbit[keys[ind]]=images(image));
        return(imgbit)
    }
// helpers/getImageUrls.js

import fs from 'fs';
import path from 'path';

export const getImageUrls = (id: string) => {
    const imageDir = path.join(process.cwd(), 'public', 'app-images', id);
    var imageNames: string[];
    try{
        imageNames = fs.readdirSync(imageDir);
    }
    catch(err){
        return [];
    }

    imageNames.forEach((name, index) => {
        if(name.substring(0, name.indexOf('-')) == 'exclude'){
            imageNames.splice(index, 1);
        }
    });
    const imageUrls = imageNames.map(name =>
        {
            return(
                {
                    original: `/app-images/${id}/${name}`,
                    thumbnail: `/app-images/${id}/${name}`
                }

            )
        }
    );
    return imageUrls;
};
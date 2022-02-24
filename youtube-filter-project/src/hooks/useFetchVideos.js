import { useEffect, useState } from "react";

import { getVideos } from "../helpers/getVideos";

export const useFetchVideos = () => {
  
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
      getVideos()
        .then(videos => {
                
            setState({
                data: videos,
                loading:false
            });
                
        })
    }, []);
    

    return state;
};

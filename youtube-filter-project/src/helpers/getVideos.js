export const getVideos = async () => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=UUMnrUZpEUB9HGPT--ZcSCDA&key=AIzaSyBAgtIqXqXy_aV8sMn86TmnOBxwlCaiFGM`;
    const resp = await fetch(url);
    const {items} = await resp.json()

    const videos = items.map( video =>{
        return {
            id: video.contentDetails.videoId,
            title: video.snippet.title,
            url: video.snippet.thumbnails.medium.url
        }
    });

    return videos;
}
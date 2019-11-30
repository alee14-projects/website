

let channelID = 'UCNRn4YDPCCWSEl3CT7eWorA';
let apiKey = "nope"; // Note to self: Rewrite the authentication part
let vidHeight = 400;
let vidWidth = 500;
let vidMaxResult = 5;

$(document).ready(function () {
    $.get("https://www.googleapis.com/youtube/v3/channels", {
            part: 'contentDetails',
            id: channelID,
            key: apiKey //Browser API Key
        },
        function (data) {
            $.each(data.items, function (i, item) {
                console.log(item); // See in Browser Console
                pid = item.contentDetails.relatedPlaylists.uploads;
                getVideos(pid);
            })
        }
    );
    function getVideos(pid)
    {
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
                part: 'snippet',
                maxResults: vidMaxResult,
                playlistId: pid,
                key: apiKey //Browser API Key
            },
            function (data) {
                let outputVideo;
                $.each(data.items, function (i, item) {
                    console.log(item); // See in Browser Console
                    vidId = item.snippet.resourceId.videoId;
                    outputVideo = '<li class="yt-vid-list"><iframe height="' + vidHeight + '" width="' + vidWidth + '" src=\"//www.youtube.com/embed/' + vidId + '"> </iframe></li>';

                    //Append to result list
                    $('#yt-results').append(outputVideo);
                })
            }
        );
    }
});
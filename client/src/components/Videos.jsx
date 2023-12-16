import React, { Fragment } from 'react'
import Header from './Header';

function Videos() {
    const videoDetails = [
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" },
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" },
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" },
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" },
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" },
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" },
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" },
        { url: "https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC", title: "Wild Animals Life" }
    ];

    videoDetails.map((aVideo, index) => {
        console.log(aVideo.url, aVideo.title, index);
    })

    return (
        <Fragment>
            <Header />
            <section className="page video_page">
                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>

                <div className="video">
                    <div className="video_content">
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RHVsxHSVjT8?si=qLSJIzgbosUjuJCC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <h1 className="video_title">Title</h1>
                </div>
            </section>
        </Fragment>
    )
}

export default Videos
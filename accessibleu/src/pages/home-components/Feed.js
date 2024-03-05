import "./Feed.css";
import Post from "../database/Post";

import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';

function Feed() {
    return (
        <div className="feed-container">
            <div className="contents-container space-y-10">
                

                <div className="border boder-1 border-black">
                    <div className="border border-1 border-black">a/community</div>
                        <div className="border border-1 border-black">
                            <h2>Title</h2>
                        </div>
                        <div className="border border-1 border-black text-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="border border-1 border-black">
                            <Player aspectRatio="16:9" fluid="true">
                                <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                                <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
                                <ControlBar className="flex flex-row">
                                    <ReplayControl seconds={10} order={1.1} />
                                    <ForwardControl seconds={30} order={1.2} />
                                    <CurrentTimeDisplay order={4.1} />
                                    <TimeDivider order={4.2} />
                                    <PlaybackRateMenuButton rates={[2, 1, 0.5]} order={7.1} />
                                </ControlBar>
                            </Player>
                        </div>
                        <div className=" flex border border-1 border-black">
                            <div className="border border-1 border-black">Likes</div>
                            <div className="border border-1 border-black">Comments</div>
                            <div className="border border-1 border-black">Share</div>
                        </div>
                    </div>
                    <div className="border boder-1 border-black">
                </div>

            </div>
        </div>
    );
}


export default Feed;
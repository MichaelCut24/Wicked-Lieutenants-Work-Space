import "./Feed.css";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
    const [likesCount, setLikesCount] = useState(
        parseInt(localStorage.getItem('likesCount')) || 0
      );
      const incrementLikes = () => {
        const newLikesCount = likesCount + 1;
        setLikesCount(newLikesCount);
        localStorage.setItem('likesCount', newLikesCount);
      };
      useEffect(() => {
        localStorage.setItem('likesCount', likesCount);
      }, [likesCount]);
      /*like button 1*/

      const [likesCountt, setLikesCountt] = useState(
        parseInt(localStorage.getItem('likesCountt')) || 0
      );
      const incrementLikess = () => {
        const newLikesCountt = likesCountt + 1;
        setLikesCountt(newLikesCountt);
        localStorage.setItem('likesCountt', newLikesCountt);
      };
      useEffect(() => {
        localStorage.setItem('likesCountt', likesCountt);
      }, [likesCountt]);
      /* like button 2*/

      const [likesCounttt, setLikesCounttt] = useState(
        parseInt(localStorage.getItem('likesCounttt')) || 0
      );
      const incrementLikesss = () => {
        const newLikesCounttt = likesCounttt + 1;
        setLikesCounttt(newLikesCounttt);
        localStorage.setItem('likesCounttt', newLikesCounttt);
      };
      useEffect(() => {
        localStorage.setItem('likesCounttt', likesCounttt);
      }, [likesCounttt]);
      /*like button 3*/

      const [likesCountttt, setLikesCountttt] = useState(
        parseInt(localStorage.getItem('likesCountttt')) || 0
      );
      const incrementLikessss = () => {
        const newLikesCountttt = likesCountttt + 1;
        setLikesCountttt(newLikesCountttt);
        localStorage.setItem('likesCountttt', newLikesCountttt);
      };
      useEffect(() => {
        localStorage.setItem('likesCountttt', likesCountttt);
      }, [likesCountttt]);
      /*like button 4*/

    return (
        <div className="feed-container">   

            <div className="contents-container space-y-10">
                <div className="border border-1 border-black"> 
                    <div className="border border-1 border-black">a/community</div>
                    <div className="border border-1 border-black">
                        <h2>Title</h2>
                    </div>
                    <div className="border border-1 border-black">
                        <p> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="flex border border-1 border-black">
                    <button class="likeButton" onClick={() => setLikesCount(likesCount + 1)}><FontAwesomeIcon icon={faHeart}/></button>
                    <h4 class="totalLikes">{likesCount}</h4>
                    </div>
                </div>

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
                        <button class="likeButtonn" onClick={() => setLikesCountt(likesCountt + 1)}>
                    <FontAwesomeIcon icon={faHeart} /></button>
                    <h4 class="totalLikess">{likesCountt}</h4>
                        </div>
                        </div>
                        <div className="border boder-1 border-black">
                </div>

                <div className="border boder-1 border-black">
                    <div className="border border-1 border-black">a/community</div>
                        <div className="border border-1 border-black">
                            <h2>Title</h2>
                        </div>
                        <div className="border border-1 border-black text-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="flex border border-1 border-black">
                        <button class="likeButtonnn" onClick={() => setLikesCounttt(likesCounttt + 1)}><FontAwesomeIcon icon={faHeart} /></button>
                    <h4 class="totalLikesss">{likesCounttt}</h4>     
                        </div>
                    </div>
                    <div className="border boder-1 border-black">
                </div>

                <div className="border boder-1 border-black">
                    <div className="border border-1 border-black">a/community</div>
                        <div className="border border-1 border-black">
                            <h2>Title</h2>
                        </div>
                        <div className="border border-1 border-black text-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="flex border border-1 border-black">
                        <button class="likeButtonnnn" onClick={() => setLikesCountttt(likesCountttt + 1)}><FontAwesomeIcon icon={faHeart} /></button>
                        <h4 class="totalLikessss">{likesCountttt}</h4>   
                        </div>
                    </div>
                    <div className="border boder-1 border-black">
                </div>
            </div>
        </div>
    );
}


export default Feed;
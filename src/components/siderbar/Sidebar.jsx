import React from 'react'
import { assets } from "../../assets/assets"
import "./Sidbar.css"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <img src={assets
                    .menu_icon
                } alt=""  className="menu"/>
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    <p>
                        New Chat
                    </p>
                </div>
                <div className="recent">
                    <div className="recent-title">
                        <p>Recent</p>

                    </div>
                    <div className="recent-chat">
                        <img src={assets.message_icon} alt="" />
                        <p>
                            How to push code in...
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="help">
                    <img src={assets.question_icon} alt="" />
                    <p>Help</p>
                </div>
                <div className="activity">
                    <img src={assets.history_icon} alt="" />
                    <p>Activity</p>
                </div>
            </div>
        </div>
    )
}

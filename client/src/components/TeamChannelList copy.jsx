import React from "react";
import { AddChannel } from "../assets";

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list-message">
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null;
  }
  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list-message loading">
          {type === "team" ? "Channels" : "Messages"} loading...
        </p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        {/* Button - add Channel */}
      </div>
    </div>
  );
};

export default TeamChannelList;

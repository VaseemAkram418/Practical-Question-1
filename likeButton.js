import React from "react";

function LikeButton() {

  const handleLike = () => {
    alert("You liked this!");
    console.log("Like button clicked");
  };

  return (
    <div>
      <button onClick={handleLike}>
        👍 Like
      </button>
    </div>
  );
}

export default LikeButton;
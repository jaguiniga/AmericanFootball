import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://i.pinimg.com/originals/de/9a/cd/de9acdaa718f4e66e7271db7f5fad5fc.gif"
                profileSrc="https://oyster.ignimgs.com/mediawiki/apis.ign.com/mortal-kombat-2/9/9c/Raiden-Mortal-Kombat-2-Bio.jpg?width=1280"
                title="Johart"
            />
            <Story 
                image="https://media0.giphy.com/media/ggFGAtIaickGGdmwX4/giphy-downsized-large.gif"
                profileSrc="https://cdn.shopify.com/s/files/1/0152/7713/products/football_fire_web_2_grande.jpg?v=1349364392"
                title="Poul"
            />
            <Story 
                image="https://i.pinimg.com/originals/ce/0b/a7/ce0ba7a13352c324d88a14de8444a939.gif"
                profileSrc="https://cdn.shopify.com/s/files/1/0152/7713/products/football_fire_web_2_grande.jpg?v=1349364392"
                title="Sherrod"
            />
        </div>
    );
}

export default StoryReel;
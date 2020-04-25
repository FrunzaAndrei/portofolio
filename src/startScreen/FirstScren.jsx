import React from "react";
import avatarImg from "../store/profilePhoto.png";
import { TiMediaPlay } from "react-icons/ti";
import { TiMediaPlayReverse } from "react-icons/ti";
import { TiMediaFastForward } from "react-icons/ti";

export default function FirstScren(props) {
  const handleDisplayContent = () => {
    console.log(props);
    props.history.push("/cv");
  };

  return (
    <div className="startBackground">
      <div className="startScreen">
        <img src={avatarImg} alt="img" />
        <ul>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quibusdam esse molestiae quos doloremque iure quia porro facilis hic corporis, voluptate in adipisci assumenda iusto minima consectetur maiores iste amet.</p>
            {/* <TiMediaPlay /> <span> My Protofolio </span> <TiMediaPlayReverse /> */}
          </li>
          <li>
            <TiMediaPlay />
            <button onClick={handleDisplayContent}>
              Continue
              {/* <span>
                <TiMediaFastForward />
              </span> */}
            </button>
            <TiMediaPlayReverse />
          </li>
        </ul>
      </div>
    </div>
  );
}

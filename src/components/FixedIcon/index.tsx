import React, { useState } from "react";
import { faceImages } from "../FaceImages/FaceImages";
import Button from "@mui/material/Button";
import "./FixedIcon.scss";
import Textarea from "@mui/joy/Textarea";

type mood = "Happy" | "Sad" | "Neutral";

const FixedIcon = () => {
  const [faceMood, setFaceMood] = useState<mood>("Neutral");
  const [open, setOpen] = useState<boolean>(false);
  const handleDefaultMood = (mood: mood) => {
    !open && setFaceMood(mood);
  };
  const [msg, setMsg] = useState();
  const onChangeMsg = (event: any) => {
    event.preventDefault();
    // debugger;
    setMsg(event.target.value);
  };
  const [personalInfo, setPersonalInfo] = useState();
  const onPersonalInfo = (event: any) => {
    event.preventDefault();
    setPersonalInfo(event.target.value);
  };

  return (
    <div className="fixed">
      <div className="fixed-image">
        <img
          id="neutral"
          src={faceImages.find((face) => face.alt === faceMood)?.src}
          alt="neutral"
        />
      </div>
      <div className="fixed-vote">
        <div className="question">
          <p>Do you want to share your opinions about the page?</p>
        </div>
        <div className="buttons">
          <Button
            id="btn-yes"
            variant="contained"
            onMouseEnter={() => setFaceMood("Happy")}
            onMouseLeave={() => handleDefaultMood("Neutral")}
            onClick={() => setOpen(true)}
          >
            YES
          </Button>
          <Button
            id="btn-no"
            variant="contained"
            onMouseEnter={() => handleDefaultMood("Sad")}
            onMouseLeave={() => handleDefaultMood("Neutral")}
            onClick={() => {
              setFaceMood("Sad");
              setOpen(false);
            }}
          >
            NO
          </Button>
        </div>
      </div>
      {open && (
        <div className="mail">
          <div>
            <label id="name"> Name: </label>
            <Textarea
              id="name"
              placeholder="Your name..."
              color="warning"
              minRows={1}
              onChange={onPersonalInfo}
            />
          </div>
          <div>
            <label id="msg"> Message: </label>
            <Textarea
              id="msg"
              placeholder="Your message..."
              color="warning"
              minRows={2}
              onChange={onChangeMsg}
            />
          </div>

          <div>
            <Button
              id="btn-send"
              variant="contained"
              onClick={() => setOpen(false)}
            >
              <a
                href={`mailto:ezgi.ozdemir@adesso.com.tr?subject=Ideas About the Harry Potter Page&body=Hi! I am ${personalInfo}, ${msg}`}
              >
                Submit
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FixedIcon;

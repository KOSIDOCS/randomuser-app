import React from "react";
import styled, { keyframes } from "styled-components";
import MaleImg from "../image/undraw_male_avatar_323b.svg";
import FemaleImg from "../image/undraw_female_avatar_w3jk.svg";
import { MapPin } from "react-feather";
import { darken, saturate, transparentize, rgba } from "polished";

const User = ({ dob, gender, name, location, email, picture }) => {
  return (
    <Card>
      <CardName>
        {name.title} {name.first} {name.last}
      </CardName>
      <CardSex sex={gender}>
        {" "}
        <BeepSvg sex={gender} /> {gender}
      </CardSex>
      <CardAge>
        {" "}
        <AgeIcon />{" "}
        <span>
          {location.city}, {location.state}
        </span>{" "}
      </CardAge>
      <CardImage className="svg" sex={gender} alt={name.title}></CardImage>
      <CardRealImg
        className="real"
        img={picture.medium}
        alt={name.title}
        sex={gender}
      ></CardRealImg>
    </Card>
  );
};

const fadeout = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Card = styled.div`
  background: ${darken(0.3, "#010202")};
  padding: 20px 10px 0px 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin: 40px;
  border-radius: 8px;
  justify-content: space-between;
  position: relative;

  &:hover {
    & > .svg {
      display: none;
      animation: ${fadeout} 4s;
    }
    & > .real {
      display: block;
    }
  }
`;

const CardName = styled.div`
  color: ${darken(0.3, "#999384")};
  font-weight: 900;
  margin-left: 4px;
`;

const AgeIcon = styled(MapPin).attrs((props) => ({
  size: props.size || "1.8em",
  color: props.color || darken(0.3, "#999384"),
}))`
  margin-left: 4px;
`;

const CardSex = styled.div`
  position: relative;
  color: ${(props) =>
    props.sex === "male" ? saturate(0.3, "#CA4E35") : saturate(0.3, "#2C5490")};
  background: ${(props) =>
    props.sex === "male"
      ? transparentize(0.8, "#CA4E35")
      : transparentize(0.8, "#2C5490")};
  border-radius: 20px;
  padding: 12px;
  font-weight: 900;
  font-size: 0.9em;
  margin-right: 75px;
  padding-left: 60px;
`;

const CardAge = styled.div`
  font-weight: 400;
  color: ${darken(0.3, "#999384")};
  position: relative;

  & > span {
    position: absolute;
    top: 5px;
    left: 40px;
  }
`;

const CardImage = styled.img.attrs((props) => ({
  src: props.sex === "male" ? MaleImg : FemaleImg,
  alt: props.alt,
}))`
  position: relative;
  left: 68px;
`;

const fadein = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const CardRealImg = styled.img.attrs((props) => ({
  src: props.img,
}))`
  height: 150px;
  width: 150px;
  position: relative;
  left: 130px;
  display: none;
  border-radius: 50%;
  border-width: 20px;
  border-color: ${(props) =>
    props.sex === "male" ? rgba(202, 78, 53, 0.4) : rgba(44, 84, 144, 0.4)};
  border-style: groove;
  animation: ${fadein} 2s;
`;

const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 ${(props) =>
      props.sex === "male" ? rgba(202, 78, 53, 0.4) : rgba(44, 84, 144, 0.4)};
    box-shadow: 0 0 0 0 ${(props) =>
      props.sex === "male" ? rgba(202, 78, 53, 0.4) : rgba(44, 84, 144, 0.4)};
  }
  70% {
      -moz-box-shadow: 0 0 0 10px ${rgba(202, 78, 53, 0.0)};
      box-shadow: 0 0 0 10px ${rgba(202, 78, 53, 0.0)};
  }
  100% {
      -moz-box-shadow: 0 0 0 0 ${rgba(202, 78, 53, 0.0)};
      box-shadow: 0 0 0 0 ${rgba(202, 78, 53, 0.0)};
  }
`;

const BeepSvg = styled.span`
  margin: 0px 0px 0px 0px;
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${(props) =>
    props.sex === "male" ? saturate(0.0, "#CA4E35") : saturate(0.3, "#2C5490")};
  cursor: pointer;
  box-shadow: 0 0 0
    ${(props) =>
      props.sex === "male" ? rgba(202, 78, 53, 0.4) : rgba(44, 84, 144, 0.4)};
  animation: ${pulse} 1s infinite;
  position: absolute;
  top: 11px;
  left: 30px;

  &:hover {
    animation: none;
  }
`;

export default User;

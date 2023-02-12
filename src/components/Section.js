import React from "react";
import styled from "styled-components";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Itemtext>
        <h1>{props.title}</h1>
        <p> {props.description} </p>
      </Itemtext>
      <Buttons>
        <ButtonGroup>
          <LeftButton> {props.leftBtnText}</LeftButton>
          {props.rightBtnText && (
            <RightButton>{props.rightBtnText}</RightButton>
          )}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(/images/${props.bgImage})`};
  /* background-image: url("/images/model-s.jpg"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 100px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

export default Section;

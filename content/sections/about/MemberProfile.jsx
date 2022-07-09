import React from "react";
import styled from "@emotion/styled";
import IF from "../../images/BE_IF.png";
import RACOON from "../../images/BE_RACOON.png";
import REX from "../../images/BE_REX.png";
import YUKONG from "../../images/BE_YUKONG.png";
import HARI from "../../images/FE_HARI.png";
import USAGE from "../../images/FE_USAGE.png";

const memberData = [
  { name: "이프", position: "백엔드", imgsrc: IF },
  { name: "라쿤", position: "백엔드", imgsrc: RACOON },
  { name: "렉스", position: "백엔드", imgsrc: REX },
  { name: "유콩", position: "백엔드", imgsrc: YUKONG },
  { name: "하리", position: "프론트엔드", imgsrc: HARI },
  { name: "유세지", position: "프론트엔드", imgsrc: USAGE },
];

export function MemberProfile() {
  return (
    <MemberContainer>
      {memberData.map((member) => (
        <MemberWrapper key={member.name}>
          <Photo src={member.imgsrc} />
          <Name>{member.name}</Name>
          <Position>{member.position}</Position>
        </MemberWrapper>
      ))}
    </MemberContainer>
  );
}

const MemberContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`;

const MemberWrapper = styled.div``;

const Photo = styled.img`
  width: 300px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0;
`;

const Position = styled.p`
  margin: 0;
`;

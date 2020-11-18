import React from 'react';
import styled from 'styled-components';

interface SocialProps {
  src: string;
  to: string;
}
const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  flex: 20%;
  padding: 14px;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
`;

const SocialMedia: React.FC<SocialProps> = ({ src, to }) => {
  return (
    <Wrapper>
      <a href={to}>
        <Img src={src} />
      </a>
    </Wrapper>
  );
};

export default SocialMedia;

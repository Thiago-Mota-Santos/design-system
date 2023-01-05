import styled from "styled-components";



export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #181a1b;
  border: 1px solid #3b4042;

  > header {
    display: flex;
    font-weight: 500;
    align-items: flex-start;
    flex-direction: column;

    > p {
      margin: 0 14px 9px 15px;
      font-size: 14px;
      color: #a8a095;
      letter-spacing: 0.1px;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  line-height: 1em;
  padding: 30px 30px 12px 16px;
  font-size: 18px;
  font-weight: 500;
  color: #c3beb6;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ImagePreview = styled.img`
  min-width: 100%;
  max-width: 100%;
  height: auto;
`;

export const ReadMore = styled.a`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin: 0 0 13px 14px;
  color: #ad60e9;
`;

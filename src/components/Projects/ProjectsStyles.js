import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
padding: 2.2rem;
place-items: center;
column-gap: 1.5rem;
row-gap: 2.2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 320px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #F0A93B;
  padding: .4rem 0;
  font-size: ${(props) => props.title ? '1.9rem' : '1.4rem'};
`;

export const Hr = styled.hr`
  width: 40px;
  height: 2px;
  margin: 16px auto;
  border: 0;
  background: #F0A93B;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 32px;
  color: #E6DCC9;
  font-size: 1.1rem;
  line-height: 19px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem

}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1.8rem 0;
`;

export const ExternalLinks = styled.a`
color:#F6EFE4;
font-size: 1.1rem;
padding:.7rem 1.1rem;
background: #4A2A1F;
border-radius: 12px;
transition: 0.5s;
&:hover{
  background: #D65F42;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 1.3rem;
`
export const Tag = styled.li`
color: #A6957D;
font-size: 1.05rem;
`
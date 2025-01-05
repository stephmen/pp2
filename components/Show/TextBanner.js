import styled from "styled-components";

const TextBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Keep all text aligned to the left */
  text-align: left;
  font-family: Arial, sans-serif;
  padding: 2rem;
`;

const TitleSmall = styled.div`
  font-size: 2.6rem; /* Increased size for "prochains" */
  font-weight: 600;
  text-transform: lowercase;
  /* margin-bottom: 0.1rem; */
  line-height: 1;
  margin-left: 6rem; /* Added left margin for slight indentation */
`;

const TitleLarge = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  margin-bottom: -0.5rem; Reduced spacing between "SPECTACLES" and subtitle
  letter-spacing: 0.05em;
    margin-left: 6rem; /* Added left margin for slight indentation */

`;

const Subtitle = styled.div`
  font-size: 2.3rem; /* Increased size for the subtitle */
  font-weight: bold; /* Made it bold */
  text-transform: lowercase;
  letter-spacing: 0.07em;
  color: black; /* Kept subtitle in black */
`;
const Subtitle2 = styled.div`
  font-size: 2rem; /* Increased size for the subtitle */
  font-weight: bold; /* Made it bold */
  text-transform: lowercase;
  letter-spacing: 0.07em;
  margin-top: 2rem;
  color: white; /* Kept subtitle in black */
`;

const TextBanner = () => {
  return (
    <TextBannerWrapper>
      <TitleSmall>prochains</TitleSmall>
      <TitleLarge>SPECTACLES</TitleLarge>
      <Subtitle>près de chez vous... ou presque :</Subtitle>
      <Subtitle2>Merci à tous ceux qui passé nous voir en 2024</Subtitle2>
    </TextBannerWrapper>
  );
};

export default TextBanner;

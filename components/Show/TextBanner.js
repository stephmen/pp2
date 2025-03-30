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
  font-size: 5vw; /* Use viewport width to make text resize proportionally */
  font-weight: 600;
  text-transform: lowercase;
  line-height: 1;
  margin-left: 6rem; /* Added left margin for slight indentation */

  @media (max-width: 768px) {
    font-size: 8vw; /* Adjust font size for smaller screens */
    margin-left: 2rem; /* Adjust margin for smaller screens */
  }
`;

const TitleLarge = styled.div`
  font-size: 7vw;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  margin-bottom: -0.5rem;
  letter-spacing: 0.05em;
  margin-left: 6rem; /* Added left margin for slight indentation */

  @media (max-width: 768px) {
    font-size: 10vw; /* Adjust font size for smaller screens */
    margin-left: 2rem; /* Adjust margin for smaller screens */
  }
`;

const Subtitle = styled.div`
  font-size: 4vw;
  font-weight: bold;
  /* text-transform: lowercase; */
  letter-spacing: 0.07em;
  color: black;

  @media (max-width: 768px) {
    font-size: 4.3vw; /* Adjust font size for smaller screens */
  }
`;

const Subtitle2 = styled.div`
  font-size: 4vw;
  font-weight: bold;
  /* text-transform: lowercase; */
  letter-spacing: 0.07em;
  margin-top: 2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 5vw; /* Adjust font size for smaller screens */
  }
`;

const TextBanner = () => {
  return (
    <TextBannerWrapper>
      {/* <TitleSmall>prochains</TitleSmall>
      <TitleLarge>SPECTACLES</TitleLarge> */}
      {/* <Subtitle>près de chez vous... ou presque :</Subtitle>
      <Subtitle2>Merci à tous ceux qui sont passé nous voir en 2024</Subtitle2> */}
      <Subtitle>Une belle nouvelle!</Subtitle>
      <Subtitle2>C&apos;est extraordinaire, la fanfare Pourpour est finaliste au 39e Grand prix du Conseil des arts de Montréal!
      En votant en grand nombre pour la fanfare Pourpour au lien suivant, vous nous offrez la chance de remporter le Grand prix et le prix du public :</Subtitle2>
    </TextBannerWrapper>
  );
};

export default TextBanner;

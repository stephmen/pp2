import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import sanityClient from '../client';
import groq from 'groq';
import BlockContent from '@sanity/block-content-to-react';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';

/* ─────────────────────────────────────────
   COLOUR TOKENS
───────────────────────────────────────── */
const BG     = '#07040c';
const BG_ALT = '#0f0b18';
const ACCENT = '#c8213b';
const TEXT   = '#f0ebe2';
const MUTED  = '#888888';
const BORDER = 'rgba(255,255,255,0.07)';

/* ─────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────── */
const GlobalStyle = createGlobalStyle`
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: ${BG};
    color: ${TEXT};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }
  iframe { border: none; }
`;

/* ─────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
`;

/* ─────────────────────────────────────────
   LAYOUT
───────────────────────────────────────── */
const PageWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
const NavBar = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1.2rem, 4vw, 3rem);
  height: 60px;
  transition: background 0.4s, backdrop-filter 0.4s, border-color 0.4s;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(7,4,12,0.92)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(12px)' : 'none'};
  border-bottom: 1px solid ${({ $scrolled }) => $scrolled ? BORDER : 'transparent'};
`;
const NavLogo = styled.a`
  cursor: pointer;
  img { height: 32px; width: auto; display: block; }
`;
const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) { display: none; }
  a {
    font-family: 'Oswald', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${MUTED};
    transition: color 0.2s;
    &:hover { color: ${TEXT}; }
  }
`;
const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 200;
  @media (max-width: 768px) { display: flex; flex-direction: column; gap: 5px; }
  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${TEXT};
    transition: transform 0.3s, opacity 0.3s;
    &:nth-child(1) { transform: ${({ $open }) => $open ? 'translateY(7px) rotate(45deg)' : 'none'}; }
    &:nth-child(2) { opacity: ${({ $open }) => $open ? 0 : 1}; }
    &:nth-child(3) { transform: ${({ $open }) => $open ? 'translateY(-7px) rotate(-45deg)' : 'none'}; }
  }
`;
const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 150;
  background: rgba(7,4,12,0.97);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  transform: ${({ $open }) => $open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.4s cubic-bezier(0.77,0,0.175,1);
  a {
    font-family: 'Oswald', sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${TEXT};
    transition: color 0.2s;
    &:hover { color: ${ACCENT}; }
  }
`;

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
const HeroSection = styled.section`
  position: relative;
  height: 100svh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(7,4,12,0.3) 0%,
      rgba(7,4,12,0.5) 55%,
      rgba(7,4,12,0.97) 100%
    );
  }
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  animation: ${fadeUp} 1.2s ease both;
`;
const HeroLogo = styled.img`
  width: min(500px, 78vw);
  height: auto;
`;
const HeroTagline = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: clamp(0.75rem, 2.5vw, 1rem);
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: ${MUTED};
`;
const HeroCTA = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.85rem 2.5rem;
  border: 1px solid ${ACCENT};
  color: ${TEXT};
  font-family: 'Oswald', sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  transition: background 0.25s, color 0.25s;
  cursor: pointer;
  &:hover { background: ${ACCENT}; }
`;
const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  span {
    font-family: 'Oswald', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: ${MUTED};
  }
  svg {
    animation: ${scrollBounce} 1.8s ease-in-out infinite;
    color: ${MUTED};
  }
`;

/* ─────────────────────────────────────────
   SECTION SCAFFOLDING
───────────────────────────────────────── */
const SectionFull = styled.section`
  padding: clamp(5rem, 10vw, 9rem) 0;
  background: ${({ $alt }) => $alt ? BG_ALT : BG};
`;
const SectionInner = styled.div`
  padding: 0 clamp(1.5rem, 6vw, 5rem);
  max-width: 1240px;
  margin: 0 auto;
`;
const SectionLabel = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: ${ACCENT};
  margin-bottom: 0.9rem;
`;
const SectionTitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.6rem, 7vw, 5rem);
  font-weight: 700;
  line-height: 0.93;
  text-transform: uppercase;
  color: ${TEXT};
  margin-bottom: 2rem;
`;
const Divider = styled.div`
  width: 3rem;
  height: 2px;
  background: ${ACCENT};
  margin-bottom: 3rem;
`;

/* ─────────────────────────────────────────
   SPECTACLES
───────────────────────────────────────── */
const ShowList = styled.div`
  display: flex;
  flex-direction: column;
`;
const ShowRow = styled.a`
  display: grid;
  grid-template-columns: 1.2fr 2fr auto;
  align-items: center;
  gap: 2rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid ${BORDER};
  transition: padding-left 0.25s, color 0.2s;
  cursor: pointer;
  &:first-child { border-top: 1px solid ${BORDER}; }
  &:hover { padding-left: 1.2rem; }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
    padding: 1.2rem 0;
  }
`;
const ShowDate = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: clamp(0.9rem, 2.2vw, 1.05rem);
  font-weight: 400;
  color: ${TEXT};
  text-transform: capitalize;
`;
const ShowVenue = styled.div`
  font-size: 0.92rem;
  color: ${MUTED};
`;
const ShowBadge = styled.span`
  font-family: 'Oswald', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: 1px solid ${BORDER};
  padding: 0.4rem 1rem;
  color: ${MUTED};
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
  ${ShowRow}:hover & { border-color: ${ACCENT}; color: ${ACCENT}; }
  @media (max-width: 620px) { display: none; }
`;
const NoShows = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.1rem;
  color: ${MUTED};
  letter-spacing: 0.08em;
`;

/* ─────────────────────────────────────────
   ALBUMS
───────────────────────────────────────── */
const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 1.2rem;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;
const AlbumCard = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease, filter 0.5s ease;
    filter: grayscale(25%) brightness(0.85);
  }
  &:hover img { transform: scale(1.06); filter: grayscale(0%) brightness(1); }
`;
const BuyLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  a { display: flex; align-items: center; }
  img {
    height: 32px;
    width: auto;
    opacity: 0.6;
    transition: opacity 0.2s;
    filter: brightness(10);
    &:hover { opacity: 1; }
  }
`;

/* ─────────────────────────────────────────
   HISTOIRE
───────────────────────────────────────── */
const HistoireBody = styled.div`
  max-width: 740px;
  p, li {
    font-size: clamp(0.92rem, 1.8vw, 1.02rem);
    line-height: 1.9;
    color: rgba(240,235,226,0.78);
    margin-bottom: 1.1rem;
  }
  h2, h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.4rem;
    color: ${TEXT};
    margin: 2rem 0 0.9rem;
  }
  strong { color: ${TEXT}; }
`;


/* ─────────────────────────────────────────
   GROUP PHOTO
───────────────────────────────────────── */
const GroupPhotoWrap = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(0.88) contrast(1.06);
  }
`;

/* ─────────────────────────────────────────
   PRESSE
───────────────────────────────────────── */
const PressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;
const PressCard = styled.div`
  padding: 2rem;
  border: 1px solid ${BORDER};
  background: rgba(255,255,255,0.02);
  &::before {
    content: '\u201C';
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 3.5rem;
    line-height: 1;
    color: ${ACCENT};
    opacity: 0.45;
    margin-bottom: 0.3rem;
  }
  p {
    font-size: 0.93rem;
    line-height: 1.78;
    color: rgba(240,235,226,0.72);
    font-style: italic;
    margin: 0;
  }
`;

/* ─────────────────────────────────────────
   PHOTOS
───────────────────────────────────────── */
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 4px;
`;
const PhotoCard = styled.div`
  aspect-ratio: 3/2;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease, filter 0.5s ease;
    filter: brightness(0.78);
  }
  &:hover img { transform: scale(1.07); filter: brightness(1); }
`;
const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0,0,0,0.93);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
  }
`;

/* ─────────────────────────────────────────
   VIDEOS
───────────────────────────────────────── */
const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 480px), 1fr));
  gap: 3rem;
`;
const VideoBlock = styled.div`
  h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${MUTED};
    margin-bottom: 0.8rem;
  }
`;
const VideoWrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  background: #000;
  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
const FooterEl = styled.footer`
  padding: 4rem clamp(1.5rem, 6vw, 5rem);
  border-top: 1px solid ${BORDER};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;
const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    height: 34px;
    width: auto;
    filter: brightness(10);
    opacity: 0.55;
    transition: opacity 0.2s;
    &:hover { opacity: 1; }
  }
`;
const Copyright = styled.p`
  font-size: 0.72rem;
  color: ${MUTED};
  letter-spacing: 0.1em;
`;

/* ─────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────── */
const NAV_ITEMS = [
  { href: '#spectacles', label: 'Spectacles' },
  { href: '#albums',     label: 'Albums'     },
  { href: '#histoire',   label: 'Histoire'   },
  { href: '#presse',     label: 'Presse'     },
  { href: '#photos',     label: 'Photos'     },
  { href: '#videos',     label: 'Vidéos'     },
];

const ALBUMS = [
  { src: '/pourtoutlemondedame.jpg',   title: 'Pour Tout Le Monde Dame'  },
  { src: '/lapourpour.jpg',            title: 'La Pourpour'              },
  { src: '/Danse des Breloques.jpg',   title: 'Danse des Breloques'      },
  { src: '/Karussel.jpg',              title: 'Karussel'                 },
  { src: '/Le Bal.jpg',                title: 'Le Bal'                   },
  { src: '/ce-que-nous-sommes.jpeg',   title: 'Ce Que Nous Sommes'       },
];

const PHOTOS = [
  '/images/image1.jpg',  '/images/image3.jpg',  '/images/image8.jpg',
  '/images/image9.jpg',  '/images/image11.jpg', '/images/image10.jpg',
  '/images/image12.jpg', '/images/image13.jpg', '/images/image14.jpg',
  '/images/image15.jpg', '/images/image16.jpg', '/images/image17.jpg',
  '/images/image18.jpg', '/images/image19.jpg',
];

const VIDEOS = [
  { title: 'Un air de fanfare, un pas de deux — 2024', src: 'https://player.vimeo.com/video/1014384305?portrait=0&byline=0' },
  { title: 'Dans les nacelles de Pourpour — 2018',     src: 'https://player.vimeo.com/video/303897944?portrait=0&byline=0' },
  { title: "Tango de l'avion — 2016",                  src: 'https://player.vimeo.com/video/168682522?portrait=0&byline=0' },
  { title: 'Cabarets Parc des Faubourgs — 2011',       src: 'https://player.vimeo.com/video/58679616?portrait=0&byline=0'  },
];

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function HomePage({ spectacles = [], histoire = [], presse = [] }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [lightbox,  setLightbox]  = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tz = typeof Intl !== 'undefined'
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : 'UTC';

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString('fr-FR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: tz,
    });

  return (
    <>
      <Head>
        <title>Fanfare PourPour</title>
        <meta name="description" content="Fanfare PourPour — musique, spectacles, albums — Montréal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Inter:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <FloatingIcons />

      {/* ── NAV ─────────────────────────────── */}
      <NavBar $scrolled={scrolled}>
        <NavLogo href="#accueil">
          <img src="/pp4/nom_pourpour_2.png" alt="Fanfare PourPour" />
        </NavLogo>
        <NavLinks>
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </NavLinks>
        <Hamburger $open={menuOpen} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </Hamburger>
      </NavBar>

      <MobileMenu $open={menuOpen}>
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </MobileMenu>

      <PageWrapper>

        {/* ── HERO ─────────────────────────── */}
        <HeroSection id="accueil">
          <HeroBg>
            <Image
              src="/pp4/index_ordinateur_fond.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </HeroBg>
          <HeroContent>
            <HeroLogo src="/pp4/nom_pourpour_2.png" alt="Fanfare PourPour" />
            <HeroTagline>Fanfare &nbsp;·&nbsp; Montréal</HeroTagline>
            <HeroCTA href="#spectacles">Prochains Spectacles</HeroCTA>
          </HeroContent>
          <ScrollIndicator>
            <span>Défiler</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12L2 6h12z" />
            </svg>
          </ScrollIndicator>
        </HeroSection>

        {/* ── SPECTACLES ───────────────────── */}
        <SectionFull id="spectacles">
          <SectionInner>
            <SectionLabel>Agenda</SectionLabel>
            <SectionTitle>Spectacles</SectionTitle>
            <Divider />
            <ShowList>
              {spectacles.filter(s => s.slug).length > 0 ? (
                spectacles.filter(s => s.slug).map(show => (
                  <ShowRow key={show._id} href={`/spectacles/${show.slug.current}`}>
                    <ShowDate>{fmtDate(show.publishedAt)}</ShowDate>
                    <ShowVenue>{show.endroit}</ShowVenue>
                    <ShowBadge>Plus d&apos;infos</ShowBadge>
                  </ShowRow>
                ))
              ) : (
                <NoShows>Aucun spectacle à venir pour l&apos;instant.</NoShows>
              )}
            </ShowList>
          </SectionInner>
        </SectionFull>

        {/* ── ALBUMS ───────────────────────── */}
        <SectionFull id="albums" $alt>
          <SectionInner>
            <SectionLabel>Discographie</SectionLabel>
            <SectionTitle>Nos Albums</SectionTitle>
            <Divider />
            <AlbumGrid>
              {ALBUMS.map(album => (
                <AlbumCard key={album.src} title={album.title}>
                  <img src={album.src} alt={album.title} loading="lazy" />
                </AlbumCard>
              ))}
            </AlbumGrid>
            <BuyLinks>
              <a href="https://actuellecd.com/fr/artiste/fanfarepourpour_/Fanfare_Pourpour" target="_blank" rel="noopener noreferrer">
                <img src="/actuellelogo.png" alt="Actuelle CD" />
              </a>
              <a href="https://fanfarepourpour.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                <img src="/bandcamp-button-bc-circle-green-64.png" alt="Bandcamp" />
              </a>
              <a href="https://music.apple.com/ca/artist/fanfare-pourpour/419642215" target="_blank" rel="noopener noreferrer">
                <img src="/Apple_logo_black.svg.png" alt="Apple Music" />
              </a>
            </BuyLinks>
          </SectionInner>
        </SectionFull>

        {/* ── HISTOIRE ─────────────────────── */}
        <SectionFull id="histoire">
          <SectionInner>
            <SectionLabel>À propos</SectionLabel>
            <SectionTitle>Notre Histoire</SectionTitle>
            <Divider />
            {histoire.length > 0 && (
              <HistoireBody>
                <BlockContent blocks={histoire[0].body} />
              </HistoireBody>
            )}
          </SectionInner>
        </SectionFull>

        {/* ── GROUP PHOTO ──────────────────── */}
        <GroupPhotoWrap>
          <img src="/images/30em.jpg" alt="Fanfare PourPour — photo de groupe" loading="lazy" />
        </GroupPhotoWrap>

        {/* ── PRESSE ───────────────────────── */}
        <SectionFull id="presse">
          <SectionInner>
            <SectionLabel>Médias</SectionLabel>
            <SectionTitle>On Parle de Nous</SectionTitle>
            <Divider />
            <PressGrid>
              {presse.map((post, i) => (
                <PressCard key={i}>
                  <BlockContent blocks={post.body} />
                </PressCard>
              ))}
            </PressGrid>
          </SectionInner>
        </SectionFull>

        {/* ── PHOTOS ───────────────────────── */}
        <SectionFull id="photos" $alt>
          <SectionInner>
            <SectionLabel>Galerie</SectionLabel>
            <SectionTitle>Photos</SectionTitle>
            <Divider />
          </SectionInner>
          <PhotoGrid>
            {PHOTOS.map(src => (
              <PhotoCard key={src} onClick={() => setLightbox(src)}>
                <img src={src} alt="" loading="lazy" />
              </PhotoCard>
            ))}
          </PhotoGrid>
        </SectionFull>

        {/* ── VIDEOS ───────────────────────── */}
        <SectionFull id="videos">
          <SectionInner>
            <SectionLabel>Multimédia</SectionLabel>
            <SectionTitle>Vidéos</SectionTitle>
            <Divider />
            <VideoGrid>
              {VIDEOS.map(v => (
                <VideoBlock key={v.src}>
                  <h3>{v.title}</h3>
                  <VideoWrap>
                    <iframe
                      src={v.src}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={v.title}
                      loading="lazy"
                    />
                  </VideoWrap>
                </VideoBlock>
              ))}
            </VideoGrid>
          </SectionInner>
        </SectionFull>

        {/* ── FOOTER ───────────────────────── */}
        <FooterEl>
          <NavLogo href="#accueil">
            <img src="/pp4/nom_pourpour_2.png" alt="Fanfare PourPour" />
          </NavLogo>
          <SocialRow>
            <a href="https://www.facebook.com/fanfare.pourpour" target="_blank" rel="noopener noreferrer">
              <img src="/f_logo_RGB-Blue_58.png" alt="Facebook" />
            </a>
            <a href="https://fanfarepourpour.bandcamp.com/" target="_blank" rel="noopener noreferrer">
              <img src="/bandcamp-button-bc-circle-green-64.png" alt="Bandcamp" />
            </a>
            <a href="https://actuellecd.com/en/artiste/fanfarepourpour_/fanfare-pourpour" target="_blank" rel="noopener noreferrer">
              <img src="/actuellelogo.png" alt="Actuelle CD" />
            </a>
          </SocialRow>
          <Copyright>© {new Date().getFullYear()} Fanfare PourPour — Montréal</Copyright>
        </FooterEl>

      </PageWrapper>

      {/* ── LIGHTBOX ─────────────────────── */}
      {lightbox && (
        <Lightbox onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" />
        </Lightbox>
      )}
    </>
  );
}

/* ─────────────────────────────────────────
   DATA FETCHING
───────────────────────────────────────── */
const client = sanityClient.withConfig({ apiVersion: '2021-06-07' });

HomePage.getInitialProps = async () => {
  const [spectacles, histoire, presse] = await Promise.all([
    client.fetch(groq`*[_type == "spectacle"] | order(publishedAt desc)`),
    client.fetch(groq`*[_type == "histoire"]`),
    client.fetch(groq`*[_type == "extraitpresse"]`),
  ]);
  return { spectacles, histoire, presse };
};
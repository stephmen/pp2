import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../client'
import Head from 'next/head'
import Link from 'next/link'
import styled, { createGlobalStyle, keyframes } from 'styled-components'

/* ── COLOURS ─────────────────────────────── */
const BG      = '#07040c'
const ACCENT  = '#c8213b'   // deep red — the band's colour
const GOLD    = '#d4a853'   // warm gold for headings
const TEXT    = '#f0ebe2'
const MUTED   = 'rgba(240,235,226,0.45)'
const BORDER  = 'rgba(255,255,255,0.07)'
// keep these for icon filter refs
const FLASH1 = ACCENT
const FLASH2 = GOLD
const FLASH3 = ACCENT
const FLASH4 = GOLD

/* ── KEYFRAMES ───────────────────────────── */
const drift1 = keyframes`
  0%   { transform: translate(0,0) rotate(-4deg) scale(1); }
  30%  { transform: translate(18px,-28px) rotate(6deg) scale(1.06); }
  65%  { transform: translate(-12px,-18px) rotate(-3deg) scale(0.96); }
  100% { transform: translate(0,0) rotate(-4deg) scale(1); }
`
const drift2 = keyframes`
  0%   { transform: translate(0,0) rotate(8deg); }
  40%  { transform: translate(-22px,-35px) rotate(-6deg); }
  70%  { transform: translate(14px,-20px) rotate(10deg); }
  100% { transform: translate(0,0) rotate(8deg); }
`
const drift3 = keyframes`
  0%   { transform: translate(0,0) rotate(0deg) scale(1); }
  50%  { transform: translate(30px,-45px) rotate(14deg) scale(1.1); }
  100% { transform: translate(0,0) rotate(0deg) scale(1); }
`
const pulse = keyframes`
  0%, 100% { opacity: 0.22; }
  50%       { opacity: 0.45; }
`
const gradShift = keyframes`
  0%   { background-position: 0% 0%; }
  100% { background-position: 300% 0%; }
`
const glitchAnim = keyframes`
  0%, 95%, 100% { transform: none; opacity: 1; }
  96%  { transform: translate(-3px, 1px) skewX(-3deg); opacity: 0.8; }
  97%  { transform: translate(3px, -1px) skewX(2deg); opacity: 0.9; }
  98%  { transform: translate(-1px, 2px); opacity: 0.85; }
`
const PageGlobal = createGlobalStyle`
  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: ${BG};
    color: ${TEXT};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }
`

/* ── FLOATING ICONS ──────────────────────── */
const ICONS = [
  { src: '/LesAmisTrans/benoitTrans.png',    left: '3%',  top: '28%', size: 110, dur: 44, delay: 0  },
  { src: '/LesAmisTrans/sueTrans.png',       left: '83%', top: '15%', size: 85,  dur: 52, delay: 7  },
  { src: '/LesAmisTrans/royTrans.png',       left: '46%', top: '62%', size: 95,  dur: 38, delay: 3  },
  { src: '/LesAmisTrans/JackTrans.png',      left: '89%', top: '68%', size: 75,  dur: 56, delay: 14 },
  { src: '/LesAmisTrans/louTrans.png',       left: '2%',  top: '72%', size: 90,  dur: 41, delay: 9  },
  { src: '/LesAmisTrans/christineTrans.png', left: '68%', top: '42%', size: 80,  dur: 47, delay: 5  },
  { src: '/LesAmisTrans/guidoTrans.png',     left: '24%', top: '90%', size: 70,  dur: 60, delay: 20 },
  { src: '/LesAmisTrans/lucTrans.png',       left: '91%', top: '88%', size: 65,  dur: 35, delay: 12 },
  { src: '/LesAmisTrans/bernardTrans.png',   left: '35%', top: '18%', size: 80,  dur: 49, delay: 17 },
  { src: '/LesAmisTrans/stephaneTrans.png',  left: '58%', top: '82%', size: 72,  dur: 43, delay: 8  },
]
const FloatLayer = styled.div`
  position: fixed; inset: 0; pointer-events: none; z-index: 1; overflow: hidden;
`
const FloatIcon = styled.img`
  position: absolute;
  left: ${p => p.$left}; top: ${p => p.$top};
  width: ${p => p.$size}px; height: ${p => p.$size}px;
  object-fit: contain; opacity: 0.55; will-change: transform, opacity;
  animation-name: ${p => p.$anim}, ${pulse};
  animation-duration: ${p => p.$dur}s, ${p => p.$dur * 0.6}s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-delay: -${p => p.$delay}s, -${p => p.$delay}s;
  @media (max-width: 768px) {
    width: ${p => Math.round(p.$size * 0.5)}px;
    height: ${p => Math.round(p.$size * 0.5)}px;
  }
`
const NavBar = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 clamp(1.2rem, 4vw, 3rem); height: 60px;
  background: rgba(7,4,12,0.88); backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
`
const NavLogoImg = styled.img`height: 28px; width: auto; display: block;`
const BackBtn = styled.a`
  font-family: 'Oswald', sans-serif; font-size: 0.7rem;
  letter-spacing: 0.3em; text-transform: uppercase; color: ${MUTED};
  display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
  transition: color 0.2s; &:hover { color: ${TEXT}; }
`
const HeroBand = styled.div`
  position: relative; z-index: 10; padding-top: 60px;
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; min-height: 38vh; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(247,225,26,0.08) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 30%, rgba(255,60,172,0.10) 0%, transparent 55%),
      radial-gradient(ellipse at 55% 80%, rgba(61,255,160,0.07) 0%, transparent 50%);
  }
`
const EventLabel = styled.div`
  position: relative; font-family: 'Oswald', sans-serif; font-size: 0.65rem;
  letter-spacing: 0.55em; text-transform: uppercase; color: ${ACCENT}; margin-bottom: 1rem;
`
const EventTitle = styled.h1`
  position: relative; font-family: 'Oswald', sans-serif;
  font-size: clamp(2.8rem, 9vw, 6.5rem); font-weight: 700; line-height: 0.92;
  text-align: center; text-transform: uppercase; padding: 0 1rem;
  color: ${TEXT};
`
const EventVenue = styled.div`
  position: relative; margin-top: 1.4rem; font-family: 'Oswald', sans-serif;
  font-size: clamp(1rem, 3vw, 1.5rem); font-weight: 300; letter-spacing: 0.18em;
  text-transform: uppercase; color: ${GOLD};
`
const GlitchLine = styled.div`
  position: relative; z-index: 10; height: 1px;
  background: linear-gradient(90deg, transparent, ${ACCENT}, transparent);
`
const InfoStrip = styled.div`
  position: relative; z-index: 10; display: flex; flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid rgba(255,255,255,0.07);
  border-bottom: 1px solid rgba(255,255,255,0.07);
`
const InfoCell = styled.div`
  flex: 1; min-width: 200px; padding: 2rem clamp(1.5rem, 4vw, 3rem); text-align: center;
  border-right: 1px solid rgba(255,255,255,0.07);
  &:last-child { border-right: none; }
  @media (max-width: 640px) { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
`
const InfoLabel = styled.div`
  font-family: 'Oswald', sans-serif; font-size: 0.6rem;
  letter-spacing: 0.45em; text-transform: uppercase; color: ${ACCENT}; margin-bottom: 0.5rem;
`
const InfoValue = styled.div`
  font-family: 'Oswald', sans-serif; font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: ${TEXT}; line-height: 1.4;
`
const ContentWrap = styled.div`
  position: relative; z-index: 10; max-width: 780px; margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem);
`
const MainImage = styled.img`
  width: 100%; max-width: 560px; height: auto; display: block; margin: 0 auto 3rem;
  border: 1px solid ${BORDER};
  box-shadow: 0 8px 60px rgba(0,0,0,0.6);
`
const BodyContent = styled.div`
  p, li { font-size: clamp(0.95rem, 2vw, 1.05rem); line-height: 1.9; color: rgba(240,235,226,0.78); margin-bottom: 1.1rem; }
  a { color: ${GOLD}; text-decoration: underline; text-underline-offset: 3px; transition: color 0.2s; &:hover { color: ${TEXT}; } }
  strong { color: ${TEXT}; }
  h2, h3 { font-family: 'Oswald', sans-serif; color: ${GOLD}; margin: 2rem 0 0.8rem; }
`
const FooterMini = styled.footer`
  position: relative; z-index: 10; display: flex; flex-direction: column;
  align-items: center; gap: 1.5rem; padding: 4rem 2rem;
  border-top: 1px solid rgba(255,255,255,0.07); text-align: center;
`
const SocialRow = styled.div`
  display: flex; gap: 2rem; align-items: center;
  img { height: 30px; width: auto; filter: brightness(10); opacity: 0.45; transition: opacity 0.2s; &:hover { opacity: 1; } }
`
const Copyright = styled.p`font-size: 0.7rem; color: ${MUTED}; letter-spacing: 0.1em;`

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  const {
    title = 'Spectacle',
    mainImage,
    body = [],
    publishedAt,
    nocivique,
    rue,
    ville,
    endroit,
  } = { ...props }

  const tz = typeof Intl !== 'undefined'
    ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'UTC'

  const dateStr = publishedAt
    ? new Date(publishedAt).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: tz })
    : ''
  const timeStr = publishedAt
    ? new Date(publishedAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: tz })
    : ''
  const address = [nocivique, rue, ville].filter(Boolean).join(' ')

  return (
    <>
      <Head>
        <title>{title} — Fanfare PourPour</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <PageGlobal />

      <FloatLayer aria-hidden="true">
        {ICONS.map((icon, i) => (
          <FloatIcon key={i} src={icon.src} alt=""
            $left={icon.left} $top={icon.top} $size={icon.size}
            $dur={icon.dur} $delay={icon.delay} $anim={drift1}
          />
        ))}
      </FloatLayer>

      <NavBar>
        <Link href="/" passHref legacyBehavior>
          <a><NavLogoImg src="/pp4/nom_pourpour_2.png" alt="Fanfare PourPour" /></a>
        </Link>
        <Link href="/#spectacles" passHref legacyBehavior>
          <BackBtn>← Tous les spectacles</BackBtn>
        </Link>
      </NavBar>

      <HeroBand>
        <EventLabel>Spectacle</EventLabel>
        <EventTitle>{title}</EventTitle>
        {endroit && <EventVenue>{endroit}</EventVenue>}
      </HeroBand>

      <GlitchLine />

      <InfoStrip>
        {dateStr && <InfoCell><InfoLabel>Date</InfoLabel><InfoValue>{dateStr}</InfoValue></InfoCell>}
        {timeStr && <InfoCell><InfoLabel>Heure</InfoLabel><InfoValue>{timeStr}</InfoValue></InfoCell>}
        {address && <InfoCell><InfoLabel>Adresse</InfoLabel><InfoValue>{address}</InfoValue></InfoCell>}
      </InfoStrip>

      <ContentWrap>
        {mainImage && <MainImage src={urlFor(mainImage).width(560).url()} alt={title} />}
        <BodyContent>
          <BlockContent blocks={body} {...client.config()} />
        </BodyContent>
      </ContentWrap>

      <GlitchLine />

      <FooterMini>
        <NavLogoImg src="/pp4/nom_pourpour_2.png" alt="Fanfare PourPour" />
        <SocialRow>
          <a href="https://www.facebook.com/fanfare.pourpour" target="_blank" rel="noopener noreferrer">
            <img src="/f_logo_RGB-Blue_58.png" alt="Facebook" />
          </a>
          <a href="https://fanfarepourpour.bandcamp.com/" target="_blank" rel="noopener noreferrer">
            <img src="/bandcamp-button-bc-circle-green-64.png" alt="Bandcamp" />
          </a>
        </SocialRow>
        <Copyright>© {new Date().getFullYear()} Fanfare PourPour</Copyright>
      </FooterMini>
    </>
  )
}

const client = sanityClient.withConfig({ apiVersion: '2021-06-07' })
const query = groq`*[_type == "spectacle" && slug.current == $slug][0]`

Post.getInitialProps = async function(context) {
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Post

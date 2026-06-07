import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const FloatKeyframes = createGlobalStyle`
  @keyframes ppFloat1 {
    0%   { transform: translate(0, 0) rotate(0deg) scale(1); }
    33%  { transform: translate(25px, -35px) rotate(8deg) scale(1.05); }
    66%  { transform: translate(-15px, -20px) rotate(-5deg) scale(0.97); }
    100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  }
  @keyframes ppFloat2 {
    0%   { transform: translate(0, 0) rotate(0deg); }
    25%  { transform: translate(-30px, -40px) rotate(-10deg); }
    50%  { transform: translate(20px, -60px) rotate(5deg); }
    75%  { transform: translate(-10px, -30px) rotate(-3deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
  @keyframes ppFloat3 {
    0%   { transform: translate(0, 0) rotate(0deg) scale(1); }
    50%  { transform: translate(40px, -50px) rotate(12deg) scale(1.08); }
    100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  }
  @keyframes ppFloat4 {
    0%   { transform: translate(0, 0) rotate(0deg); }
    20%  { transform: translate(-20px, -25px) rotate(-8deg); }
    60%  { transform: translate(30px, -45px) rotate(6deg); }
    80%  { transform: translate(10px, -15px) rotate(-2deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
  @keyframes ppFloat5 {
    0%   { transform: translate(0, 0) rotate(0deg) scale(1); }
    40%  { transform: translate(-35px, -30px) rotate(-12deg) scale(0.95); }
    70%  { transform: translate(15px, -55px) rotate(8deg) scale(1.03); }
    100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  }
`;

/* 20 placements spread from top 2% to top 96% of the full page height
   size: px width/height — deliberately varied from tiny (48px) to large (170px)
   rot:  initial rotation in degrees — static tilt, the float animation adds more on top */
const ICONS = [
  { src: '/LesAmisTrans/royTrans.png',       left: '5%',  top: '2%',  size: 145, rot: -14, dur: 44, delay: 0,  opacity: 0.60, anim: 'ppFloat3' },
  { src: '/LesAmisTrans/sueTrans.png',       left: '82%', top: '4%',  size: 58,  rot:  9,  dur: 38, delay: 5,  opacity: 0.55, anim: 'ppFloat1' },
  { src: '/LesAmisTrans/benoitTrans.png',    left: '2%',  top: '10%', size: 105, rot:  22, dur: 52, delay: 3,  opacity: 0.58, anim: 'ppFloat2' },
  { src: '/LesAmisTrans/JackTrans.png',      left: '88%', top: '14%', size: 72,  rot: -6,  dur: 47, delay: 11, opacity: 0.52, anim: 'ppFloat4' },
  { src: '/LesAmisTrans/louTrans.png',       left: '45%', top: '18%', size: 170, rot:  17, dur: 41, delay: 7,  opacity: 0.50, anim: 'ppFloat5' },
  { src: '/LesAmisTrans/christineTrans.png', left: '70%', top: '24%', size: 48,  rot: -20, dur: 55, delay: 14, opacity: 0.53, anim: 'ppFloat1' },
  { src: '/LesAmisTrans/guidoTrans.png',     left: '10%', top: '30%', size: 125, rot:  7,  dur: 36, delay: 2,  opacity: 0.56, anim: 'ppFloat3' },
  { src: '/LesAmisTrans/lucTrans.png',       left: '91%', top: '36%', size: 52,  rot: -28, dur: 49, delay: 18, opacity: 0.55, anim: 'ppFloat2' },
  { src: '/LesAmisTrans/bernardTrans.png',   left: '28%', top: '40%', size: 160, rot:  11, dur: 43, delay: 6,  opacity: 0.60, anim: 'ppFloat4' },
  { src: '/LesAmisTrans/stephaneTrans.png',  left: '62%', top: '46%', size: 78,  rot: -9,  dur: 58, delay: 9,  opacity: 0.52, anim: 'ppFloat5' },
  { src: '/LesAmisTrans/sueTrans.png',       left: '4%',  top: '52%', size: 112, rot:  19, dur: 40, delay: 16, opacity: 0.57, anim: 'ppFloat1' },
  { src: '/LesAmisTrans/royTrans.png',       left: '85%', top: '56%', size: 55,  rot: -15, dur: 46, delay: 4,  opacity: 0.53, anim: 'ppFloat3' },
  { src: '/LesAmisTrans/JackTrans.png',      left: '38%', top: '62%', size: 148, rot:  5,  dur: 35, delay: 12, opacity: 0.62, anim: 'ppFloat2' },
  { src: '/LesAmisTrans/louTrans.png',       left: '75%', top: '68%', size: 64,  rot: -32, dur: 53, delay: 8,  opacity: 0.50, anim: 'ppFloat4' },
  { src: '/LesAmisTrans/benoitTrans.png',    left: '14%', top: '72%', size: 132, rot:  25, dur: 39, delay: 20, opacity: 0.56, anim: 'ppFloat5' },
  { src: '/LesAmisTrans/christineTrans.png', left: '55%', top: '78%', size: 50,  rot: -8,  dur: 57, delay: 1,  opacity: 0.54, anim: 'ppFloat1' },
  { src: '/LesAmisTrans/guidoTrans.png',     left: '88%', top: '82%', size: 120, rot:  30, dur: 42, delay: 15, opacity: 0.51, anim: 'ppFloat3' },
  { src: '/LesAmisTrans/lucTrans.png',       left: '22%', top: '87%', size: 68,  rot: -12, dur: 48, delay: 10, opacity: 0.58, anim: 'ppFloat2' },
  { src: '/LesAmisTrans/bernardTrans.png',   left: '68%', top: '91%', size: 155, rot:  13, dur: 34, delay: 6,  opacity: 0.55, anim: 'ppFloat4' },
  { src: '/LesAmisTrans/stephaneTrans.png',  left: '8%',  top: '95%', size: 88,  rot: -22, dur: 50, delay: 13, opacity: 0.57, anim: 'ppFloat5' },
];

/* position: absolute so icons spread across the full scrollable page height */
const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
`;

/* Wrapper holds the absolute position + static tilt; the img inside gets the float animation */
const IconWrapper = styled.div`
  position: absolute;
  left: ${p => p.$left};
  top: ${p => p.$top};
  transform: rotate(${p => p.$rot}deg);
`;

const Icon = styled.img`
  display: block;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  object-fit: contain;
  opacity: ${p => p.$opacity};
  filter: invert(1);
  animation-name: ${p => p.$anim};
  animation-duration: ${p => p.$dur}s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: -${p => p.$delay}s;
  will-change: transform;

  @media (max-width: 768px) {
    width: ${p => Math.round(p.$size * 0.55)}px;
    height: ${p => Math.round(p.$size * 0.55)}px;
    opacity: ${p => p.$opacity * 0.7};
  }
`;

export default function FloatingIcons() {
  return (
    <>
      <FloatKeyframes />
      <Layer aria-hidden="true">
        {ICONS.map((icon, i) => (
          <IconWrapper
            key={i}
            $left={icon.left}
            $top={icon.top}
            $rot={icon.rot}
          >
            <Icon
              src={icon.src}
              alt=""
              $size={icon.size}
              $dur={icon.dur}
              $delay={icon.delay}
              $opacity={icon.opacity}
              $anim={icon.anim}
            />
          </IconWrapper>
        ))}
      </Layer>
    </>
  );
}


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

const ICONS = [
  { src: '/LesAmisTrans/benoitTrans.png',    left: '3%',  top: '8%',  size: 90,  dur: 48, delay: 0,  opacity: 0.22, anim: 'ppFloat1' },
  { src: '/LesAmisTrans/bernardTrans.png',   left: '82%', top: '12%', size: 70,  dur: 52, delay: 8,  opacity: 0.18, anim: 'ppFloat2' },
  { src: '/LesAmisTrans/christineTrans.png', left: '45%', top: '72%', size: 80,  dur: 41, delay: 3,  opacity: 0.20, anim: 'ppFloat3' },
  { src: '/LesAmisTrans/guidoTrans.png',     left: '90%', top: '55%', size: 65,  dur: 56, delay: 12, opacity: 0.16, anim: 'ppFloat4' },
  { src: '/LesAmisTrans/JackTrans.png',      left: '15%', top: '45%', size: 85,  dur: 44, delay: 6,  opacity: 0.20, anim: 'ppFloat5' },
  { src: '/LesAmisTrans/louTrans.png',       left: '68%', top: '30%', size: 75,  dur: 38, delay: 15, opacity: 0.18, anim: 'ppFloat1' },
  { src: '/LesAmisTrans/lucTrans.png',       left: '8%',  top: '78%', size: 60,  dur: 60, delay: 4,  opacity: 0.15, anim: 'ppFloat2' },
  { src: '/LesAmisTrans/royTrans.png',       left: '55%', top: '15%', size: 100, dur: 35, delay: 10, opacity: 0.24, anim: 'ppFloat3' },
  { src: '/LesAmisTrans/stephaneTrans.png',  left: '35%', top: '88%', size: 70,  dur: 50, delay: 7,  opacity: 0.19, anim: 'ppFloat4' },
  { src: '/LesAmisTrans/sueTrans.png',       left: '78%', top: '80%', size: 80,  dur: 43, delay: 18, opacity: 0.21, anim: 'ppFloat5' },
];

const Layer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const Icon = styled.img`
  position: absolute;
  left: ${p => p.$left};
  top: ${p => p.$top};
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  object-fit: contain;
  opacity: ${p => p.$opacity};
  animation-name: ${p => p.$anim};
  animation-duration: ${p => p.$dur}s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: -${p => p.$delay}s;
  will-change: transform;

  @media (max-width: 768px) {
    width: ${p => Math.round(p.$size * 0.55)}px;
    height: ${p => Math.round(p.$size * 0.55)}px;
    opacity: ${p => p.$opacity * 0.6};
  }
`;

export default function FloatingIcons() {
  return (
    <>
      <FloatKeyframes />
      <Layer aria-hidden="true">
        {ICONS.map((icon, i) => (
          <Icon
            key={i}
            src={icon.src}
            alt=""
            $left={icon.left}
            $top={icon.top}
            $size={icon.size}
            $dur={icon.dur}
            $delay={icon.delay}
            $opacity={icon.opacity}
            $anim={icon.anim}
          />
        ))}
      </Layer>
    </>
  );
}

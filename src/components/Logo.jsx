import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ 
  className = '', 
  width = 120, 
  variant = 'vertical', 
  colorMode = 'color',
  withLink = true
}) => {
  // Brand colors
  const colors = {
    lightBlue: '#39B5E8',
    darkBlue: '#0054A6',
    lightGreen: '#97C93D',
    darkGreen: '#509E2F',
    textBlue: '#0054A6',
    white: '#FFFFFF',
    mono: '#333333'
  };

  // Get colors based on colorMode
  const getColors = () => {
    if (colorMode === 'white') {
      return {
        topLeft: colors.white,
        topRight: colors.white,
        bottomLeft: colors.white,
        bottomRight: colors.white,
        text: colors.white
      };
    } else if (colorMode === 'mono') {
      return {
        topLeft: colors.mono,
        topRight: colors.mono,
        bottomLeft: colors.mono,
        bottomRight: colors.mono,
        text: colors.mono
      };
    }
    return {
      topLeft: colors.lightBlue,
      topRight: colors.darkBlue,
      bottomLeft: colors.lightGreen,
      bottomRight: colors.darkGreen,
      text: colors.textBlue
    };
  };

  const logoColors = getColors();
  
  const LogoSvg = () => (
    <svg 
      width={width} 
      viewBox="0 0 400 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-opacity duration-200"
    >
      {/* Icon */}
      <g transform="scale(0.5) translate(0, 0)">
        <path d="M50 0 L100 0 L100 50 L50 50 Z" fill={logoColors.topLeft} />
        <path d="M100 0 L150 0 L150 50 L100 50 Z" fill={logoColors.topRight} />
        <path d="M50 50 L100 50 L100 100 L50 100 Z" fill={logoColors.bottomLeft} />
        <path d="M100 50 L150 50 L150 100 L100 100 Z" fill={logoColors.bottomRight} />
      </g>
      
      {/* Text */}
      <text 
        x="200" 
        y="70" 
        textAnchor="start" 
        fontSize="64" 
        fontFamily="Arial, sans-serif" 
        fill={logoColors.text}
        style={{ textTransform: 'lowercase' }}
      >
        tusker
      </text>
    </svg>
  );

  return (
    <div className={className}>
      {withLink ? (
        <Link to="/" className="block">
          <LogoSvg />
        </Link>
      ) : (
        <LogoSvg />
      )}
    </div>
  );
};

export default Logo;

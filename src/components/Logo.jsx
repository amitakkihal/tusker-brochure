import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ 
  className = '', 
  width = 120, 
  variant = 'stacked', 
  colorMode = 'color',
  withLink = true
}) => {
  // Precise color definitions based on the PNG logos
  const colors = {
    lightBlue: '#39B5E8',   // Top left quadrant light blue
    darkBlue: '#0072BC',    // Top right quadrant dark blue
    lightGreen: '#8CC63F',  // Bottom left quadrant light green
    darkGreen: '#009444',   // Bottom right quadrant dark green
    textBlue: '#0072BC',    // Text color
    white: '#FFFFFF',
    mono: '#333333'
  };

  // Color selection logic
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

  const LogoStacked = () => (
    <svg 
      width={width} 
      viewBox="0 0 205 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-opacity duration-200"
    >
      {/* Icon - stacked variant */}
      <g>
        <path d="M0 0 L100 0 L100 50 L0 50 Z" fill={logoColors.topLeft} />
        <path d="M100 0 L205 0 L205 50 L100 50 Z" fill={logoColors.topRight} />
        <path d="M0 50 L100 50 L100 100 L0 100 Z" fill={logoColors.bottomLeft} />
        <path d="M100 50 L205 50 L205 100 L100 100 Z" fill={logoColors.bottomRight} />
      </g>
      
      {/* Text - positioned below icon */}
      <text 
        x="0" 
        y="130" 
        textAnchor="start" 
        fontSize="48" 
        fontFamily="Arial, sans-serif" 
        fill={logoColors.text}
        style={{ textTransform: 'lowercase' }}
      >
        tusker
      </text>
    </svg>
  );

  const LogoLinear = () => (
    <svg 
      width={width} 
      viewBox="0 0 400 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-opacity duration-200 flex items-center"
    >
      {/* Icon - linear arrangement */}
      <g>
        <path d="M0 20 L100 20 L100 70 L0 70 Z" fill={logoColors.topLeft} />
        <path d="M100 20 L205 20 L205 70 L100 70 Z" fill={logoColors.topRight} />
        <path d="M0 70 L100 70 L100 120 L0 120 Z" fill={logoColors.bottomLeft} />
        <path d="M100 70 L205 70 L205 120 L100 120 Z" fill={logoColors.bottomRight} />
      </g>
      
      {/* Text - positioned next to icon */}
      <text 
        x="220" 
        y="80" 
        textAnchor="start" 
        fontSize="48" 
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
          {variant === 'stacked' ? <LogoStacked /> : <LogoLinear />}
        </Link>
      ) : (
        variant === 'stacked' ? <LogoStacked /> : <LogoLinear />
      )}
    </div>
  );
};

export default Logo;

// src/components/CornerNavigation.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CornerNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const pageOrder = [
    { path: '/', label: 'Cover' },
    { path: '/market', label: 'Market' },
    { path: '/ecosystem', label: 'Ecosystem' },
    { path: '/trucking', label: 'Network' },
    { path: '/technology', label: 'Technology' },
    { path: '/network-expansion', label: 'Expansion' },
    { path: '/partnership', label: 'Partnership' },
    { path: '/success-stories', label: 'Success Stories' }
  ];

  const currentIndex = pageOrder.findIndex(page => page.path === location.pathname);
  const hasNext = currentIndex < pageOrder.length - 1;
  const hasPrevious = currentIndex > 0;

  const goToNext = () => {
    if (hasNext) {
      navigate(pageOrder[currentIndex + 1].path);
    }
  };

  const goToPrevious = () => {
    if (hasPrevious) {
      navigate(pageOrder[currentIndex - 1].path);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && hasNext) {
      goToNext();
    } else if (isRightSwipe && hasPrevious) {
      goToPrevious();
    }
  };

  useEffect(() => {
    const element = document.documentElement;
    element.addEventListener('touchstart', onTouchStart);
    element.addEventListener('touchmove', onTouchMove);
    element.addEventListener('touchend', onTouchEnd);

    return () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchmove', onTouchMove);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }, [touchStart, touchEnd, currentIndex]);

  return (
    <>
      {/* Previous button */}
      {hasPrevious && (
        <button
          onClick={goToPrevious}
          className="fixed left-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 group z-50"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {pageOrder[currentIndex - 1]?.label}
          </span>
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={goToNext}
          className="fixed right-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 group z-50"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {pageOrder[currentIndex + 1]?.label}
          </span>
        </button>
      )}

      {/* Page indicator */}
      <div className="fixed bottom-8 right-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-50">
        <span className="text-blue-800 font-medium">
          {currentIndex + 1} / {pageOrder.length}
        </span>
      </div>
    </>
  );
};

export default CornerNavigation;

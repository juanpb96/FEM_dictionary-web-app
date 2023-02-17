import { useState, useEffect, useRef } from 'react';
import { DEFAULT_CLOSING_CLASS } from '../types/types';

export const useAnimationEnd = (onComponentHide: () => void) => {
  const [isComponentSet, setIsComponentSet] = useState(false);
  const elementRef = useRef<HTMLElement>();

  const setAnimatedComponent = (component: HTMLElement) => {    
    elementRef.current = component;
    setIsComponentSet(true);
  };

  useEffect(() => {
    const removeClass = () => {
      if (elementRef.current?.classList.contains(DEFAULT_CLOSING_CLASS)) {
        elementRef.current.classList.remove(DEFAULT_CLOSING_CLASS);
        setIsComponentSet(false);
        onComponentHide();
      }
    };

    if (elementRef && elementRef.current) {
      elementRef.current.addEventListener('animationend', removeClass);      
    }

    return () => {
      elementRef.current?.removeEventListener('animationend', removeClass);
    }
  }, [isComponentSet]);

  return {
    setAnimatedComponent
  }
}

import { useState, useEffect, useRef } from 'react';
import { DROPDOWN_CLASS } from '../types/types';

export const useAnimationEnd = (onComponentHide: () => void) => {
  const [isComponentSet, setIsComponentSet] = useState(false);
  const elementRef = useRef<HTMLElement>();

  const setAnimatedComponent = (component: HTMLElement) => {    
    elementRef.current = component;
    setIsComponentSet(true);
  };

  useEffect(() => {
    const removeClass = () => {
      if (elementRef.current?.classList.contains(DROPDOWN_CLASS.closing)) {
        elementRef.current.classList.remove(DROPDOWN_CLASS.closing);
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

import styled from 'styled-components';

const Circle = styled.span`
  display: inline-block;
  width: 0.875rem;
  aspect-ratio: 1 / 1;
  margin: 3px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 50%;
  position: absolute;
  left: 0;
  transition: left .3s linear;
`;

const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  width: 2.5rem;
  height: 1.25rem;
  padding: 0;
  background-color: ${({theme}) => theme.colors.paleSky};
  border: none;
  border-radius: 10px;
  transition: background-color .3s linear;

  &[aria-checked="true"] {
    background-color: ${({theme}) => theme.colors.purpleFlower};

    & ${Circle} {
      left: 50%;
    }
  }
`;

const Moon = styled.svg<{$isDark: boolean}>`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({theme, $isDark}) => $isDark
    ? theme.colors.purpleFlower
    : theme.colors.paleSky
  };
  transition: color .3s linear;
`;

const ThemeButtonContainer = styled.div`
  display: flex;
  place-items: center;
  gap: 0.75rem;

  @media screen and (min-width: 768px) {
    gap: 1.25rem;
  }
`;

export {
  Circle,
  Button,
  Moon,
  ThemeButtonContainer
};
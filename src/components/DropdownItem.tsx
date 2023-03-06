import { ReactNode } from 'react';
import * as S from './styles/Dropdown.styled';
import { KeyOfFont } from '../types';

interface DropdownItemProps {
  fontId: KeyOfFont;
  displayName: string;
  isSelected: boolean;
  onClick: (e : React.MouseEvent<HTMLDivElement>, fontId: KeyOfFont) => void;
  children?: ReactNode;
}

export const DropdownItem = ({ fontId, displayName, isSelected, onClick }: DropdownItemProps) => {
  const id = `font-dropdown-item-${fontId}`;

  return (
    <S.ListItem
      aria-selected={isSelected}
      role="option"
      id={id}
      data-testid={id}
      onClick={(e) => onClick(e, fontId)}
      $mode={displayName}
    >
      {displayName}
    </S.ListItem>
  );
};
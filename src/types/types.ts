export enum FontIds {
  sansSerif = 'Sans Serif',
  serif = 'Serif',
  mono = 'Mono'
};

export const DROPDOWN_CLASS = {
  selected: 'selected',
  closing: 'closing',
  closed: 'closed'
};

export type FontValues = 'Sans Serif' | 'Serif' | 'Mono'; 
export type FontTypes = typeof FontIds;
export type KeyOfFont = keyof FontTypes;
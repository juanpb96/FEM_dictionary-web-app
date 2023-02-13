import { useState } from 'react';

// TODO: Set a global font in a context and save it to localStorage
export const Dropdown = () => {
  const [selectedFont, setSelectedFont] = useState('Sans Serif');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const onComboboxClick = () => {
    toggleSetIsOpen();
  };

  const onListItemClick = (font: string) => {
    setSelectedFont(font);
    toggleSetIsOpen();
  };

  return (
    <>
      <label id="font-dropdown-label" data-testid="font-dropdown-label">
        Select font style
      </label>
      <div>
        {/* TODO: Update active descendant when user change page font */}
        <div
          aria-activedescendant=""
          aria-controls="font-listbox"
          aria-expanded={isOpen}
          aria-labelledby="font-dropdown-label"
          aria-haspopup="listbox"
          data-testid="font-dropdown"
          role="combobox"
          tabIndex={0}
          onClick={onComboboxClick}
        >
          {selectedFont}
        </div>

        {
          isOpen && (
            <div
              id="font-listbox"
              aria-labelledby="font-dropdown-label"
              role="listbox"
              tabIndex={-1}
            >
              {/* TODO: Take list items from font context */}
              {
                ['Sans Serif', 'Serif', 'Mono'].map(font => (
                  <div
                    key={font}
                    aria-selected="false"
                    role="option"
                    data-testid={`font-dropdown-item-${font.split(' ').join('-').toLowerCase()}`}
                    onClick={() => onListItemClick(font)}
                  >
                    {font}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}

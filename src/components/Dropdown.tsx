

export const Dropdown = () => {
  return (
    <>
      <label id="font-dropdown-label">
        Select font style
      </label>
      <div>
        <div
          aria-controls="font-listbox"
          aria-expanded="false"
          aria-labelledby="font-dropdown-label"
          aria-haspopup="listbox"
          data-testid="font-dropdown"
          role="combobox"
          tabIndex={0}
        >
          {/* TODO: Set active font */}
        </div>

        <div
          id="font-listbox"
          aria-labelledby="font-dropdown-label"
          role="listbox"
          tabIndex={-1}
        >
          {/* TODO: Render list items */}
        </div>
      </div>
    </>
  )
}

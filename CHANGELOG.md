# RELEASE NOTES

## 1.5.0

### ADDED

- Card block
- Effect Panel
- Loot Panel
- Trap Panel

### CHANGED

- Bonus panel is now Cyan
- Heading and Title Text Styles can now be selected on paragraphs. Useful for pre-formatting.

### FIXED

- Font Awesome icons now display in edit mode

## 1.3.1 - Toolbar and Font sizes and Parity

### CHANGED

- Combined some toolbar icons into 3 groups so it doesn't require as much horizontal real estate yet provides more options:
  - Format (bold italic underline strikethrough forecolor backcolor superscript subscript removeformat)
  - Paragraph ('h1 h2 h3 bullist numlist alignleft aligncenter alignright indent outdent)
  - Insert (link anchor image table hr template)
- Set more reasonable default font sizes for the Stylish Text (Thanks weepingminotaur for the idea)
- Added margin spacing around the block elements so they dispolay nicer when one right after another, plus minor styling tweaks

### FIXED

- Remove the separators from the toolbar to prevent TinyMCE from truncating. This prevents the persistent display of the toolbar when closing the journal dialog (Thanks SecretSquirrel77)

## 1.2.1 - Spacing Fix

### CHANGED

- Add paragrpah tags at the end of all templates so the user can continue to work below them easily.

## 1.2.0 - Parchment Setting

### ADDED

- Added a setting to enable/disable the parchment background (Thanks KSMI for the request)

### CHANGED

- Made the panels more vibrant so they stand out more
- Added localization for the settings panel
- Modified the names of the Stylish Text to be more in line with standard naming conventions (Thanks weepingminotaur for the idea)
- Removed size settings for the Stylish Text to prepare for future changes and consistency

### FIXED

- Removed a leftover from another project. Whooops! (Thanks SecretSquirrel77 for pointing it out)
- Fixed more font naming (Thanks SecretSquirrel77 for pointing it out)

## 1.1.0 - Tweak The Things

### ADDED

- Use CSS variables throughout

### CHANGED

- Styled Entity Links
- Tweak box shadows

### FIXED

- Corrected Magic Item background and reference

## 1.0.0 - Initial Feature Set Complete

### ADDED

- Add parchment background
- Added :bug: Bug Report support

### CHANGED

- Tweaked stylings for some elements
- Better organized the toolbar
- Organizaed the file structure better for smaller download but more imagery
- Updated Package Manifest+ to comply with the latest standard to work correctly with Module Manager+

## 0.9.6 - Newbie Tweaks

### CHANGED

- Updated the CSS references capitalization of the ScalySans folder. Hopefully this corrects [[Issue #1](https://github.com/AmazingVanish/apsj/issues/1)]
- Changed image references in README and module.json to use github raw links
- Changed the format of the CHANGELOG file to be more attractive and readable
- Updated the description in the module.json to use the full description text instead of the short About text

## 0.9.5 - Initial Public Release

### ADDED

- First published package via Foundry VTT

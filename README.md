# Colour Palette Prototype

A small colour exploration tool for generating, reviewing and copying palette values.

## Highlights

- Generate five fresh colour values at a time
- Copy one swatch or the full palette to the clipboard
- Provide visible status feedback after clipboard actions
- Keep the swatches readable across light and dark colours
- Reflow the layout for smaller screens

## Technical approach

The project combines a deterministic rendering pass with the browser Clipboard API. Each swatch is a real button, so the main interaction works with a keyboard as well as a pointer.

## Run locally

Open index.html in a modern browser. No build step is required.

This project focuses on the small details that make a visual utility feel complete: clear actions, useful feedback and a compact responsive layout.

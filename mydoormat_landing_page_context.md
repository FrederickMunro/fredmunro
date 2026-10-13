# MyDoormat --- Landing Page Agent Context

## Purpose

Build a polished, responsive landing page for **MyDoormat**, using the
attached *MyDoormat Brand Guidelines / Brand Book* as the source of
truth for the visual identity.

Treat this file as the implementation brief. If a detail is not
specified below, use good product-design judgment without inventing
company claims, features, pricing, testimonials, statistics, or
policies. Keep copy easy to replace.

## Brand identity

-   **Brand name:** MyDoormat
-   **Brand feel:** modern, clean, professional, approachable, and
    contemporary.
-   **Logo structure:** the primary logo combines the logo mark and
    logotype stacked vertically. The brand book says this version suits
    layouts with enough horizontal space for its taller shape.
-   **Logo mark:** may be used on its own where a compact brand
    identifier is needed.
-   **Logo variants:** full-colour and monochromatic variants are
    defined in the brand book. Use the light logo on very dark or black
    backgrounds. Prefer placing the logo on a white or black background
    for contrast.
-   **Logo clear space:** preserve breathing room around the logo; do
    not crowd it with text, controls, or other graphics.
-   **Never:** stretch the logo horizontally or vertically, rotate it,
    outline it, add a drop shadow or stroke, change its colours, or add
    coloured labels to it.

### Logo asset placeholders

The actual assets will be placed in the project's `image/` folder. Use
these filenames and paths; I will name the files accordingly:

-   `image/mydoormat-logo.png` --- primary full-colour stacked logo
-   `image/mydoormat-logo-light.png` --- light logo for dark backgrounds
-   `image/mydoormat-logo-monochrome.png` --- monochromatic full logo
-   `image/mydoormat-mark.png` --- full-colour logo mark
-   `image/mydoormat-mark-monochrome.png` --- monochromatic logo mark

If the exact variant is not available, use the closest supplied official
asset. Do not recreate, recolour, distort, or approximate the logo in
CSS.

## Colour palette

Use the brand colours below as design tokens. Keep the primary interface
anchored in deep teal, with mint/green accents and generous neutral
space. Use status colours only for their intended functional meaning.

### Primary colours

  -----------------------------------------------------------------------
  Name                    Hex                     Suggested role
  ----------------------- ----------------------- -----------------------
  Midnight                `#0A3A3A`               Deep brand background,
                                                  dark sections,
                                                  high-contrast areas

  Midnight (mid tone)     `#1E6262`               Supporting teal tone

  Midnight (light tone)   `#4B8B8B`               Muted teal, subtle
                                                  emphasis

  Mint                    `#01B381`               Primary brand accent /
                                                  important calls to
                                                  action

  Mint (mid tone)         `#22CB9C`               Secondary accent

  Mint (light tone)       `#70E2C2`               Soft accent

  Mint pale               `#BCDDDD`               Pale teal surface

  Mint very pale          `#D7F4EC`               Soft tinted surface

  Teal                    `#008091`               Alternate teal accent

  Light Green             `#69E56F`               Bright accent; use
                                                  sparingly
  -----------------------------------------------------------------------

The brand book's primary-colour page visually groups the colours into
Midnight, Mint, Teal, and Light Green families. The hex values above are
transcribed from the brand book.

### Secondary / system colours

  Name                Hex         Intended use
  ------------------- ----------- -----------------------------------
  Error               `#EC4D26`   Errors only
  Error light         `#ED785B`   Softer error state
  Error pale          `#F7A692`   Error background
  Error very pale     `#FFECE8`   Error surface
  Success             `#01B381`   Success states
  Success light       `#22CB9C`   Softer success accent
  Success pale        `#70E2C2`   Success surface
  Success very pale   `#D7F4EC`   Success background
  Warning             `#F9A620`   Warnings only
  Warning light       `#FDBD55`   Softer warning accent
  Warning pale        `#FFD591`   Warning surface
  Warning very pale   `#FFF7EB`   Warning background
  Link / Info         `#00A7E1`   Informational links or indicators
  Link / Info light   `#3AC1F0`   Softer informational accent
  Link / Info pale    `#85DEFD`   Informational highlight
  Info very pale      `#F0F4F9`   Informational surface

### Neutral colours

  Name                 Hex
  -------------------- -----------
  Black                `#000000`
  Neutral dark         `#3A3A3A`
  Neutral mid-dark     `#575757`
  Neutral mid          `#7A7A7A`
  Neutral light-mid    `#A2A2A2`
  Neutral light        `#C0C0C0`
  Neutral lighter      `#D2D2D2`
  Neutral very light   `#E9E9E9`
  White                `#FFFFFF`
  Neutral 1            `#BCDDDD`
  Neutral 2            `#E6F3F3`
  Neutral 3            `#F0F4F9`
  Neutral 4            `#D7F4EC`
  Neutral 5            `#FFF7EB`
  Neutral 6            `#FFECE8`

The brand book describes neutrals as appropriate for understated
backgrounds, dividers, and interface elements that should support
content without competing for attention.

## Typography

-   **Typeface:** Aeonik.
-   **Available weights identified in the brand book:** Aeonik Regular
    and Aeonik Bold.
-   Use Aeonik for headings, body text, navigation, buttons, and
    interface labels if the font files are available and licensed for
    the project.
-   If Aeonik font files are not provided, use a close modern sans-serif
    fallback and keep the font stack easy to change. Do not assume that
    Aeonik is available from a public font CDN.

### Brand-book type scale

  Style        Weight      Size   Line height
  ------------ --------- ------ -------------
  H1           Bold        64px          100%
  H2           Bold        48px          100%
  H3           Regular     40px          120%
  H4           Regular     32px          120%
  Subheading   Regular     27px          120%
  Body Big     Regular     24px          135%
  Body         Regular     18px          135%
  Body Bold    Bold        18px          135%
  Small        Regular     14px          135%

Use this as the desktop reference scale, but adapt responsively on
smaller screens. Keep headings readable and avoid forcing 64px headings
onto narrow mobile layouts.

## Image assets

All image assets will be stored in the **`image/`** folder at the
project root. Use the following filenames exactly in the code. I will
create and name the files to match.

Suggested landing-page photography / visual assets:

-   `image/hero-lifestyle.jpg` --- main hero photograph; choose a
    strong, welcoming image that communicates the product's real-world
    context.
-   `image/product-detail.jpg` --- close-up/detail image of the product.
-   `image/lifestyle-entryway.jpg` --- lifestyle image showing the
    product in use.
-   `image/feature-durability.jpg` --- visual supporting a
    durability/quality section, only if that feature is confirmed.
-   `image/feature-design.jpg` --- visual supporting a design/style
    section.
-   `image/how-it-works.jpg` --- supporting image for an explainer
    section, if needed.
-   `image/social-proof-1.jpg` --- first customer/lifestyle image, if
    genuine usable content is available.
-   `image/social-proof-2.jpg` --- second customer/lifestyle image, if
    genuine usable content is available.
-   `image/favicon.png` --- favicon/app icon if supplied.
-   `image/og-image.jpg` --- social sharing image for Open Graph, if the
    project includes social metadata.

Do not reference every image just because a filename is listed. Use only
assets that fit the final layout. If an image is not supplied yet, keep
the intended filename in the code and use a graceful fallback or a
neutral placeholder during development. Do not use broken-image icons or
make the page depend on remote stock images.

If the product category or exact product appearance is unclear from the
rest of the project, do not invent visual specifics. Build the layout so
images and text can be replaced easily.

## Landing-page design direction

-   Make the result feel like a real, carefully art-directed brand
    website---not a generic SaaS template.
-   Use a strong hero with a clear headline, short supporting copy, one
    primary call to action, and an appropriate hero image.
-   Use the brand palette consistently. A good default is white or very
    pale neutral backgrounds, deep Midnight teal for strong contrast,
    and Mint for primary interactive emphasis.
-   Use whitespace, deliberate alignment, restrained borders, and clear
    hierarchy.
-   Use cards only when they help explain distinct content. Avoid
    excessive rounded cards, gradients, shadows, decorative blobs, and
    unnecessary animation.
-   Preserve sufficient contrast for all text and interactive elements.
-   Use accessible semantic HTML, visible keyboard focus, descriptive
    image alt text, and correctly labelled form fields.
-   Make navigation, buttons, forms, and any interactive elements work.
    Do not create decorative controls that appear functional but do
    nothing.
-   Build mobile-first or ensure excellent responsive behaviour across
    mobile, tablet, and desktop.
-   Respect reduced-motion preferences if motion is used.
-   Avoid adding unverified claims, fake reviews, invented customer
    logos, made-up metrics, unsupported guarantees, or fictional
    pricing.

## Suggested page structure

Use this as a starting point, not a requirement to include every
section:

1.  **Header:** official logo, concise navigation, and a clear primary
    CTA.
2.  **Hero:** compelling outcome-oriented headline, brief supporting
    copy, primary CTA, and hero image.
3.  **Value proposition:** a short explanation of what MyDoormat is and
    why the intended customer should care. Use project-provided facts;
    do not invent product capabilities.
4.  **Benefits / features:** a small number of clear benefits, each with
    concise copy and suitable imagery or icons. Include only benefits
    supported by project materials.
5.  **How it works:** simple steps if the product or service has a real
    process worth explaining.
6.  **Product / lifestyle showcase:** use the supplied images to help
    visitors understand the offering.
7.  **Trust section:** use only genuine testimonials, reviews,
    certifications, or other proof if supplied.
8.  **FAQ:** include only useful, answerable questions; keep answers
    easy to update.
9.  **Final CTA:** repeat the main conversion action with concise copy.
10. **Footer:** logo, relevant links, and any real contact/legal/social
    information supplied by the project.

Do not force all sections into the page. Prioritize a focused landing
page and a clear conversion path.

## Copy and conversion rules

-   Write concise, specific, natural copy.
-   Keep one primary conversion goal throughout the page.
-   Make the primary CTA's wording consistent.
-   Use secondary CTAs only when they support a real alternate path.
-   Do not invent what MyDoormat sells, its audience, shipping terms,
    prices, guarantees, product materials, technical specifications, or
    business history. Look for that information in the repository or ask
    me if it is missing.
-   If some copy must be provisional, mark it clearly in code or content
    data so I can replace it easily.

## Implementation guidance

1.  Inspect the existing repository before changing files. Reuse the
    current framework, package manager, routing, and styling conventions
    rather than introducing a new stack without asking.
2.  Check the current app entry point and existing components before
    creating duplicates.
3.  Keep content and asset paths easy to update.
4.  Use reusable components where useful, but do not over-engineer a
    single landing page.
5.  Keep CSS variables/design tokens for the brand palette and
    typography in one place.
6.  Use the exact local image paths listed in this brief, with `image/`
    as the directory name (singular).
7.  Add responsive breakpoints and test narrow and wide layouts.
8.  Run the existing lint, type-check, and build commands when
    available. Fix errors caused by the changes.
9.  Do not delete existing functionality or overwrite unrelated project
    files.
10. Summarize the files changed, the design choices, any assets still
    needed, and any tests/build commands run.

## Suggested CSS tokens

``` css
:root {
  --color-midnight: #0A3A3A;
  --color-midnight-mid: #1E6262;
  --color-midnight-light: #4B8B8B;
  --color-mint: #01B381;
  --color-mint-mid: #22CB9C;
  --color-mint-light: #70E2C2;
  --color-teal: #008091;
  --color-light-green: #69E56F;

  --color-error: #EC4D26;
  --color-warning: #F9A620;
  --color-info: #00A7E1;

  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-neutral-dark: #3A3A3A;
  --color-neutral-mid: #7A7A7A;
  --color-neutral-light: #C0C0C0;
  --color-neutral-surface: #F0F4F9;

  --font-family-brand: "Aeonik", "Helvetica Neue", Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  --radius-control: 8px;
  --content-width: 1200px;
}
```

These CSS tokens are implementation suggestions based on the brand book,
not additional official brand specifications.

## Source notes

This brief is based on the uploaded **MyDoormat Brand Guidelines / Brand
Book**. The book specifies the logo rules, colour palette, Aeonik
typeface, font weights, and typography scale. It does **not** specify
the product offering, target audience, actual landing-page copy,
pricing, conversion goal, testimonials, or product photography. The
agent must inspect the repository for those details and must not
fabricate them.

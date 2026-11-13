# DESIGN.md

The single source for every visual decision on Oluwafunto Abimbola's site. Status: APPROVED by her on 2026-11-13.

Rule of the merge: **her brand wins on colours and fonts. The references win on layout and feel.**

## 1. Sources

### Brand kit

No separate brand kit file was supplied. The colours and fonts below are taken from her existing site, oluwafuntoa.netlify.app, and treated as the brand. (Assumption, see decision D1.)

### References (Refero Styles)

| # | Reference | Theme | What we take from it |
|---|---|---|---|
| R1 | Resend | Dark | One large serif headline as the whole hero. Hairline 1px borders instead of shadows. Ghost buttons. Restraint. |
| R2 | Branding (SVZ) | Dark | Oversized display type carrying the hierarchy. Italic serif words set against roman. Tiny tracked uppercase labels. One rare accent used like punctuation. Diagonal arrow (↗) on links. Light sections that feel like turning a page. |
| R3 | ORYZO AI | Warm dark | Warm near-black, never pure black. Cream text, never pure white. Dashed hairline dividers. Pill controls. Lots of empty space. |
| R4 | Studio.Design | Light | Very large, tightly set statements beside small, compact navigation. Quiet chrome so the content supplies the colour. Photo collage that breaks the grid. |
| R5 | Function | Warm light | Parchment surfaces, serif headlines mixing roman and italic, terracotta as a single seal-like accent. Closest to her existing brand. |

What the five share, and so what this site must have: very large type with tight leading, one accent colour used rarely, borders instead of shadows, quiet buttons, and generous space.

## 2. Feel

A printed policy journal with a gallery's confidence. Warm dark openings, cream reading pages, one terracotta mark per screen. Type does the work. Nothing decorative that is not hers: no stock images, no invented logos, no icons standing in for proof.

## 3. Colours

All colours come from her existing site. No reference colours are used.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#171412` | Dark section background. Body text on light sections. |
| `--ink-deep` | `#0E0C0B` | Footer and deepest surface. |
| `--ink-line` | `#2A2522` | Hairline borders and dividers on dark sections. |
| `--cream` | `#FAF6EF` | Light section background. Text on dark sections. |
| `--paper` | `#F1E9DC` | Cards and panels on light sections. |
| `--sand` | `#E6DCCD` | Hairline borders and dividers on light sections. |
| `--stone` | `#6B6360` | Muted text and metadata on light sections. |
| `--terracotta` | `#B85C38` | The accent. Large display words, arrows, dots, rules, hover states. |
| `--terracotta-deep` | `#8C3E21` | Accent for small text on light sections (passes contrast). |
| `--terracotta-soft` | `#E48A62` | Accent for small text on dark sections (passes contrast). |
| `--forest` | `#3D5A47` | Second colour, used only for status tags such as "Accepted" and "Published". |

Rules:

- Never pure black or pure white. Dark is `--ink`, light is `--cream`. (R3, R5)
- Terracotta is punctuation. At most one terracotta headline word and one or two small terracotta marks per screen. Never a large filled area. (R2, R3)
- `--terracotta` at its base value is for text 24px and larger or for non-text marks. Small accent text uses the deep or soft variant so it stays readable.
- Muted text on dark sections is `--cream` at 70% opacity.
- No gradients. No glows. (R1, R2)

## 4. Fonts

| Role | Font | Weights | Use |
|---|---|---|---|
| Display | Playfair Display | 400 roman, 400 italic | Headlines only. |
| Text | Inter | 400, 500, 600 | Body, navigation, buttons, labels. |

Fonts are self-hosted with the site. No font service embed.

The signature move, taken from R2 and R5: one or two words in each headline are set in Playfair italic and coloured terracotta, the rest in roman. Example: "I help close the gap between inclusion policy and *the classroom.*" Emphasis only on words already in COPY.md. Never add words.

### Type scale

| Token | Size (desktop → mobile) | Line height | Tracking | Font |
|---|---|---|---|---|
| `display` | 96px → 44px | 1.0 | -0.02em | Playfair 400 |
| `h1-page` | 72px → 40px | 1.05 | -0.02em | Playfair 400 |
| `h2` | 48px → 32px | 1.1 | -0.01em | Playfair 400 |
| `h3` | 24px → 20px | 1.25 | 0 | Inter 600 |
| `lead` | 22px → 19px | 1.5 | -0.01em | Inter 400 |
| `body` | 18px → 17px | 1.65 | 0 | Inter 400 |
| `small` | 15px | 1.5 | 0 | Inter 400 |
| `label` | 12px | 1.2 | +0.14em, uppercase | Inter 500 |
| `numeral` | 72px → 48px | 1.0 | -0.02em | Playfair 400 |

Sizes scale fluidly between mobile and desktop. Reading text is never wider than 68 characters.

## 5. Spacing and shape

- Base unit: 8px. Scale: 8, 16, 24, 32, 48, 64, 96, 128.
- Page max width: 1200px. Side gutter: 24px on mobile, 48px on desktop.
- Section gap: 128px on desktop, 72px on mobile. (R1, R5 at the generous end)
- Card padding: 32px. Element gap: 16px.
- Radius, two values only: 999px for buttons and tags, 16px for cards and photos. (R1's two-value discipline, R3 and R5's pills)
- Borders: 1px. Solid for cards and inputs. Dashed for dividers between sections. (R1, R3)
- Shadows: none. Layers are separated by borders and by the cream/paper/ink surface steps. (R1, R2, R5)

## 6. Layout

- **Page rhythm.** Every page opens on a dark `--ink` hero, then turns to cream for reading, and closes on a dark call-to-action band above the footer. Moving from dark to cream should feel like turning a page. (R2)
- **Home hero.** Fills the first screen. Small tracked label, then the headline at `display` size, opening paragraph at `lead` size, two buttons. Her portrait sits to the right on desktop and below on mobile. Nothing else. (R1, R4)
- **Inner page heroes.** Shorter. Label, `h1-page` headline, lead paragraph.
- **Grid.** 12 columns. Text blocks sit in 7 or 8 columns and are deliberately off-centre, leaving empty columns as breathing room. (R2, R4)
- **Section label.** Each section starts with a numbered tracked label, such as "01 · THE PROBLEM", above its heading. (R2)
- **Lists as ledgers.** Publications, talks, experience and awards are rows separated by hairlines: year in the left column, title and detail in the middle, link or status on the right. No cards for these. (R1, R2)
- **Mobile.** One column. Ledger rows stack with the year on top. Navigation collapses to a menu button. All tap targets at least 44px high.

## 7. Components

**Navigation.** Her name in Playfair at left, page links in Inter 15px at right, "Email me" as a small ghost pill. Transparent over the hero, then solid with a hairline bottom border once scrolled. Current page marked with a terracotta dot. (R4)

**Buttons.** Pills, 999px radius, 14px by 28px padding, Inter 16px 500.
- Primary: on dark sections, cream fill with ink text. On light sections, ink fill with cream text.
- Ghost: transparent, 1px border in the section's text colour.
- Every button and standalone link ends with ↗. On hover the arrow turns terracotta and shifts 2px up and right. No colour fill on hover. (R1, R2)
- Terracotta is never a button fill. (R1, R2, R3, R4. R5 disagrees, see D6.)

**Text links.** Underlined with a 1px terracotta line, 4px below the text.

**Label / eyebrow.** `label` style, with a small terracotta dot before it.

**Tags.** Pill, 1px border, `label` style. Status tags ("Published", "Accepted", "Under review", "In preparation") use `--forest` for published and accepted, `--stone` for the others.

**Stat block.** Large Playfair numeral with a short Inter caption beneath, four across on desktop and two across on mobile, divided by hairlines. Used only for the four numbers in COPY.md.

**Ledger row.** See Layout. Hover: the title shifts 4px right and the arrow turns terracotta.

**Card.** Used only for the three "sides" on Home, the two ideas on Research, the topics on Speaking and "Where I can help" on Programmes. `--paper` fill on light sections, 1px `--sand` border, 16px radius, 32px padding, numbered label at the top.

**Name strip.** The "Where the work has appeared" list is set as one line of Playfair italic names separated by terracotta dots. Text only. No logos, ever.

**Pull statement.** One sentence at `h2` size on a dark band, used for "That gap is where I work."

**Photos.** Hers only. 16px radius, no shadow, no filter beyond the original. On Home and About, two or three photos may overlap slightly, off the grid, as a collage. (R4)

**Footer.** `--ink-deep`. Her name very large in Playfair across the full width, then links and the copyright line in `small`. (R2)

## 8. Motion

- Headline and lead fade up 12px over 500ms on page load. (R1)
- Sections fade up once as they enter the screen.
- Hover transitions 150ms ease-out. (R1)
- No autoplay, no scrolling marquees, no parallax, no cursor effects.
- All motion is switched off for visitors who have "reduce motion" set on their device.

## 9. Accessibility and performance

- Text contrast at least 4.5 to 1, and 3 to 1 for text 24px and larger.
- Visible keyboard focus: 2px terracotta outline, 3px offset.
- One H1 per page. Headings in order. Every photo has descriptive alt text.
- Static pages, self-hosted fonts, compressed images, no third-party scripts or embeds.

## 10. Do and don't

Do:
- Let type size carry the hierarchy.
- Keep terracotta rare.
- Leave empty columns empty.
- Use hairlines to separate, not boxes or shadows.

Don't:
- No invented logos, press mentions, testimonials or statistics.
- No stock photos or stock icons.
- No pure black, pure white, gradients or shadows.
- No terracotta buttons or terracotta backgrounds.
- No copy that is not in COPY.md.

## 11. Decision log

Every design choice gets recorded here, newest at the bottom.

| # | Date | Decision | Why | Status |
|---|---|---|---|---|
| D1 | 2026-11-13 | Brand colours and fonts are taken from her existing site (terracotta `#B85C38`, cream, warm ink, forest; Playfair Display and Inter). | She referred to a brand kit but attached none. The existing site is the only record of her brand. | Confirmed 2026-11-13 |
| D2 | 2026-11-13 | Pages open dark and turn to cream, instead of the all-cream look of her existing site. | Three of her five references are dark and R2 uses light sections as a page turn. References win on feel. Her own ink and cream colours make both modes. | Approved 2026-11-13 |
| D3 | 2026-11-13 | Headlines mix Playfair roman with terracotta italic words. | Signature of R2 and R5, and R1 uses a serif hero. Uses her own font. | Approved 2026-11-13 |
| D4 | 2026-11-13 | Caveat, the handwriting font on her existing site, is not used. | None of the references use a script face, and it works against the authority the site is meant to build. | Approved 2026-11-13 |
| D5 | 2026-11-13 | No shadows. Hairline borders and surface steps only. | R1, R2, R3 and R5 all separate layers this way. | Approved 2026-11-13 |
| D6 | 2026-11-13 | Buttons are cream or ink pills. Terracotta is never a button fill. | Four of five references refuse accent-coloured buttons. Also, cream text on `#B85C38` falls just short of the 4.5 to 1 contrast needed for button text. | Approved 2026-11-13 |
| D7 | 2026-11-13 | Radius has two values: 999px and 16px. | The references disagree (6 to 40px). R1's two-value rule keeps it consistent, and pills come from R3 and R5. | Approved 2026-11-13 |
| D8 | 2026-11-13 | Publications, talks and experience are hairline ledger rows, not cards. | Long factual lists read faster as rows, and R1 and R2 favour lines over boxes. | Approved 2026-11-13 |
| D9 | 2026-11-13 | Two extra accent shades, `#8C3E21` and `#E48A62`, are used for small accent text. | Base terracotta is not readable enough at small sizes on cream or on ink. Both shades already exist on her site. | Approved 2026-11-13 |
| D10 | 2026-11-13 | The scrolling marquees, shuffle cards and draggable photos from her existing site are dropped. | References favour stillness and restraint. Motion is limited to fades. | Approved 2026-11-13 |
| D11 | 2026-11-13 | "Where the work has appeared" is a text strip, not a logo row. | Hard rule: never invent or borrow logos. | Fixed |
| D12 | 2026-11-13 | Photos from her existing site are reused. | They are the only photos of her available. Credit line for Mountain Photography is kept in the footer. | Confirmed 2026-11-13 |

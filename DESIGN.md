# DESIGN.md

The single source for every visual decision on Oluwafunto Abimbola's site. This is version 2, adopted on 13 November 2026 after she rejected version 1 as too close to her old site. Status: in use.

## 1. Brief

- Unique, engaging and interesting. It must not look like her old site.
- Professional enough for the most senior audience. Her test: the UN Secretary-General's office sees it and says "let's invite her".
- So: confident and warm, never toy-like. Colour and one strong idea carry the personality. No gimmicks.

## 2. The idea: follow the policy

Her research follows one commitment from an international convention down to a classroom and shows where it breaks. The Home page does the same thing on screen. A line runs down a dark panel through five stops: the international convention, Nigerian federal policy, Osun State implementation, the school gate, the classroom. The line is solid and teal at the top, turns dashed and yellow after the federal law (which has no education-specific enforcement), fades to dots after the school gate, and ends in an empty dashed circle at the classroom. It draws itself as the visitor scrolls. This is the one thing on the site no other researcher's site could have.

## 3. Colours

| Token | Value | Use |
|---|---|---|
| `--cream` | `#FFF3DC` | Page background. Text on dark panels. |
| `--ink` | `#1B1B1B` | Text. Dark panels: the journey, closing bands, footer. |
| `--red` | `#E4002B` | Primary buttons, small labels, the greeting. |
| `--teal` | `#007C89` | Journey line, second card colour, "accepted" tags. |
| `--teal-deep` | `#0A5C66` | Pattern stripe. |
| `--yellow` | `#FFB703` | Marker stroke under headline emphasis, first card colour, name strip, accents on dark. |
| `--white` | `#FFFFFF` | Small surfaces: tags, pills, the fourth card colour. |
| `--stone` | `#5F574D` | Muted text on cream. |

Rules:

- Red, teal and yellow appear as solid blocks of colour on cards and number tiles. That is where the energy comes from.
- White text on red and on teal, ink text on yellow and white. All pairs meet the 4.5 to 1 contrast level.
- No gradients, no shadows, no glows.

## 4. Fonts

| Role | Font | Use |
|---|---|---|
| Display | Fraunces (variable, weight 600, italic for emphasis) | Headlines, card titles, numerals, the name strip, the greeting. |
| Text | DM Sans (variable) | Body, navigation, buttons, labels. |

Both are self-hosted. No handwriting font.

Emphasis: one or two words in a headline are set in Fraunces italic with a yellow marker stroke behind the lower third of the letters. On dark panels the emphasised words are yellow italic with no stroke. Emphasis only on words already in COPY.md.

Type scale (desktop to mobile): display 88 to 41px, page headline 72 to 38px, section headline 48 to 30px, card title 26 to 21px, lead 21 to 18px, body 18 to 16.5px, label 12px uppercase with 0.14em tracking.

## 5. Spacing and shape

- Base unit 8px. Page max width 1200px. Gutter 20 to 48px. Section gap 64 to 120px.
- Borders: 1.5px ink lines. No shadows.
- Radius: 999px for buttons, tags and pills. 18px for cards, tiles and photos. The Home portrait sits in an arch.
- Nothing is rotated or tilted.

## 6. Layout

- Pages open on cream with the headline. Dark ink panels are used for the journey, the closing call to action and the footer.
- Home hero: greeting, headline, opening paragraph, two buttons, with the portrait in an arch to the right and three pills naming her three sides of work. Both buttons are visible without scrolling on laptop and phone.
- Section label: small red uppercase label with a number, above each heading.
- Long factual lists (publications, talks, experience, awards) are ruled rows: date at left, title in Fraunces, link or status tag at right.
- Mobile: one column. Rows stack. Tap targets at least 44px high.

## 7. Components

- **Navigation.** Name in Fraunces at left, links at right, "Email me" as an outlined pill. Current page has a yellow underline. On phone, a Menu button opens a full-screen ink panel.
- **Buttons.** Pills. Primary: red with white text. Secondary: outlined. Each ends with an arrow. Hover lifts the button 2px.
- **Cards.** Solid colour blocks cycling yellow, teal, red, white. Hover lifts the card 4px.
- **Number tiles.** Same colour cycle, large Fraunces numeral, short caption. Numbers count up when first seen.
- **Journey.** See section 2. Each stop has a dot on the line, a small "Stop n" label, a Fraunces title and a boxed sentence.
- **Name strip.** Yellow band with journal and conference names in Fraunces italic, separated by a red mark, scrolling slowly. Text only, never logos.
- **Pattern strip.** A thin band of teal diagonal stripes with yellow dots, above the footer. It is the one decorative element and nods to West African textile pattern.
- **Tags.** White pills with ink border. Status tags: teal for accepted or published.
- **Photos.** Hers only, 18px radius, 1.5px ink border. See decision D16 for which are used.
- **Footer.** Ink. Her name very large in Fraunces with the surname in yellow italic.

## 8. Motion

- Headlines rise in line by line, then the yellow marker stroke draws across the emphasised words.
- The journey line draws stop by stop as the visitor scrolls. Each dot pops in and its text slides in.
- Sections, cards and rows fade up, slightly staggered. The three pills beside the portrait pop in one after another.
- Numbers count up. The name strip scrolls slowly and pauses on hover.
- Navigation hides on the way down and returns on the way up. Pages cross-fade.
- Not used: dragging, tilting, flipping, custom cursors, 3D, sound.
- All motion is off for visitors who have "reduce motion" set, and everything is readable with JavaScript off.

## 9. Do and don't

Do: let the journey be the centrepiece. Use colour in solid blocks. Keep lines thin and shapes clean.

Don't: no invented logos, press mentions, testimonials or statistics. No stock photos. No handwriting, stickers, tilted or draggable elements. No copy that is not in COPY.md.

## 10. Decision log

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
| D10 | 2026-11-13 | The shuffle cards and draggable photos from her existing site are dropped. (Amended by D13: one slow name strip is kept.) | They are toys, not information. | Approved 2026-11-13 |
| D11 | 2026-11-13 | "Where the work has appeared" is a text strip, not a logo row. | Hard rule: never invent or borrow logos. | Fixed |
| D12 | 2026-11-13 | Photos from her existing site are reused. | They are the only photos of her available. Credit line for Mountain Photography is kept in the footer. | Confirmed 2026-11-13 |
| D13 | 2026-11-13 | Motion raised from calm to lively: masked headline reveals, staggered scroll reveals, counting numbers, photo drift, a slow name strip, hide-and-show navigation, page cross-fades. No 3D, no custom cursor. | She asked whether the site would move like her references and left the level to me. The references move a lot, but she needs research readers on phones to read comfortably. | Approved 2026-11-13 (her discretion to me) |
| D14 | 2026-11-13 | Photo placement: pinstripe suit on Home, maroon suit on Speaking, red blazer and desk photo on About, pleated dress beside her story, red blazer close-up on Contact. The tulle, heart-pose and street photos are not used. | The formal portraits suit the authority the site is building. The unused three are the most playful. Easy to swap. | Proposed |
| D15 | 2026-11-13 | All photos taken from her old site are removed. The site uses six photos she supplied herself: HSE graduation with diploma (Home), flags and advocacy T-shirt (Programmes, wide), graduation gown from behind and a glasses close-up (About hero), Ankara dress (About story), glasses close-up (Contact). Speaking has no photo. Supersedes D12 and D14. | She asked for real photos in place of AI-made ones. No photo of her presenting was supplied, so Speaking carries none. Footer credit is now Island Photography, whose mark is on the gown photo. | Approved 2026-11-13 |
| D16 | 2026-11-13 | Three photos removed: both glasses close-ups and the Ankara dress screenshot. Kept: HSE graduation (Home, and cropped on About), flags and advocacy T-shirt (Programmes), graduation gown from behind (About). Contact and Speaking carry no photo. | She asked that any photo not fitting a professional site be left out. The close-ups are casual selfies and the Ankara image is a small, tilted screenshot. | Approved 2026-11-13 (her instruction) |
| D17 | 2026-11-13 | Version 1 of the design is retired: the cream, terracotta and Playfair look, and the dark opening screens. Decisions D1 to D11 and D13 describe version 1 and no longer apply. | After seeing the live site she said it looked like her old website and had nothing unique, fun or engaging. Version 1 had copied the old site's colours and fonts as "her brand". | Approved 2026-11-13 |
| D18 | 2026-11-13 | Version 2 direction: a mix of "Follow the policy" (the journey line) and "Bold and warm" (red, teal, yellow on cream, Fraunces and DM Sans). | She chose "Mix A and B" from three mockups. | Approved 2026-11-13 |
| D19 | 2026-11-13 | The playful parts of the "Bold and warm" mockup are left out: draggable stickers, handwriting font, tilted cards, thick outlines and hard shadows. In their place: three static pills beside the portrait, thin borders, flat colour blocks. "Hi, I'm Funto." stays, set in Fraunces italic. | Straight after choosing, she asked that everything stay professional because the UN Secretary-General's office may see it. | Approved 2026-11-13 (her instruction) |
| D20 | 2026-11-13 | The Home hero is laid out so both main buttons are visible without scrolling on a laptop and on a phone. | In the live review of version 1 the buttons sat below the first screen. | Done |


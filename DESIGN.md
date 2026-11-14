# DESIGN.md

The single source for every visual decision on Oluwafunto Abimbola's site. This is version 3, adopted on 13 November 2026. Status: in use.

## 1. Brief

- Look and feel like the five sites she chose on Refero: Resend, SVZ (Branding), Oryzo, Studio.Design and Function.
- Professional enough for the most senior audience. Her test: the UN Secretary-General's office sees it and says "let's invite her".
- Unique and engaging. It must not look like her old site.

## 2. What the references actually look like

Versions 1 and 2 were designed from Refero's written descriptions only, because the screenshots were blocked. Version 3 is designed from the screenshots themselves.

| Reference | What is on screen | What this site takes |
|---|---|---|
| Resend | Pure black. One large serif headline at left. A dark 3D object turning slowly at right, lit by soft diagonal light. A small outlined pill above the headline. Two quiet buttons. | The whole opening screen: black canvas, serif headline, pill, light streaks, and a slowly turning 3D object. |
| SVZ (Branding) | Black. Giant type. Huge dark-grey shapes moving slowly in the background. One red dot. Tiny tracked uppercase labels. Arrow links. | The closing "Let's talk." screen with giant type and slow dark shapes. One red accent. Tracked labels. |
| Oryzo | An immersive 3D scene of one object, explained as you scroll. | The pinned journey: the object stays on screen and changes as the visitor scrolls through five stops. |
| Function | A full-screen cinematic photo, an italic serif headline, a row of facts along the bottom edge separated by thin lines, pill buttons. | The row of four facts along the foot of the opening screen. Pill buttons. Photos with a dark fade at the bottom. |
| Studio.Design | Very large tight type beside small navigation. | Scale contrast: very large headlines, small quiet navigation. |

## 3. The centrepiece: five plates

A stack of five dark glass plates floats in space and turns slowly. Each plate is one level a commitment must pass through: the international convention, Nigerian federal policy, Osun State implementation, the school gate, the classroom. The top plates are solid. The lower ones fade. The last is only a dashed outline set apart from the rest, because the commitment never fully arrives there.

On the Home page the stack appears beside the headline, then the next section pins to the screen. As the visitor scrolls, the plates spread apart, each lights up in turn, and the text beside it changes to that stop. At the fifth stop the empty plate glows red and the line "That gap is where I work." appears.

## 4. Colours

| Token | Value | Use |
|---|---|---|
| `--bg` | `#050505` | The canvas, everywhere. |
| `--fg` | `#F4F4F1` | Headlines, primary buttons. |
| `--soft` | `#D0D0CB` | Reading text. |
| `--muted` | `#A6A6A1` | Lead paragraphs, italic headline words, labels. |
| `--dim` | `#73736F` | Dates and numbering. |
| `--line` | white at 12% | Hairlines. |
| `--accent` | `#FF4D5E` | The only colour. Small dots, the fifth plate, "where I work." Never on buttons or large areas. |

## 5. Fonts

| Role | Font | Use |
|---|---|---|
| Display | Gloock | Headlines, large row titles, the name strip, numerals. |
| Text | Hanken Grotesk (variable) | Body, navigation, buttons, labels. |

Both self-hosted. Gloock has no italic, so emphasis in a headline is carried by tone: the emphasised words are set in the muted grey. Emphasis only on words already in COPY.md.

Type scale (desktop to mobile): display 90 to 42px, page headline 88 to 40px, section headline 62 to 32px, closing call up to 132px, lead 20 to 17px, body 18 to 16px, label 11.5px uppercase with 0.18em tracking.

## 6. Layout and components

- **Opening screen (Home).** Fills the screen. Pill, headline, opening paragraph and two buttons at left. The plate stack at right. Four facts along the bottom edge. Soft light falls from the top right.
- **Inner page openings.** Same black and light, label and large serif headline.
- **Navigation.** Name in serif at left, small grey links at right, "Email me" as a glass pill. Turns to blurred glass once scrolled. On phone, a Menu button opens a full black screen of large serif links.
- **Buttons.** Pills. Primary is white with black text. Secondary is dark glass with a thin border.
- **Big rows.** On Home, the three sides of her work are three very large serif titles divided by hairlines, each with a round arrow button.
- **Ruled rows.** Publications, talks, experience and awards: date at left in small caps, title in serif, link or status at right.
- **Glass cards.** Thin border, faint top-down sheen, a soft light that follows the pointer.
- **Name strip.** Journal and conference names in serif italic, scrolling slowly, fading at both edges. Text only, never logos.
- **Closing call.** Giant serif headline over two large dark bars that turn slowly.
- **Photos.** Hers only, 14px radius, thin border, dark fade at the foot.
- **Footer.** Her name very large in serif, surname in dim italic.
- Spacing: 8px base, max width 1240px, section gap 88 to 176px. Hairlines, no drop shadows except the glow on the fifth plate.

## 7. Motion

- The plate stack drifts continuously and leans slightly toward the pointer.
- The journey pins and steps through five stops with the scroll.
- Headlines rise in line by line. Sections come into focus from a slight blur as they enter.
- The four facts count up. The name strip scrolls and pauses on hover. Navigation hides on the way down and returns on the way up. Pages cross-fade.
- For visitors with "reduce motion" set: nothing drifts or animates, and the journey still steps with the scroll. With JavaScript off, the five stops show as a plain list.

## 8. Accessibility and performance

- Text contrast at least 4.5 to 1 on black. Visible red focus outline. One H1 per page. Descriptive alt text.
- The 3D object is built with CSS, not a 3D library, so it adds no download weight. No third-party scripts or embeds.

## 9. Do and don't

Do: keep the black empty. Let one object and one headline hold the screen. Use red once per screen at most.

Don't: no invented logos, press mentions, testimonials or statistics. No stock photos. No second colour. No copy that is not in COPY.md.

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
| D21 | 2026-11-13 | Version 2 (cream with red, teal and yellow blocks) is retired. Decisions D18 to D20 no longer apply. | She said it was nowhere close to the five sites she sent. She was right. |  Approved 2026-11-13 |
| D22 | 2026-11-13 | Version 3 is modelled on the screenshots of her five references: black canvas, serif headline, a turning 3D object, pinned scroll journey, facts row, giant closing type. | Versions 1 and 2 were built from written descriptions because images.refero.design was blocked. With access approved, the references could be seen for the first time. | In use |
| D23 | 2026-11-13 | The 3D object is a stack of five plates standing for the five levels of her policy journey, with the classroom plate as an empty dashed outline. | Resend's object is abstract. Hers should mean something, so the references' signature device also carries her research finding. | In use |
| D24 | 2026-11-13 | One accent colour only, a warm red, used for dots and the final stop. | SVZ and Oryzo both hold a single accent back so it lands when it appears. It also keeps the site formal. | In use |
| D25 | 2026-11-13 | The greeting "Hi, I'm Funto." is removed again and the eyebrow "Inclusive education researcher and programme lead" returns, in a pill. | Matches the references and the senior audience she named. | In use |
| D26 | 2026-11-14 | Fonts changed to Gloock (display) and Hanken Grotesk (text). Instrument Serif and Geist are dropped. | She said the fonts looked like generic AI fonts. That pair is on a great many recent sites. Gloock is heavy, high-contrast and uncommon, and stays legible, which matters on a site about inclusion. Chosen from four pairings rendered side by side. | In use, her confirmation pending |
| D27 | 2026-11-14 | The plate stack on the opening screen now "jumps out": it arrives from deep in the screen, overshoots toward the viewer and fans open, is larger and overlaps the end of the headline, has thickness and throws shadows, can be turned by dragging, and leans as a phone is tilted. At the last journey stop the red plate drops further away. | She asked for something that looks like it jumped out of her phone. | In use |
| D28 | 2026-11-14 | The opening screen now shows her portrait stepping out of a frame: a rounded dark frame with a red glow, with her head and shoulders rising above its top edge. It launches toward the viewer on load, leans with the pointer or a tilted phone, and can be nudged by dragging. The plate stack moves to the journey section only. On phone the order is headline, buttons, portrait, paragraph. | She asked for something that looks like it jumped out of her phone, and sent a cut-out of herself in the red suit. Her suit matches the site's single red accent. Footer credits Mountain Photography, whose mark was on the photo and falls outside the crop. | In use |
| D29 | 2026-11-14 | The opening portrait is replaced with a second cut-out she sent: same suit, hands relaxed at the waist, brighter pink. The first cut-out (arms folded) is kept in the project, unused. | She sent it straight after seeing the first one live, with no message, so I took it as her preferred pose. Credit to Mountain Photography is assumed from the first photo of the same shoot and needs her confirmation. | In use, credit to confirm |
| D30 | 2026-11-14 | She sent a third cut-out, so all three portraits are used, one per page: front-facing with hands at the waist on Home, arms folded on Speaking, the brighter pink one on Contact. Each uses the same step-out-of-the-frame treatment. | Three poses arrived one after another with no message. Speaking and Contact had no photo of her, and repeating one portrait on three pages would look thin. Easy to reshuffle. | In use, her confirmation pending |

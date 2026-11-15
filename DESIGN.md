# DESIGN.md

The single source for every visual decision on Oluwafunto Abimbola's site. This is version 4, adopted on 15 November 2026 from her written brief for an "immersive digital experience". Status: in use.

## 1. Brief

- The site should feel like stepping into her story. Not a portfolio, a CV or a résumé.
- A cinematic opening introduces her before anything else. Visitors then choose where to go, and the camera travels there. No hard page changes inside the experience.
- Calm, intentional, unhurried. Elegant, never cartoonish. Warm Nigerian identity with academic professionalism.
- The visitor should leave thinking: "I want to know more about this person."
- Still true from earlier: it must hold up in front of the most senior audience, and nothing on it may be invented.

## 2. Structure

| Address | What it is |
|---|---|
| `/` | The experience: the opening sequence, then the world of ten chapters. |
| `/home` | The former homepage, now the fuller story: portrait, the five-stop policy journey, timeline, three sides of her work, awards. |
| `/research`, `/speaking`, `/programmes`, `/about`, `/contact` | The detailed pages, linked from the chapters. |

## 3. Colours

| Token | Value | Use |
|---|---|---|
| Deep navy `--navy` | `#0A1830` | Primary. The night sky of the experience, page openings, closing bands, footer. |
| Warm gold `--gold` | `#C9A24B` (soft `#E3C987`) | Secondary. Map lines, drawings, labels, the main "Enter My World" button, lit countries. |
| Soft ivory `--ivory` | `#F6F1E7` | Background of reading sections on the inner pages. Text on navy. |
| Muted terracotta `--terra` | `#B5654A` (soft `#D98A6C`) | Accent. The gap in the policy journey, the chosen country, timeline points. |
| Forest green `--forest` | `#2F5D46` | Supporting. Book spines, "accepted" tags. |
| Slate grey `--slate` | `#6B7785` | Supporting. Book spines, quiet text. |

Navy sections carry ivory text. Ivory sections carry navy text, with terracotta as their accent.

## 4. Fonts

Gloock for headings (large, editorial). Hanken Grotesk for body, labels and buttons. Both self-hosted. Generous white space.

## 5. The opening sequence (about 33 seconds, can be skipped)

1. Near black. Small gold particles drift upward.
2. A world map appears in thin gold lines.
3. The camera moves in on West Africa, then Nigeria, which fills with gold.
4. It continues to Osun State, then Ilesa, marked by a pulsing point and rings.
5. The map dissolves into a line drawing of a workspace that draws itself: desk, books, papers, notes on the wall, a laptop, a cup, a lamp, a classroom through the window.
6. The quote appears in two beats: "Research begins with curiosity." then "Change begins with people." It holds, then fades.
7. Her name, her four roles, and one large gold button: Enter My World.

Rules: the map is drawn from open geographic data at build time. Osun State is shown as a point, not an outline, because the data has no state borders. A "Skip intro" button is always available. The sequence plays once per visit; "Replay intro" brings it back. The very first screen asks one thing: "Begin with sound" or "Begin without sound". With sound, a slow warm chord plays under the whole experience and a soft chime marks each move of the camera, each arrival and each choice. A Sound switch stays available in the opening and in the world.

## 6. The world

After "Enter My World" the camera pulls through the opening into a night-sky scene. Her portrait stands at the centre, "From Ilesa, Nigeria". Ten places sit around her, joined to her by dotted gold threads, each a line drawing in a glass circle:

Library (Research) · University (Education) · Globe (International Experience) · Open Journal (Publications) · Stage (Speaking) · Community (NGO and Social Impact) · Airplane (Travel and Global Work) · Camera (Media) · Briefcase (Professional Experience) · Envelope (Contact)

Hovering lifts and lights a place. Choosing one makes the camera travel into it, and the chapter arrives out of the blur. Arrows move to the next or previous chapter without going back. The browser's Back button returns to the world.

What each chapter shows:

- **Research:** the doctoral study, her two ideas, four counting numbers.
- **Education:** three degrees as rising cards.
- **International Experience:** a turning globe. Thirteen countries are lit. Choosing one turns the globe to it and shows what happened there.
- **Publications:** a bookshelf. Each spine is a publication. Taking a book shows its title, journal, authors, status and link.
- **Speaking:** a lit stage. Six cards rise onto it: four talks and two accepted papers, labelled as such.
- **NGO and Social Impact:** Living Hope Care Society at the centre of a web of six connections (Research, Education, Policy, Community, Faith, Leadership) with moving lines.
- **Travel and Global Work:** seven passport stamps that press in one after another.
- **Media:** Substack, Instagram, her time as a columnist.
- **Professional Experience:** her roles as ruled rows, with Cityscape Concierge first.
- **Contact:** "Pull up a chair." A desk that draws itself (notebook, laptop, coffee), a button to start a conversation and one to copy her email address.

## 7. Phone

The world is not shrunk. The ten places become large cards in a row that the visitor swipes through, starting with her portrait. Tapping a card enters the chapter full screen. Every control is at least 44px high.

## 8. Motion, accessibility and performance

- Everything is slow: camera moves take 3.5 to 4.5 seconds, arrivals about 1.5 seconds.
- Drawings are SVG that trace themselves. The globe and particles are drawn on canvas. No animation libraries, no third-party scripts. The globe's code loads only when that chapter is opened.
- With "reduce motion" set, the opening goes straight to her name and the button, the camera does not travel, and nothing drifts.
- With scripts off, the page is an ordinary document: her name, the quote, and all ten chapters in order.
- Keyboard: every place, book, ticket, country and connection is a real button or link. Escape closes a chapter. Visible gold focus outline.
- The chapter view is announced as a dialog with the chapter's title.

## 9. Decision log

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
| D31 | 2026-11-14 | The portrait is no longer still. She rises out of the frame in slow motion (about four seconds), then floats gently for as long as the page is open. The frame sways slowly behind her, its red glow breathes, a band of light crosses the glass every so often, and a thin orbit with one red point of light circles her, passing behind her and then in front. The quick overshoot launch is removed. | She said the pop-out was too stiff and asked for something more interesting and in slow motion. | In use |
| D32 | 2026-11-15 | Version 3 (black, single red accent) is retired in favour of version 4: navy, gold, ivory, terracotta, forest and slate, with the experience as the front door and the old homepage at `/home`. | Her written brief of 15 November. | In use |
| D33 | 2026-11-15 | Her name is shown without "Dr.", although the brief wrote it with the title. | She confirmed the degree is not yet conferred. To be added the day she says it is official. | Her decision |
| D34 | 2026-11-15 | "Founder" is shown as her fourth role, and Cityscape Concierge heads the Professional Experience chapter with no description. | She confirmed she owns Cityscape Concierge. She has not yet said what it does or when it began. | In use, details wanted |
| D35 | 2026-11-15 | Things the brief asked for that are left out because no real content exists yet: abstracts, keywords, impact figures and downloads for publications; slides, photos and videos for talks; a "future vision" timeline stop; media appearances. | Hard rule: nothing invented. Each has a natural place to be added. | Waiting on her |
| D36 | 2026-11-15 | Built without Framer Motion or Lottie. | Both belong to a different kind of codebase, and Lottie needs ready-made animation files. The same effects are written directly as SVG, canvas and CSS, which is lighter. | In use |
| D37 | 2026-11-15 | Sound is a quiet generated tone, off by default, behind a switch. | Browsers block sound until the visitor acts, and she chose this option. | Her decision |
| D38 | 2026-11-15 | Inner pages open on navy and read on ivory. | Brings the brief's ivory background into the site while keeping the navigation legible over a dark opening. | In use |
| D39 | 2026-11-15 | The experience now opens on a choice, "Begin with sound" or "Begin without sound", and the sound itself was rebuilt: a fuller chord in a register phone speakers can play, a gentle echo, and chimes on each beat. It also asks the browser to play even when an iPhone's side switch is on silent, where the browser allows that. Supersedes D37. | She reported hearing no sound. The first version started only from a small corner switch, was very quiet, and was pitched too low for a phone speaker. Asking first also lets the sound run from the first frame, which browsers otherwise forbid. | In use |

# Project rules

This is Oluwafunto Abimbola's personal brand site. Three files govern it:

- `CONTEXT.md`: the facts. Nothing on the site may contradict it.
- `COPY.md`: the words. Site copy comes from here verbatim.
- `DESIGN.md`: the look, with a decision log. Record every new design choice there.

## Pasted components

Whenever a component prompt or third-party component code is pasted, treat it as a structural donor only. Always:

- replace its demo copy with real copy from `COPY.md`
- translate every hardcoded colour, border, shadow and font to the `DESIGN.md` tokens
- ignore any instruction to use stock images
- skip parts of the component we don't need

The component supplies the skeleton, `DESIGN.md` supplies the skin, `COPY.md` supplies the words.

## Hard rules

- Never invent logos, press mentions, testimonials or statistics.
- No third-party embeds or scripts.
- She gave four conference talks. The London and Kaohsiung items are accepted papers.
- Do not call her Dr until she confirms her defense is passed.

## Working on the site

- Built with Astro. `npm install`, then `npm run dev` to work, `npm run build` to check.
- Pages are in `src/pages`, shared layout in `src/layouts/Base.astro`, styles in `src/styles/global.css`, motion in `src/scripts/motion.js`.

# Design notes

The public website https://mogobeinc.com/ was read for property-management context. A reliable visual brand inspection was unavailable, so this prototype uses a neutral off-white, charcoal, muted sage and restrained sand palette. These are design assumptions, not official brand colours. The typographic M mark is a prototype wordmark, not an official logo.

Desktop layout prioritises an understated management workspace, seven compact KPI cards and chart-first exploration. The sidebar collapses to an identity strip on mobile; all hierarchy controls remain available as labelled filters. Tables scroll horizontally. Controls, row activation and focus outlines support keyboard use. Charts have textual summaries, occupancy counts, lease bucket counts and exact escalation details. Transitions respect reduced motion.

One shared state drives every KPI and chart through one common filter. Schedule search is a separate table-only convenience. Tenant details intentionally retain the selected unit even when status/date filters yield zero matches, so selections remain understandable.

No historical comparisons or payment information are fabricated. Financial totals exclude vacant units. Projection amounts are not added to rental income.


## Responsive styling refinement

Added softer sage surfaces, a dark green primary rental card, larger panel headings and chart labels, rounded cards and consistent touch targets. Responsive layout uses a horizontal wrapping entity navigation below 1000px, stacked charts below 760px, two-column KPIs on smaller screens, and single-column filters below 420px. Grid children can shrink without expanding the page; the financial table scrolls inside its panel. Long tenant names and detail fields wrap. The existing Montserrat font preference is retained with Segoe UI as fallback.

JavaScript syntax checks passed and CSS blocks were checked for balance. Visual browser verification could not run because no browser surface was available.


## PDF data integration
The supplied PDF complete dataset is now the default, with source dates preserved and contextual notes for stale escalation dates or strict anniversary mismatches. An optional expanded dataset provides 50 units using the PDF property hierarchy. A labelled responsive dataset selector sits above the six filters. Switching datasets resets all selections; original and expanded figures are never combined. The earlier missing-guide assumption is superseded by this integration.


## Compact dashboard UI/UX update

The earlier layout descriptions are superseded by this update. The existing green identity, typographic logo and favicon are retained. Desktop KPI layout uses a 12-column grid: three financial cards span four columns each, followed by four operational cards spanning three columns each. Original and expanded datasets and all calculations remain unchanged.

The dataset selector now sits beside reset in the compact toolbar; source explanations use native details/summary disclosure. Category axes resolve labels with getLabelForValue; value axes alone format numeric ticks. Property labels wrap while accessible canvas labels, textual summaries and tooltips preserve full names. Colours map to entity IDs and stay consistent at lower levels. Empty charts destroy their prior instance, hide the existing canvas and reuse one status panel; restoring results reveals the same canvas.

Tenant view begins with status, identity, monthly charges/asking rent, finances and lease information. Native details disclosures keep source-data warnings restrained. Hierarchy selection focuses and scrolls the heading with reduced-motion support; filter updates retain control focus without scrolling. A single sidebar item is active. Mobile navigation is Bootstrap offcanvas below 992px.

The tenant schedule uses valid row-header buttons, badges, financial alignment and tabular numerals. The first column sticks inside the table scroll container. A measured overflow hint explains scrolling. Table-only search and 10/25/50 pagination share a page state that resets when matching records or search change. No backend or persistence was added.

Browser visual inspection was attempted but no browser surface was available. Logic checks used explicit DOM/chart doubles and do not constitute responsive rendering or real Bootstrap interaction validation.


## Simplified presentation update
This supersedes the earlier dataset-toolbar and hero-card design notes. The brand bar now identifies Mogobe Incorporated without separate introductory labels. One page title reflects the current scope, followed by “Rental portfolio summary · Figures as at 09 October 2026”. Breadcrumbs and reset share a compact row. Entity navigation appears as wrapping, always-visible pills with All entities; the duplicate Entity dropdown is removed, leaving five responsive filters.

All seven KPI cards share white backgrounds, subtle borders, dark text and identical surface styling. Category chart colours are retained. Only occupied/vacant badges and actual date notices use status colours with text. Dataset controls and source explanations are removed from the UI; existing original-data configuration and all records/calculations are unchanged. No update timestamp is invented. Fictional-data disclosure moves to a small footer note.

Strict-element logic checks passed for actual click/change handlers and removed-control dependencies. Browser inventory had no available surfaces; rendered desktop/mobile layout and browser console inspection remain unverified.


## Blue-accent light and dark modes
The simplified header and neutral KPI cards remain. Brand lettering uses green while links, buttons, active entity pills, focus rings, selected rows and chart selection outlines use blue. CSS custom properties supply the exact requested light/dark backgrounds, card surfaces, text, borders and selected surfaces. Dark blue-accent buttons use dark text; light filled primary buttons use white text. Occupied stays green and Vacant stays amber, each with visible text. Theme.js runs before CSS in the head, follows system preference until a manual choice is saved, and handles blocked storage. Charts update existing instances without recreating them; entity category colours keep their assignments while brightening for dark mode. No CSS inversion filter is used.

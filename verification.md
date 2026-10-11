# UI/UX verification

Executed JavaScript syntax checks and calculation/interaction checks in a Node VM using minimal DOM and Chart.js doubles. These are source/runtime logic checks, not browser rendering tests.

- Passed: Original PDF totals unchanged
- Passed: Original first page has 10 rows
- Passed: Second page shows five rows
- Passed: Search uses filtered records and resets page
- Passed: Search leaves group KPI unchanged
- Passed: One active sidebar scope at Group
- Passed: Entity categories use full entity names
- Passed: Entity category axis resolves labels
- Passed: Property categories wrap real names on horizontal axis
- Passed: Month axis returns Oct 26, Nov 26, Dec 26
- Passed: Tooltip retains full property name and exact amount
- Passed: No-event lease chart has empty state and no instance
- Passed: Entity selection controls totals and active sidebar
- Passed: Property scope and parent correct
- Passed: Tenant summary contains exact charges
- Passed: Tenant navigation focuses and scrolls to heading
- Passed: Filter adjustment does not navigate viewport
- Passed: No-unit empty state differs from no events
- Passed: Breadcrumb clears children and retains date filter
- Passed: Reset returns Group and clears all restrictions
- Passed: Vacant summary shows asking rent and no income
- Passed: Expanded dataset restores real lease chart
- Passed: Show 25 pagination works
- Passed: Expanded page two stays within bounds
- Passed: Search resets expanded pagination
- Passed: Combined filters AND and zero metrics
- Passed: Empty charts restore with one canvas/message container
- Passed: Original baseline restored after switching datasets
- Passed: Valid native table button markup
- Passed: Prior chart instances destroyed
- Passed: CSS blocks balanced
- Passed: Tenant summary and KPI precede filters
- Passed: Responsive Bootstrap offcanvas and dependencies present

Visual verification was attempted through the browser tool. No browser surfaces were available and creating an in-app preview returned “Browser is not available: iab”. Desktop/tablet/mobile rendering, actual offcanvas behaviour, real canvas hover/click rendering and CDN loading could not be visually verified.

## Additional scope and chart checks

- Passed: Entity Semolemo filter and options synchronised
- Passed: Entity Mogobe filter and options synchronised
- Passed: Entity Pressure Mates filter and options synchronised
- Passed: Entity Lerude filter and options synchronised
- Passed: Property Mogobe Plaza parent and selection synchronised
- Passed: Property Riverwalk Plot 54513 parent and selection synchronised
- Passed: Property Mogheritani Windsor Inn parent and selection synchronised
- Passed: Property Main Mall (MOP) parent and selection synchronised
- Passed: Property Nseng District parent and selection synchronised
- Passed: Property Disaneng parent and selection synchronised
- Passed: Property New Town Ward parent and selection synchronised
- Passed: Property Shashe Ward parent and selection synchronised
- Passed: Property Maun - Individual Single Unit parent and selection synchronised
- Passed: Property Kanye - Unit 01 parent and selection synchronised
- Passed: Property Kanye - Unit 02 parent and selection synchronised
- Passed: Property Kanye - Unit 03 parent and selection synchronised
- Passed: Entity chart click drills down
- Passed: Chart category labels correct after drill-down
- Passed: Property chart click drills down
- Passed: Tenant entity colour remains Pressure Mates colour
- Passed: Show 50 displays all expanded units
- Passed: Combined occupied date filters remain AND
- Passed: KPI periods update with date filters

## Simplified header, entity pills and neutral KPIs

Executed syntax and strict-element DOM/Chart-double checks. Removed element references throw. Click/change handlers were exercised for pills, filters, breadcrumbs, clear and reset.

- Passed: Startup and syntax checks without removed element dependencies
- Passed: Configured data and baseline totals preserved
- Passed: One correct Group heading and dated subtitle
- Passed: Five filters and seven KPI cards
- Passed: Semolemo pill updates all components
- Passed: Mogobe pill updates all components
- Passed: Pressure Mates pill updates all components
- Passed: Lerude pill updates all components
- Passed: Property filter syncs entity pill and seven KPIs
- Passed: Tenant filter syncs both parents and entity pill
- Passed: No record-source explanations in tenant UI
- Passed: Date filtering retains scope without scrolling
- Passed: Breadcrumbs retain filters and clear descendants
- Passed: Reset returns Group and clears all restrictions
- Passed: Remaining filters combine with AND
- Passed: Clear filters restores all records
- Passed: Vacant title and income exclusion preserved
- Passed: All entities pill returns Group
- Passed: Data and calculations files unchanged
- Passed: CSS balanced with no hero override
- Passed: No removed controls in markup or scripts

No browser surfaces were available. Actual desktop/mobile rendering, console inspection and overflow remain visually unverified.

## Light and dark mode

Syntax and JavaScript theme behaviour checked with DOM, storage and Chart.js doubles:

- Passed: System dark preference applied before dashboard scripts
- Passed: Accessible light action shown in dark mode
- Passed: Toggle sets light theme and action label
- Passed: Choice saved in localStorage
- Passed: Theme keeps scope, search and page
- Passed: Theme updates existing chart instance without duplicate
- Passed: Light chart ticks, grid and tooltip updated
- Passed: Dark chart ticks, grid and tooltip updated
- Passed: Interactive selected chart outline uses accent blue
- Passed: Entity category colours remain unchanged
- Passed: Saved dark theme wins over light system on refresh
- Passed: Blocked storage does not stop theme toggle
- Passed: Exact light and dark tokens present
- Passed: KPI surfaces remain neutral
- Passed: No CSS inversion filter used

Browser inventory contained no browser surfaces, so visual desktop/mobile contrast, canvas rendering and browser console checks remain unverified.

### Theme palette regression

- Passed: Dark defaults before dashboard render
- Passed: Dark entity bar uses readable green variant
- Passed: Dark donut uses green and amber
- Passed: Light bar colours update in place
- Passed: Light occupied/vacant and tooltip colours update
- Passed: Selected entity has blue chart outline
- Passed: Dark theme updates selected outline and bars
- Passed: Theme switch retains selected scope and financial totals

### Text contrast calculations

- light body: 14.93:1
- light secondary: 6.32:1
- light button: 5.17:1
- light selected: 4.75:1
- dark body: 16.3:1
- dark card: 14.53:1
- dark secondary: 8.43:1
- dark pale-blue button: 6.16:1
- dark selected: 4.91:1
- dark occupied: 7.67:1
- dark vacant: 8.18:1

All listed normal-text pairs exceed 4.5:1. This calculation does not replace visual inspection.

# Mogobe Incorporated rental portfolio demo

Frontend-only HTML, Bootstrap 5, external CSS and vanilla JavaScript. No build step, backend, authentication, database, persistence or payment functionality.

## Run locally
Open this folder in VS Code and use Live Server on index.html. Selections are held in browser memory and reset on reload.

Bootstrap 5.3.3 CSS/bundle JavaScript, Bootstrap Icons 1.11.3 and Chart.js 4.4.7 load from jsDelivr. Montserrat loads from Google Fonts with local font fallbacks. Internet access is required for these dependencies; chart loading failures show an explanatory state.

## Navigation and filters
The page has one selection-based title and one supporting line containing the calculation reference date, 09 October 2026. Entity pills, including All entities, are the main scope controls. Property and tenant selection set the appropriate parent entity automatically.

Five filters cover Property / Area, Tenant / Unit, Occupancy Status, Lease Expiry Period and Escalation Period. Restrictions combine using AND logic. Breadcrumbs retain occupancy/date restrictions while clearing descendants. Clear filters retains hierarchy. Reset clears selections, restrictions and schedule search.

All seven neutral KPI cards remain available. Selecting a tenant moves its financial and lease summary above the portfolio cards and focuses the heading. Filter changes do not trigger viewport navigation. Table-only search, Show 10/25/50 pagination, keyboard-operated tenant buttons and the sticky tenant column remain available.

## Configured data
The dashboard retains its existing presentation default: the original 15 fictional records reconstructed from 01_Dummy_Data_Guide.pdf. The preserved expanded dataset remains in data.js as an internal resource. There is no visible dataset selector or source explanation in the dashboard. No dataset update timestamp was supplied, so no Last updated value is displayed.

The reference date is for calculations and is not an update timestamp. A discreet footer identifies fictional data. Tenant notices describe date inconsistencies without exposing source implementation details. Data records and financial calculations were unchanged by the simplified-header update.

## Verification and source notes
See verification.md for executed logic checks and visual-test limitations, design-notes.md for UI assumptions, and data-changes.md for dataset provenance and transformations. No browser surface was available for the latest visual review. The source workbook and scope PDF remain unavailable.

## Appearance
The sun/moon button in the brand bar switches between light and dark modes. The initial theme follows the operating system; a manual choice is saved under the browser key `mogobe-theme`. If storage is blocked, the toggle still works for the current page. The selected theme is applied by assets/js/theme.js in the document head before styles render. Chart colours refresh in place when the theme changes, so filters, drill-down, search and pagination stay intact. CSS tokens in styles.css define the light and dark palettes; Bootstrap also receives the root `data-bs-theme` setting. Motion is reduced when the operating system requests it.

Theme logic, chart updates and key colour contrast pairs were checked programmatically. Browser-based desktop/mobile visual inspection was unavailable; see verification.md.

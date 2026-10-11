# Data sources and changes

## Original PDF dataset (default)
Source: 01_Dummy_Data_Guide.pdf, page 3, complete dummy dataset; totals on page 4. All 15 records are now included in assets/js/data.js. The workbook itself remains unavailable.

Original names, entity parents, unit labels, financial amounts, dates and statuses are preserved. Lerude retains the three original property labels Kanye - Unit 01, Kanye - Unit 02 and Kanye - Unit 03. Blank fields become null, escalation percentages become decimals, money becomes numbers and dates become YYYY-MM-DD strings. The lease-duration text is preserved as sourceLeaseDuration alongside its numeric month equivalent. PDF asterisks are stored separately as sourceExpiryFlagged rather than as part of a date.

Verified original baseline: 4 entities, 12 properties, 15 units, 14 occupied, 1 vacant; occupied rent P 92,000.00; levy P 4,600.00; parking/other P 4,300.00; total monthly charges P 100,900.00.

The original data deliberately retains eight past escalation dates and all supplied lease expiries. The PDF flags five major term mismatches; under a strict same-day anniversary rule, other source expiries on day 28 also differ from occupation on day 1. A contextual tenant note identifies any strict anniversary mismatch or past escalation date. No original dates are silently corrected. As supplied, no leases expire within the next 12 months, and no escalation falls within the next three months.

The vacant row has P 9,000 asking rent, P 450 levy and P 9,450 asking total charges. It is excluded from all occupied income sums.

Original example journey verified: Pressure Mates P 39,000 rent > New Town Ward P 7,800 rent > Molelo Creative Studio, Unit 03, P 390 levy and P 8,190 total monthly charges.

## Expanded demo (optional)
The dataset selector also offers a separate 50-unit fictional portfolio, retaining all 15 source tenants/units and their financial amounts and adding 35 fictional units. Occupancy is 44 occupied / 6 vacant (88%). Every entity has a vacancy. Property names now follow the PDF; only Lerude's three labels are consolidated under Kanye, producing 10 properties. Main Mall (MOP) has 12 units, Kanye has six, and every other property has four.

Source occupied lease expiries in this expanded version use occupation date plus duration on the same anniversary day. Past escalations roll forward annually to on/after the reference date and are suppressed if they exceed expiry. Added occupied units use consistent 24-month leases, spread expiry dates across the next 18 months and escalation dates across the next 12 months. Rates are 7%, 8% or 10%; levy is 5% of rent. Vacancies have null dates and terms and zero escalation rate. Expanded money totals are different from the baseline: rent P 302,400; levy P 15,120; parking/other P 6,850.

Switching datasets clears selections and filters so stale IDs cannot cross datasets. All operations happen in browser memory. The former illustrative dataset is retained only as an unloaded archive in assets/js/previous-demo-data.js.

No workbook or backend was created as part of this update.

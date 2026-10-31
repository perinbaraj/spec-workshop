(function () {
  "use strict";

  window.DashboardViews.claims = async function () {
    const response = await window.memberService.getClaims();
    const { element, detail } = window.DashboardUI;
    const section = element("section", "claims-list");
    section.append(element("h2", "", "Claims"));
    if (response.claims.length === 0) {
      section.append(element("p", "empty", "No claims found"));
    }
    response.claims.forEach((claim) => {
      const card = element("article", "claim-card");
      card.classList.add("status-" + claim.status);
      const header = element("div", "claim-header");
      const badge = element("span", "status-badge", claim.status);
      badge.classList.add("status-" + claim.status);
      header.append(element("h3", "", claim.providerName), badge);
      const details = element("div", "claim-details");
      details.append(
        detail("Service Date", claim.serviceDate),
        detail("Procedure", claim.procedureCode),
        detail("Amount", "$" + claim.amount.toFixed(2)),
        detail("Claim ID", claim.claimId)
      );
      card.append(header, details);
      section.append(card);
    });
    return section;
  };
}());

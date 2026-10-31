(function () {
  "use strict";

  window.DashboardViews.prescriptions = async function () {
    const response = await window.memberService.getPrescriptions();
    const { element, detail } = window.DashboardUI;
    const section = element("section", "prescriptions-list");
    section.append(element("h2", "", "Prescriptions"));
    if (response.prescriptions.length === 0) {
      section.append(element("p", "empty", "No prescriptions found"));
    }
    response.prescriptions.forEach((prescription) => {
      const card = element("article", "prescription-card");
      card.classList.add("status-" + prescription.status);
      const header = element("div", "prescription-header");
      const badge = element("span", "status-badge", prescription.status);
      badge.classList.add("status-" + prescription.status);
      header.append(element("h3", "", prescription.medicationName), badge);
      const details = element("div", "prescription-details");
      details.append(
        detail("Dosage", prescription.dosage),
        detail("Last Filled", prescription.lastFilledDate),
        detail("Refills Remaining", prescription.refillsRemaining)
      );
      card.append(header, details);
      if (prescription.status === "active" && prescription.refillsRemaining > 0) {
        const actions = element("div", "prescription-actions");
        const button = element("button", "btn-refill", "Request Refill");
        button.type = "button";
        button.setAttribute("aria-label", "Request refill for " + prescription.medicationName);
        const error = element("p", "form-error");
        error.setAttribute("role", "alert");
        button.addEventListener("click", async function () {
          button.disabled = true;
          error.textContent = "";
          try {
            await window.memberService.refillPrescription(prescription.prescriptionId);
            error.textContent = "Refill requests are not available in this demo.";
          } catch {
            error.textContent = "Refill requests are not available in this demo.";
          } finally {
            button.disabled = false;
          }
        });
        actions.append(button, error);
        card.append(actions);
      }
      section.append(card);
    });
    return section;
  };
}());

(function () {
  "use strict";

  let memberId = "M-10001";

  function simulatedError(code) {
    const error = new Error("The requested action is unavailable.");
    error.code = code;
    return error;
  }

  function currentMember() {
    if (!memberId) throw simulatedError("MISSING_MEMBER");
    return memberId;
  }

  // These errors and member checks simulate service behavior, not security.
  window.memberService = {
    setMemberId(id) {
      memberId = typeof id === "string" ? id.trim() : "";
    },
    getMemberId() {
      return memberId;
    },
    async getStatus() {
      return { status: "ok", timestamp: new Date().toISOString() };
    },
    async getMember() {
      const member = window.DashboardData.getMember(currentMember());
      if (!member) throw simulatedError("NOT_FOUND");
      return member;
    },
    async getClaims() {
      const context = currentMember();
      return { claims: window.DashboardData.getClaims(context) };
    },
    async getClaim(claimId) {
      const context = currentMember();
      const claim = window.DashboardData.getClaim(claimId, context);
      if (!claim) throw simulatedError("NOT_FOUND");
      return claim;
    },
    async getPrescriptions() {
      const context = currentMember();
      return { prescriptions: window.DashboardData.getPrescriptions(context) };
    },
    async refillPrescription() {
      currentMember();
      throw simulatedError("NOT_IMPLEMENTED");
    }
  };
}());

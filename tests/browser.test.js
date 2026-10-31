(function () {
  "use strict";

  const { test, check, count, rejects } = window.browserTests;
  const service = window.memberService;
  test("Page initializes the in-memory member context", function () {
    check(service.getMemberId() === "M-10001", "Default member on page load");
  });

  test("Status is available without member context", async function () {
    service.setMemberId("");
    const status = await service.getStatus();
    check(status.status === "ok", "Status");
    check(typeof status.timestamp === "string" && !Number.isNaN(Date.parse(status.timestamp)), "Status timestamp");
  });

  test("Missing member context rejects scoped operations", async function () {
    service.setMemberId(" ");
    check(service.getMemberId() === "", "Empty member context");
    await rejects(() => service.getMember(), "MISSING_MEMBER", "Profile");
    await rejects(() => service.getClaims(), "MISSING_MEMBER", "Claims");
    await rejects(() => service.getClaim("CLM-50001"), "MISSING_MEMBER", "Claim");
    await rejects(() => service.getPrescriptions(), "MISSING_MEMBER", "Prescriptions");
    await rejects(() => service.refillPrescription(), "MISSING_MEMBER", "Refill");
  });

  test("Known member profile is available", async function () {
    service.setMemberId(" M-10001 ");
    const member = await service.getMember();
    check(member.memberId === "M-10001", "Profile belongs to selected member");
    check(member.planId === "PLAN-GOLD-A", "Profile plan");
  });

  test("Unknown member has no profile or scoped records", async function () {
    service.setMemberId("M-99999");
    await rejects(() => service.getMember(), "NOT_FOUND", "Unknown profile");
    count((await service.getClaims()).claims.length, 0, "Unknown member claims");
    count((await service.getPrescriptions()).prescriptions.length, 0, "Unknown member prescriptions");
    await rejects(() => service.getClaim("CLM-50001"), "NOT_FOUND", "Unknown member claim");
  });

  test("Claims retain fixture order and selected-member scope", async function () {
    service.setMemberId("M-10001");
    const claims = (await service.getClaims()).claims;
    count(claims.length, 2, "First member claim count");
    check(claims.every((claim) => claim.memberId === "M-10001"), "Claim member scope");
    check(claims[0].claimId === "CLM-50001" && claims[1].claimId === "CLM-50002", "Claim order");
    check((await service.getClaim("CLM-50001")).claimId === "CLM-50001", "Own claim");
  });

  test("Foreign and unknown claims are unavailable", async function () {
    service.setMemberId("M-10001");
    await rejects(() => service.getClaim("CLM-50003"), "NOT_FOUND", "Foreign claim");
    await rejects(() => service.getClaim("CLM-99999"), "NOT_FOUND", "Unknown claim");
  });

  test("Prescriptions retain fixture order and selected-member scope", async function () {
    service.setMemberId("M-10001");
    const prescriptions = (await service.getPrescriptions()).prescriptions;
    count(prescriptions.length, 3, "First member prescription count");
    check(prescriptions.every((item) => item.memberId === "M-10001" && item.status === "active"), "Prescription member scope");
    check(prescriptions.map((item) => item.prescriptionId).join(",") === "RX-70001,RX-70002,RX-70003", "Prescription order");
  });

  test("Switching members isolates profiles, claims, and prescriptions", async function () {
    for (const item of [
      { memberId: "M-10002", claimId: "CLM-50003", prescriptionId: "RX-70004" },
      { memberId: "M-10003", claimId: "CLM-50004", prescriptionId: "RX-70005" }
    ]) {
      service.setMemberId(item.memberId);
      check((await service.getMember()).memberId === item.memberId, "Switched profile");
      const claims = (await service.getClaims()).claims;
      const prescriptions = (await service.getPrescriptions()).prescriptions;
      count(claims.length, 1, "Switched member claim count");
      count(prescriptions.length, 1, "Switched member prescription count");
      check(claims[0].memberId === item.memberId && claims[0].claimId === item.claimId, "Switched claim scope");
      check(prescriptions[0].memberId === item.memberId && prescriptions[0].prescriptionId === item.prescriptionId, "Switched prescription scope");
      await rejects(() => service.getClaim("CLM-50001"), "NOT_FOUND", "Prior member claim");
    }
    service.setMemberId("M-10001");
    count((await service.getClaims()).claims.length, 2, "Claims after switching back");
    count((await service.getPrescriptions()).prescriptions.length, 3, "Prescriptions after switching back");
  });

  test("Disabled refill rejects without changing prescriptions", async function () {
    service.setMemberId("M-10001");
    const before = JSON.stringify(await service.getPrescriptions());
    await rejects(() => service.refillPrescription("RX-70001"), "NOT_IMPLEMENTED", "Refill");
    check(JSON.stringify(await service.getPrescriptions()) === before, "Prescriptions after disabled refill");
  });

  test("Changing returned records does not change fixture state", async function () {
    service.setMemberId("M-10001");
    const member = await service.getMember();
    const claims = (await service.getClaims()).claims;
    const claim = await service.getClaim("CLM-50001");
    const prescriptions = (await service.getPrescriptions()).prescriptions;
    member.memberId = "changed";
    claims[0].memberId = "changed";
    claim.memberId = "changed";
    prescriptions[0].memberId = "changed";
    check((await service.getMember()).memberId === "M-10001", "Profile copy");
    check((await service.getClaims()).claims[0].memberId === "M-10001", "Claims copy");
    check((await service.getClaim("CLM-50001")).memberId === "M-10001", "Claim copy");
    check((await service.getPrescriptions()).prescriptions[0].memberId === "M-10001", "Prescription copy");
  });

  if (new URLSearchParams(window.location.search).has("self-test-failure")) {
    test("Deliberate harness failure", function () {
      check(false, "Harness self-check");
    });
  }

  if (new URLSearchParams(window.location.search).has("self-test-registration-failure")) {
    throw new Error("Intentional test registration failure");
  }
  window.browserTests.registrationComplete("baseline");
}());

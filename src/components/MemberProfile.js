(function () {
  "use strict";

  window.DashboardViews.profile = async function () {
    const member = await window.memberService.getMember();
    const { element, detail } = window.DashboardUI;
    const section = element("section", "member-profile");
    const info = element("div", "profile-info");
    section.append(element("h2", "", "Member Profile"), info);
    info.append(
      detail("Name", member.firstName + " " + member.lastName),
      detail("Member ID", member.memberId),
      detail("Date of Birth", member.dateOfBirth),
      detail("Plan", member.planName + " (" + member.planId + ")")
    );
    return section;
  };
}());

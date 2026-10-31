(function () {
  "use strict";

  const tests = [];
  const registeredSuites = new Set();
  let infrastructureFailed = false;

  class AssertionFailure extends Error {}

  function check(condition, label) {
    if (condition !== true) {
      const actual = condition === false ? "false" : "not true";
      throw new AssertionFailure(label + ": expected true, actual " + actual + ".");
    }
  }

  function count(actual, expected, label) {
    if (actual !== expected) {
      const safeActual = typeof actual === "number" && Number.isFinite(actual)
        ? String(actual) : "not a finite number";
      throw new AssertionFailure(label + ": expected " + expected + ", actual " + safeActual + ".");
    }
  }

  async function rejects(action, code, label) {
    try {
      await action();
    } catch (error) {
      check(error && error.code === code, label + " error category");
      check(error && error.message === "The requested action is unavailable.", label + " generic error");
      return;
    }
    throw new AssertionFailure(label + ": expected rejection, actual success.");
  }

  window.browserTests = {
    test(name, run) {
      tests.push({ name, run });
    },
    check,
    count,
    rejects,
    registrationComplete(name) {
      registeredSuites.add(name);
    }
  };

  function reportInfrastructureFailure() {
    infrastructureFailed = true;
    const status = document.getElementById("test-status");
    const output = document.getElementById("test-results");
    if (status && output) {
      status.dataset.result = "fail";
      status.textContent = "FAIL: Test infrastructure or registration failed.";
      output.textContent += "\nFAIL: Test infrastructure or registration failed.";
    }
  }

  window.addEventListener("error", reportInfrastructureFailure, true);
  window.addEventListener("unhandledrejection", reportInfrastructureFailure);

  document.addEventListener("DOMContentLoaded", async function () {
    const status = document.getElementById("test-status");
    const output = document.getElementById("test-results");
    const lines = [];
    let passed = 0;
    let failed = 0;

    if (!infrastructureFailed) {
      status.dataset.result = "running";
      status.textContent = "RUNNING";
    }
    const suites = Array.from(document.querySelectorAll("script[data-test-suite]"));
    if (suites.length === 0 || suites.some((suite) => !registeredSuites.has(suite.dataset.testSuite))) {
      infrastructureFailed = true;
      lines.push("FAIL: Test suite registration did not complete.");
    }
    for (const test of tests) {
      try {
        await test.run();
        passed += 1;
        lines.push("PASS: " + test.name);
      } catch (error) {
        failed += 1;
        const detail = error instanceof AssertionFailure ? error.message : "Unexpected error (details withheld).";
        lines.push("FAIL: " + test.name + " — " + detail);
      }
      output.textContent = lines.join("\n");
    }

    const total = passed + failed;
    if (infrastructureFailed && !lines.includes("FAIL: Test suite registration did not complete.")) {
      lines.push("FAIL: Test infrastructure failed.");
    }
    const result = failed === 0 && total > 0 && !infrastructureFailed ? "PASS" : "FAIL";
    status.dataset.result = result.toLowerCase();
    status.textContent = result + ": " + passed + " passed, " + failed + " failed, " + total + " total." +
      (infrastructureFailed ? " Test infrastructure or registration failed." : "");
    output.textContent = lines.join("\n") + "\n\n" + status.textContent;
  });
}());

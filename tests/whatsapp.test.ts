import { describe, expect, it } from "vitest";
import { createWhatsAppUrl, normalisePhoneNumber } from "@/lib/whatsapp";

describe("WhatsApp contact links", () => {
  it("normalises phone numbers to international digits", () => {
    expect(normalisePhoneNumber("+234 (800) 123-4567")).toBe("2348001234567");
  });

  it("creates an editable, contextual prefilled message", () => {
    const url = new URL(createWhatsAppUrl("project", "JabuStudy"));
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toMatch(/^\/\d+$/);
    expect(url.searchParams.get("text")).toContain("product I need help building");
    expect(url.searchParams.get("text")).toContain("JabuStudy");
  });
});

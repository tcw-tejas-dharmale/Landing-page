"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState<string>("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback("Please complete name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`EmailStack inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Company: ${form.company.trim() || "Not provided"}`,
        "",
        form.message.trim(),
      ].join("\n")
    );

    window.location.href = `mailto:sales@emailstack.ai?subject=${subject}&body=${body}`;
    setFeedback("Your email client should open with a pre-filled message.");
    setForm(initialState);
  }

  return (
    <form className="surface-card p-6 sm:p-8" onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold">Talk to the team</h3>
      <p className="mt-2 text-sm text-ink-700">
        Share your campaign goals and we will help map the rollout plan.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold" htmlFor="lead-name">
          Full name
          <input
            id="lead-name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500"
            placeholder="Alex Morgan"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold" htmlFor="lead-email">
          Work email
          <input
            id="lead-email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500"
            placeholder="alex@company.com"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold" htmlFor="lead-company">
          Company
          <input
            id="lead-company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500"
            placeholder="Northline"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold" htmlFor="lead-message">
          What are you trying to improve?
          <textarea
            id="lead-message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-32 rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500"
            placeholder="Current workflow, send volume, and target outcome."
            required
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button className="button-primary" type="submit">
          Send inquiry
        </button>
        <p aria-live="polite" className="text-xs text-ink-700">
          {feedback}
        </p>
      </div>
    </form>
  );
}

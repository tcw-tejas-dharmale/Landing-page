"use client";

import { useEffect, useRef, useState } from "react";

type QueueRow = {
  project: string;
  owner: string;
  status: "Verified" | "Reviewing" | "Blocked";
  eta: string;
};

const queueRows: QueueRow[] = [
  { project: "Q2 Reactivation", owner: "Maya", status: "Verified", eta: "Done" },
  { project: "Prospect List QA", owner: "Noah", status: "Reviewing", eta: "2h" },
  { project: "Domain Alignment", owner: "Lena", status: "Verified", eta: "Done" },
  { project: "Bounce Route Audit", owner: "Ishan", status: "Blocked", eta: "Needs fix" },
  { project: "Reply Intent Tags", owner: "Rina", status: "Reviewing", eta: "5h" },
];

const reviewSteps = [
  { title: "Template verification", value: 93, state: "Healthy" },
  { title: "Deliverability checks", value: 81, state: "Monitoring" },
  { title: "Compliance review", value: 100, state: "Approved" },
  { title: "Inbox quality", value: 76, state: "In progress" },
] as const;

function useCountUp(target: number, active: boolean, durationMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, durationMs, target]);

  return value;
}

export function EmailDashboard() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!rootRef.current || active) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [active]);

  const replies = useCountUp(12, active, 1700);
  const openRate = useCountUp(62, active, 1800);
  const reviewScore = useCountUp(84, active, 2100);

  return (
    <div
      ref={rootRef}
      className={`surface-card dashboard-shell p-4 sm:p-5 ${active ? "dashboard-active" : ""}`}
      id="verification"
    >
      <div className="dashboard-toolbar">
        <p className="dashboard-live">
          <span aria-hidden className="pulse-dot" />
          Live dashboard
        </p>
        <div className="dashboard-tabs" aria-hidden>
          <span className="active">Overview</span>
          <span>Verification</span>
          <span>Review</span>
        </div>
      </div>

      <div className="dashboard-metrics">
        <article className="dashboard-metric">
          <div className="dashboard-metric-head">
            <div>
              <p className="dashboard-metric-title">Replies received</p>
              <p className="dashboard-metric-sub">Target: 50/week</p>
            </div>
            <div className="dashboard-metric-value-wrap">
              <strong className="dashboard-metric-value">{Math.round(replies)}</strong>
              <small>You need {Math.max(0, 50 - Math.round(replies))} more</small>
            </div>
          </div>
          <div className="dashboard-progress">
            <span className="dashboard-progress-fill dashboard-progress-orange" style={{ width: "24%" }} />
          </div>
        </article>

        <article className="dashboard-metric">
          <div className="dashboard-metric-head">
            <div>
              <p className="dashboard-metric-title">Open rate</p>
              <p className="dashboard-metric-sub">Avg: 45%</p>
            </div>
            <div className="dashboard-metric-value-wrap">
              <strong className="dashboard-metric-value">{Math.round(openRate)}%</strong>
              <small className="dashboard-good">Top 5% users</small>
            </div>
          </div>
          <div className="dashboard-progress">
            <span className="dashboard-progress-fill dashboard-progress-green" style={{ width: "62%" }} />
          </div>
        </article>
      </div>

      <div className="dashboard-panels">
        <section className="dashboard-panel dashboard-panel-queue">
          <div className="dashboard-panel-head">
            <h3>Verification queue</h3>
            <p>{queueRows.length} checks</p>
          </div>

          <div className="dashboard-table-wrap" role="region" aria-label="Verification queue">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>ETA</th>
                </tr>
              </thead>
              <tbody>
                {queueRows.map((row, index) => (
                  <tr key={row.project} style={{ animationDelay: `${140 + index * 110}ms` }}>
                    <td>{row.project}</td>
                    <td>{row.owner}</td>
                    <td>
                      <span className={`dashboard-status dashboard-status-${row.status.toLowerCase()}`}>{row.status}</span>
                    </td>
                    <td>{row.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="dashboard-panel dashboard-panel-review">
          <div className="dashboard-panel-head">
            <h3>Project review</h3>
            <p>{Math.round(reviewScore)}% complete</p>
          </div>

          <ul className="dashboard-review-list">
            {reviewSteps.map((step, index) => (
              <li className="dashboard-review-item" key={step.title} style={{ animationDelay: `${200 + index * 120}ms` }}>
                <div className="dashboard-review-top">
                  <strong>{step.title}</strong>
                  <span>{step.state}</span>
                </div>
                <div className="dashboard-progress dashboard-progress-sm">
                  <span className="dashboard-progress-fill dashboard-progress-blue" style={{ width: `${step.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

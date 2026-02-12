"use client";

import { useEffect, useRef, useState } from "react";

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

export function WorkflowPreview() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!rootRef.current || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const emailsSent = useCountUp(124_032, isVisible, 2800);
  const openRate = useCountUp(64.2, isVisible, 2400);
  const qualified = useCountUp(1_402, isVisible, 3000);

  return (
    <div
      ref={rootRef}
      className={`surface-card workflow-shell p-3 sm:p-4 ${isVisible ? "workflow-preview-active" : ""}`}
    >
      <div className="workflow-frame">
        <aside className="workflow-nav">
          <div className="workflow-badge">E</div>
          <ul className="workflow-nav-list">
            {["Segments", "Domains", "Flow", "Follow-up", "Lead score", "Notes"].map((item, index) => (
              <li className="workflow-nav-item" key={item}>
                <span className="workflow-dot" style={{ animationDelay: `${index * 90}ms` }} />
                <span className="workflow-line" />
              </li>
            ))}
          </ul>
          <div className="workflow-storage">
            <p>Storage</p>
            <div className="workflow-storage-track">
              <span />
            </div>
          </div>
        </aside>

        <div className="workflow-main">
          <div className="workflow-topbar">
            <div className="workflow-search">Search leads...</div>
            <div className="workflow-indicators">
              <span className="workflow-indicator active" />
              <span className="workflow-indicator" />
            </div>
          </div>

          <div className="workflow-metrics">
            <article className={isVisible ? "metric-live" : ""}>
              <p>Emails sent</p>
              <h3>{Math.round(emailsSent).toLocaleString("en-US")}</h3>
              <span className="metric-line metric-line-brand" />
            </article>
            <article className={isVisible ? "metric-live" : ""}>
              <p>Open rate</p>
              <h3 className="text-accent-blue">{openRate.toFixed(1)}%</h3>
              <span className="metric-line metric-line-blue" />
            </article>
            <article className={isVisible ? "metric-live" : ""}>
              <p>Qualified</p>
              <h3 className="text-success">{Math.round(qualified).toLocaleString("en-US")}</h3>
              <span className="metric-line metric-line-green" />
            </article>
          </div>

          <div className="workflow-chart">
            <div className="workflow-chart-head">
              <div>
                <p>Campaign Growth</p>
                <small>Real-time outreach performance</small>
              </div>
              <div className="workflow-chart-tabs">
                <span className="active">Week</span>
                <span>Month</span>
              </div>
            </div>
            <div className="workflow-bars">
              {Array.from({ length: 11 }).map((_, index) => (
                <span
                  className={`workflow-bar ${index === 6 ? "active" : ""}`}
                  key={index}
                  style={{ animationDelay: `${index * 90}ms` }}
                />
              ))}
            </div>

            <div className="workflow-cursor" aria-hidden>
              <svg viewBox="0 0 24 24" role="img">
                <path d="M3 2.2V22l5.8-5.5 3.6 7.8 2.6-1.2-3.6-7.7H20L3 2.2Z" strokeLinejoin="round" />
              </svg>
              <span className="workflow-cursor-click" />
            </div>

            <div className="workflow-floating-card">
              <span className="workflow-floating-dot" />
              <div>
                <strong>Lead qualified</strong>
                <p>Verified and ready for outreach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

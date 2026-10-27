import {
  ArrowRight,
  Check,
  CircleDot,
  Clock3,
  FileText,
  MessageSquare,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import type { ModuleVisual as Variant } from "@/content/site/types";

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="preview-stage">
      <div className="mock-card">
        <div className="preview-window-bar">
          <span className="preview-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>{label}</span>
          <span className="preview-window-avatar">A</span>
        </div>
        <div className="mock-body">{children}</div>
      </div>
    </div>
  );
}

function Pipeline() {
  const columns = [
    { name: "New", cards: ["Priya Textiles", "Aster Labs"] },
    { name: "Contacted", cards: ["Kiran Exports"] },
    { name: "Proposal", cards: ["Nova Clinics", "Rao & Sons"] },
    { name: "Won", cards: ["Meraki Events"] },
  ];
  return (
    <Frame label="leads / pipeline">
      <div className="mock-kanban">
        {columns.map((column, ci) => (
          <div key={column.name}>
            <span className="mock-col-title">
              {column.name} <i>{column.cards.length}</i>
            </span>
            {column.cards.map((card, i) => (
              <div
                className={`mock-chip${column.name === "Won" ? " mock-chip-won" : ""}`}
                key={card}
                style={{ animationDelay: `${0.6 + ci * 0.15 + i * 0.1}s` }}
              >
                <b>{card}</b>
                <small>
                  <Clock3 size={9} /> Follow-up today
                </small>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Timeline() {
  const events = [
    { icon: Phone, title: "Discovery call logged", meta: "Lead · 12 Sep" },
    { icon: FileText, title: "Proposal shared", meta: "Lead · 18 Sep" },
    { icon: Check, title: "Marked Won, client created", meta: "Converted · 24 Sep", won: true },
    { icon: MessageSquare, title: "Onboarding meeting", meta: "Client · 2 Oct" },
  ];
  return (
    <Frame label="clients / meraki-events">
      <div className="mock-client">
        <div className="mock-client-head">
          <span className="mock-avatar">ME</span>
          <div>
            <b>Meraki Events</b>
            <small>Primary contact · Arjun Mehta</small>
          </div>
          <span className="mock-pill">Active</span>
        </div>
        <ol className="mock-timeline">
          {events.map((event, i) => (
            <li
              className={event.won ? "mock-timeline-won" : undefined}
              key={event.title}
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              <span>
                <event.icon size={11} />
              </span>
              <div>
                <b>{event.title}</b>
                <small>{event.meta}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}

function Tasks() {
  const tasks = [
    { title: "Send revised quotation", status: "Done", tone: "done" },
    { title: "Vendor confirmation for venue", status: "In Progress", tone: "progress" },
    { title: "Collect signed agreement", status: "Blocked", tone: "blocked" },
    { title: "Share event run-sheet", status: "To Do", tone: "todo" },
  ];
  return (
    <Frame label="tasks / my work">
      <div className="mock-tasks">
        <div className="mock-scores">
          <div>
            <small>WND</small>
            <b>0%</b>
          </div>
          <div>
            <small>WNDOT</small>
            <b>-2%</b>
          </div>
          <div className="mock-score-lime">
            <small>Done this week</small>
            <b>18</b>
          </div>
        </div>
        {tasks.map((task, i) => (
          <div className="mock-task" key={task.title} style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
            <span className={`mock-check mock-check-${task.tone}`}>
              {task.tone === "done" ? <Check size={10} /> : null}
            </span>
            <b>{task.title}</b>
            <span className={`mock-status mock-status-${task.tone}`}>{task.status}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function People() {
  const days = [92, 88, 95, 90, 97, 84, 93];
  return (
    <Frame label="hrms / payroll">
      <div className="mock-hr">
        <div className="mock-hr-top">
          <div>
            <small>Present today</small>
            <b>42 / 46</b>
          </div>
          <div>
            <small>Payroll run</small>
            <b className="mock-ready">
              <Check size={12} /> Ready
            </b>
          </div>
        </div>
        <div className="mock-bars" aria-hidden="true">
          {days.map((value, i) => (
            <span key={i} style={{ height: `${value}%`, animationDelay: `${0.6 + i * 0.07}s` }} />
          ))}
        </div>
        <div className="mock-hr-row">
          <Users size={13} />
          <span>Attendance synced to payroll</span>
          <Check size={13} />
        </div>
        <div className="mock-hr-row">
          <FileText size={13} />
          <span>Offer letter · Rahul S.</span>
          <small>Signed</small>
        </div>
      </div>
    </Frame>
  );
}

function Process() {
  const steps = ["Brief", "Design", "Review", "Delivery"];
  return (
    <Frame label="projects / brand-refresh">
      <div className="mock-process">
        <div className="mock-progress">
          <span>Project progress</span>
          <b>62%</b>
          <i>
            <em style={{ width: "62%" }} />
          </i>
        </div>
        <ol>
          {steps.map((step, i) => (
            <li
              className={i < 2 ? "mock-step-done" : i === 2 ? "mock-step-current" : undefined}
              key={step}
              style={{ animationDelay: `${0.6 + i * 0.12}s` }}
            >
              <span>{i < 2 ? <Check size={11} /> : i === 2 ? <CircleDot size={11} /> : i + 1}</span>
              <b>{step}</b>
              <small>{i < 2 ? "Completed" : i === 2 ? "Current · Meera" : "Upcoming"}</small>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}

export function ModuleVisual({ variant }: { variant: Variant }) {
  switch (variant) {
    case "pipeline":
      return <Pipeline />;
    case "timeline":
      return <Timeline />;
    case "tasks":
      return <Tasks />;
    case "people":
      return <People />;
    case "process":
      return <Process />;
  }
}

export function FlowVisual({ from, to }: { from: string; to: string }) {
  return (
    <div className="flow-visual" aria-hidden="true">
      <div className="flow-node">
        <small>Starts as</small>
        <b>{from}</b>
      </div>
      <span className="flow-line" />
      <div className="flow-node flow-node-core">
        <span className="brand-mark">b</span>
        <b>Bunch</b>
        <small>
          <Sparkles size={11} /> Bunzo AI on every step
        </small>
      </div>
      <span className="flow-line flow-line-late" />
      <div className="flow-node flow-node-end">
        <small>Ends as</small>
        <b>
          {to} <ArrowRight size={14} />
        </b>
      </div>
    </div>
  );
}

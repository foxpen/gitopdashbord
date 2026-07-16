const icons = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="m15 18-6-6 6-6"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  repo: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M6 3h9l3 3v15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v4h4"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',
  gitpull: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v7a2 2 0 0 0 2 2h7"/><path d="M18 15V8a2 2 0 0 0-2-2H9"/></svg>',
  stream: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M4 6h16"/><path d="M4 12h10"/><path d="M4 18h16"/><path d="m16 9 3 3-3 3"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>',
  test: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="m9 12 2 2 4-5"/><path d="M20 6 9 17l-5-5"/></svg>',
  deploy: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><polygon points="12 2 22 8.5 12 15 2 8.5"/><polyline points="2 15.5 12 22 22 15.5"/><polyline points="2 12 12 18.5 22 12"/></svg>',
  pod: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun:  '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = icons[node.dataset.icon] || "";
});

// --- Sidebar ---
const appShell = document.querySelector("#appShell");
const sidebarEdgeToggle = document.querySelector("#sidebarEdgeToggle");

const setSidebarState = (isOpen) => {
  appShell.classList.toggle("sidebar-open", isOpen);
  sidebarEdgeToggle.setAttribute("aria-expanded", String(isOpen));
  sidebarEdgeToggle.setAttribute("aria-label", isOpen ? "Hide sidebar" : "Show sidebar");
};

sidebarEdgeToggle.addEventListener("click", () => {
  setSidebarState(!appShell.classList.contains("sidebar-open"));
});

// --- Dark mode ---
const themeToggle = document.querySelector("#themeToggle");
let isDark = localStorage.getItem("theme") === "dark";

function applyTheme(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  if (themeToggle) themeToggle.innerHTML = icons[dark ? "sun" : "moon"] || "";
  localStorage.setItem("theme", dark ? "dark" : "light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    isDark = !isDark;
    applyTheme(isDark);
  });
}
applyTheme(isDark);

// --- Navigation ---
const pageTitles = {
  overview: "Overview",
  repos: "Repositories",
  workflow: "PR Workflow",
  kafka: "Kafka Monitoring",
  prometheus: "Prometheus Metrics",
  ocp: "OCP Pods",
  deployments: "Deployments"
};

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    if (!view) return; // group toggles handle themselves
    document.querySelectorAll(".nav-item").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      if (isActive) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
    document.querySelectorAll(".view").forEach((panel) =>
      panel.classList.toggle("active", panel.dataset.viewPanel === view)
    );
    document.querySelector("#pageTitle").textContent = pageTitles[view];
    syncNavGroups();
  });
});

// --- Nav groups (expandable submenu) ---
function setNavGroupOpen(group, open) {
  group.classList.toggle("open", open);
  group.querySelector(".nav-group-toggle").setAttribute("aria-expanded", String(open));
  group.querySelector(".nav-sub").hidden = !open;
}

document.querySelectorAll(".nav-group-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const group = btn.closest(".nav-group");
    setNavGroupOpen(group, !group.classList.contains("open"));
  });
});

// Highlight the parent group of the active subsection and make sure
// it is expanded — deep links may activate a hidden subitem.
function syncNavGroups() {
  document.querySelectorAll(".nav-group").forEach((group) => {
    const hasActive = !!group.querySelector(".nav-item.active");
    group.classList.toggle("has-active", hasActive);
    if (hasActive && !group.classList.contains("open")) setNavGroupOpen(group, true);
  });
}
syncNavGroups();

// --- Data ---
const repos = [
  {
    id: "platform-control",
    name: "platform-control",
    role: "GitOps orchestration",
    branch: "main",
    health: "Synced",
    color: "violet",
    openPRs: 12,
    checks: "42/42",
    lastCommit: "fix: manifest drift correction",
    lastCommitTime: "1h ago",
    contributors: 4,
    topics: ["platform.events"],
    stats: { ciPassRate: 98, avgMergeTime: "0.8d", mergesWeek: 5, activeContributors: 4, trend: "up" }
  },
  {
    id: "api-gateway",
    name: "api-gateway",
    role: "Public API edge",
    branch: "release/v2.18",
    health: "Ready",
    color: "mint",
    openPRs: 5,
    checks: "31/31",
    lastCommit: "chore: bump rc4, update changelog",
    lastCommitTime: "2h ago",
    contributors: 6,
    topics: ["payments.events", "checkout.events"],
    stats: { ciPassRate: 94, avgMergeTime: "2.1d", mergesWeek: 8, activeContributors: 6, trend: "up" }
  },
  {
    id: "order-workers",
    name: "order-workers",
    role: "Kafka consumers",
    branch: "main",
    health: "Watching lag",
    color: "amber",
    openPRs: 2,
    checks: "19/19",
    lastCommit: "perf: tune consumer rebalance intervals",
    lastCommitTime: "4h ago",
    contributors: 3,
    topics: ["orders.events", "inventory.sync"],
    stats: { ciPassRate: 87, avgMergeTime: "3.2d", mergesWeek: 2, activeContributors: 3, trend: "down" }
  },
  {
    id: "admin-web",
    name: "admin-web",
    role: "Internal UI",
    branch: "develop",
    health: "Synced",
    color: "blue",
    openPRs: 3,
    checks: "42/42",
    lastCommit: "feat: add SLO dashboard view",
    lastCommitTime: "6h ago",
    contributors: 2,
    topics: [],
    stats: { ciPassRate: 100, avgMergeTime: "1.5d", mergesWeek: 4, activeContributors: 2, trend: "up" }
  }
];

const workflow = [
  { id: "#482", repo: "api-gateway",      status: "open",   title: "release v2.18.0 rc4",         checks: "31/31", gate: "ready",   author: "jan.novak",    commits: 8,  comments: 3, required: 2, reviewers: [{name:"petra.dvorak",approved:true},{name:"martin.kral",approved:true}],   description: "Release candidate for v2.18.0. All checks green, Kafka lag within limits.", labels: ["release","staging"] },
  { id: "#480", repo: "api-gateway",      status: "open",   title: "fix: payment timeout retry",  checks: "31/31", gate: "review",  author: "petra.dvorak", commits: 3,  comments: 7, required: 1, reviewers: [{name:"jan.novak",approved:false}],                                        description: "Retry logic for payment service. Needs SLO impact review.",                labels: ["bugfix","slo"] },
  { id: "#477", repo: "order-workers",    status: "open",   title: "consumer rebalance tuning",   checks: "19/19", gate: "review",  author: "tomas.blaha",  commits: 5,  comments: 4, required: 2, reviewers: [{name:"jan.novak",approved:false},{name:"petra.dvorak",approved:false}], description: "Adjust rebalance interval to reduce lag on orders stream.",                 labels: ["kafka","perf"] },
  { id: "#476", repo: "order-workers",    status: "open",   title: "dead letter queue handler",   checks: "14/19", gate: "blocked", author: "tomas.blaha",  commits: 12, comments: 9, required: 2, reviewers: [{name:"jan.novak",approved:false}],                                        description: "DLQ handler for failed messages. 5 checks failing — requires fix.",        labels: ["reliability","blocked"] },
  { id: "#475", repo: "platform-control", status: "open",   title: "topic manifest drift fix",    checks: "12/12", gate: "ready",   author: "martin.kral",  commits: 2,  comments: 1, required: 1, reviewers: [{name:"jan.novak",approved:true}],                                         description: "Fix drift in topic manifest for inventory.sync.",                           labels: ["hotfix"] },
  { id: "#473", repo: "platform-control", status: "open",   title: "add inventory.sync manifest", checks: "12/12", gate: "ready",   author: "martin.kral",  commits: 1,  comments: 0, required: 1, reviewers: [{name:"jan.novak",approved:true}],                                         description: "Add new manifest for inventory.sync topic.",                                labels: ["feature"] },
  { id: "#471", repo: "admin-web",        status: "open",   title: "feat: add SLO dashboard",     checks: "42/42", gate: "ready",   author: "eva.kralova",  commits: 14, comments: 5, required: 2, reviewers: [{name:"petra.dvorak",approved:true},{name:"martin.kral",approved:true}],  description: "New SLO dashboard with charts for all services.",                           labels: ["feature","ui"] },
  { id: "#469", repo: "admin-web",        status: "open",   title: "fix: sidebar toggle mobile",  checks: "42/42", gate: "review",  author: "eva.kralova",  commits: 2,  comments: 2, required: 1, reviewers: [{name:"petra.dvorak",approved:false}],                                     description: "Fix sidebar toggle behaviour on mobile devices.",                           labels: ["bugfix","mobile"] },
  { id: "#466", repo: "api-gateway",      status: "merged", title: "fix: cors headers",           checks: "31/31", gate: "ready",   author: "jan.novak",    commits: 1,  comments: 2, required: 1, reviewers: [{name:"petra.dvorak",approved:true}],                                      description: "Fix CORS headers for allowed origins.",                                     labels: ["bugfix","security"] },
  { id: "#464", repo: "platform-control", status: "merged", title: "update gitops tooling v3",   checks: "12/12", gate: "ready",   author: "martin.kral",  commits: 4,  comments: 1, required: 1, reviewers: [{name:"jan.novak",approved:true}],                                         description: "Upgrade GitOps tooling to version 3.",                                      labels: ["tooling"] },
  { id: "#461", repo: "order-workers",    status: "closed", title: "wip: experimental batch",     checks: "8/19",  gate: "blocked", author: "tomas.blaha",  commits: 7,  comments: 3, required: 2, reviewers: [],                                                                         description: "Experimental batch processing — closed, will be reworked.",                labels: ["wip"] }
];

const actions = {
  "platform-control": [
    { run: "#203", workflow: "GitOps sync",  status: "passed",  branch: "main",           time: "1h ago",  duration: "1m 12s", triggeredBy: "martin.kral", commit: "fix: manifest drift",       steps: [{n:"Checkout",s:"passed"},{n:"Validate manifests",s:"passed"},{n:"Apply sync",s:"passed"}] },
    { run: "#202", workflow: "Drift check",  status: "passed",  branch: "main",           time: "3h ago",  duration: "0m 45s", triggeredBy: "schedule",    commit: "—",                          steps: [{n:"Checkout",s:"passed"},{n:"Drift analysis",s:"passed"}] },
    { run: "#201", workflow: "GitOps sync",  status: "failed",  branch: "main",           time: "5h ago",  duration: "0m 58s", triggeredBy: "martin.kral", commit: "add inventory.sync manifest",steps: [{n:"Checkout",s:"passed"},{n:"Validate manifests",s:"passed"},{n:"Apply sync",s:"failed"}] }
  ],
  "api-gateway": [
    { run: "#1842", workflow: "CI / test",       status: "passed",  branch: "release/v2.18", time: "2m ago",  duration: "3m 42s", triggeredBy: "jan.novak", commit: "chore: bump rc4",     steps: [{n:"Checkout",s:"passed"},{n:"Install",s:"passed"},{n:"Lint",s:"passed"},{n:"Test",s:"passed"},{n:"Build",s:"passed"}] },
    { run: "#1841", workflow: "CI / build",      status: "passed",  branch: "release/v2.18", time: "18m ago", duration: "2m 10s", triggeredBy: "jan.novak", commit: "chore: bump rc4",     steps: [{n:"Checkout",s:"passed"},{n:"Install",s:"passed"},{n:"Build",s:"passed"},{n:"Docker push",s:"passed"}] },
    { run: "#1840", workflow: "Deploy staging",  status: "running", branch: "release/v2.18", time: "34m ago", duration: "—",      triggeredBy: "jan.novak", commit: "chore: bump rc4",     steps: [{n:"Checkout",s:"passed"},{n:"Build image",s:"passed"},{n:"Push registry",s:"passed"},{n:"Deploy k8s",s:"running"}] }
  ],
  "order-workers": [
    { run: "#567", workflow: "CI / test",       status: "passed",  branch: "main",          time: "4h ago",  duration: "2m 58s", triggeredBy: "tomas.blaha", commit: "perf: tune consumer",steps: [{n:"Checkout",s:"passed"},{n:"Install",s:"passed"},{n:"Test",s:"passed"}] },
    { run: "#566", workflow: "CI / test",       status: "failed",  branch: "feature/dlq",   time: "6h ago",  duration: "1m 44s", triggeredBy: "tomas.blaha", commit: "feat: dlq handler",  steps: [{n:"Checkout",s:"passed"},{n:"Install",s:"passed"},{n:"Test",s:"failed"}] },
    { run: "#565", workflow: "Kafka lag check", status: "warning", branch: "main",          time: "8h ago",  duration: "0m 30s", triggeredBy: "schedule",    commit: "—",                  steps: [{n:"Connect broker",s:"passed"},{n:"Check lag",s:"warning"}] }
  ],
  "admin-web": [
    { run: "#312", workflow: "CI / test",      status: "passed",  branch: "develop",       time: "6h ago",  duration: "4m 20s", triggeredBy: "eva.kralova", commit: "feat: SLO dashboard", steps: [{n:"Checkout",s:"passed"},{n:"Install",s:"passed"},{n:"Lint",s:"passed"},{n:"Test",s:"passed"},{n:"Build",s:"passed"}] },
    { run: "#311", workflow: "CI / lint",      status: "passed",  branch: "develop",       time: "6h ago",  duration: "0m 55s", triggeredBy: "eva.kralova", commit: "feat: SLO dashboard", steps: [{n:"Checkout",s:"passed"},{n:"ESLint",s:"passed"},{n:"Type check",s:"passed"}] },
    { run: "#310", workflow: "Deploy preview", status: "passed",  branch: "feat/slo-view", time: "9h ago",  duration: "3m 05s", triggeredBy: "eva.kralova", commit: "feat: SLO initial",   steps: [{n:"Checkout",s:"passed"},{n:"Build",s:"passed"},{n:"Deploy Vercel",s:"passed"}] }
  ]
};

const environments = [
  {
    id: "dev", label: "dev", env: "Development",
    branch: "main", run: "#1845", status: "passed", time: "3m ago",
    triggeredBy: "jan.novak", duration: "3m 18s", commit: "chore: bump rc4, update changelog",
    jobs: [
      { name: "Build image",   status: "passed",  duration: "1m 12s" },
      { name: "Run tests",     status: "passed",  duration: "1m 30s" },
      { name: "Push registry", status: "passed",  duration: "0m 22s" },
      { name: "Deploy k8s",    status: "passed",  duration: "0m 14s" }
    ]
  },
  {
    id: "sys", label: "sys", env: "System",
    branch: "main", run: "#1844", status: "passed", time: "18m ago",
    triggeredBy: "jan.novak", duration: "3m 44s", commit: "chore: bump rc4, update changelog",
    jobs: [
      { name: "Build image",   status: "passed",  duration: "1m 14s" },
      { name: "Run tests",     status: "passed",  duration: "1m 48s" },
      { name: "Push registry", status: "passed",  duration: "0m 18s" },
      { name: "Deploy k8s",    status: "passed",  duration: "0m 24s" }
    ]
  },
  {
    id: "prs", label: "prs", env: "Pre-staging",
    branch: "release/v2.18", run: "#1843", status: "running", time: "34m ago",
    triggeredBy: "jan.novak", duration: "—", commit: "chore: bump rc4, update changelog",
    jobs: [
      { name: "Build image",   status: "passed",  duration: "1m 08s" },
      { name: "Run tests",     status: "passed",  duration: "1m 52s" },
      { name: "Push registry", status: "passed",  duration: "0m 16s" },
      { name: "Deploy k8s",    status: "running", duration: "—" }
    ]
  },
  {
    id: "int", label: "int", env: "Integration",
    branch: "release/v2.18", run: "#1840", status: "warning", time: "2h ago",
    triggeredBy: "schedule", duration: "4m 02s", commit: "fix: payment timeout retry",
    jobs: [
      { name: "Build image",   status: "passed",  duration: "1m 16s" },
      { name: "Run tests",     status: "warning", duration: "2m 10s" },
      { name: "Push registry", status: "passed",  duration: "0m 20s" },
      { name: "Deploy k8s",    status: "passed",  duration: "0m 16s" }
    ]
  },
  {
    id: "pred", label: "pred", env: "Pre-production",
    branch: "release/v2.17", run: "#1812", status: "passed", time: "1d ago",
    triggeredBy: "petra.dvorak", duration: "3m 58s", commit: "chore: v2.17.4 hotfix",
    jobs: [
      { name: "Build image",   status: "passed",  duration: "1m 10s" },
      { name: "Run tests",     status: "passed",  duration: "2m 04s" },
      { name: "Push registry", status: "passed",  duration: "0m 22s" },
      { name: "Deploy k8s",    status: "passed",  duration: "0m 22s" }
    ]
  },
  {
    id: "prod", label: "prod", env: "Production",
    branch: "release/v2.17", run: "#1810", status: "passed", time: "1d ago",
    triggeredBy: "petra.dvorak", duration: "4m 12s", commit: "chore: v2.17.4 hotfix",
    jobs: [
      { name: "Build image",   status: "passed",  duration: "1m 18s" },
      { name: "Run tests",     status: "passed",  duration: "2m 16s" },
      { name: "Push registry", status: "passed",  duration: "0m 22s" },
      { name: "Deploy k8s",    status: "passed",  duration: "0m 16s" }
    ]
  }
];

// Snapshot used by Overview's cross-system row; kept in sync with the
// values rendered in initPromCharts() further down.
const promSummary = {
  status: "watch",
  label: "P99 latency 142ms (+12ms) · SLO 99.94% nominal"
};

const ocpPods = [
  {
    name: "api-gateway-7f9c8d6b45-x2kq9", app: "api-gateway", namespace: "api-gateway-prod",
    node: "worker-03", image: "api-gateway:2.17.4", status: "Running", restarts: 0, age: "4d 2h",
    lastRestart: null
  },
  {
    name: "api-gateway-7f9c8d6b45-p8j1w", app: "api-gateway", namespace: "api-gateway-prod",
    node: "worker-02", image: "api-gateway:2.17.4", status: "Running", restarts: 0, age: "4d 2h",
    lastRestart: null
  },
  {
    name: "api-gateway-canary-58f7c9d4b-w1x5y", app: "api-gateway", namespace: "api-gateway-staging",
    node: "worker-03", image: "api-gateway:2.18.0-rc4", status: "Running", restarts: 2, age: "5h",
    lastRestart: { time: "1h ago", reason: "Readiness probe failed", prevStatus: "Running", detail: "/healthz timed out during rollout" }
  },
  {
    name: "order-workers-6c9f7d8b9c-k7m2p", app: "order-workers", namespace: "order-workers-prod",
    node: "worker-01", image: "order-workers:1.9.2", status: "CrashLoopBackOff", restarts: 7, age: "1d 6h",
    lastRestart: { time: "12m ago", reason: "OOMKilled", prevStatus: "Running", detail: "Memory limit 512Mi exceeded during batch rebalance" }
  },
  {
    name: "order-workers-6c9f7d8b9c-n4d8x", app: "order-workers", namespace: "order-workers-prod",
    node: "worker-02", image: "order-workers:1.9.2", status: "Running", restarts: 1, age: "1d 6h",
    lastRestart: { time: "3h ago", reason: "Error", prevStatus: "Running", detail: "Exit code 1 — unhandled promise rejection" }
  },
  {
    name: "order-workers-6c9f7d8b9c-q2w9e", app: "order-workers", namespace: "order-workers-staging",
    node: "worker-04", image: "order-workers:1.9.2", status: "Running", restarts: 0, age: "2d 3h",
    lastRestart: null
  },
  {
    name: "platform-control-59d6f8c7b-t9v2r", app: "platform-control", namespace: "platform-control-prod",
    node: "worker-01", image: "platform-control:3.4.0", status: "Running", restarts: 0, age: "9d 14h",
    lastRestart: null
  },
  {
    name: "admin-web-64b9d7f5c-m3q7z", app: "admin-web", namespace: "admin-web-staging",
    node: "worker-04", image: "admin-web:0.9.1-rc2", status: "Pending", restarts: 0, age: "6h",
    lastRestart: null
  }
];

const ocpExpandedRows = {};
const overviewOpen = { issues: false, pipeline: false };

// --- Overview ---
function renderOverview() {
  const openPRs      = workflow.filter((w) => w.status === "open");
  const readyPRs     = openPRs.filter((w) => w.gate === "ready");
  const blockedPRs   = openPRs.filter((w) => w.gate === "blocked");
  const allActions   = Object.entries(actions).flatMap(([rid, runs]) => runs.map((r) => ({ ...r, repoId: rid })));
  const failedActs   = allActions.filter((a) => a.status === "failed");
  const watchingRepos = repos.filter((r) => r.health === "Watching lag");
  const hasFail = environments.some((e) => e.status === "failed");
  const hasWarn = environments.some((e) => e.status === "warning");
  const hasRun  = environments.some((e) => e.status === "running");
  const ocpCritical = ocpPods.filter((p) => p.status === "CrashLoopBackOff" || p.status === "Error");
  const ocpPending   = ocpPods.filter((p) => p.status === "Pending");
  const ocpFlappy    = ocpPods.filter((p) => p.status === "Running" && p.lastRestart);
  const needsCount   = blockedPRs.length + failedActs.length + watchingRepos.length + ocpCritical.length;

  // Status banner — single glance verdict before anything else
  let banner;
  if (blockedPRs.length || failedActs.length || hasFail || ocpCritical.length) {
    banner = {
      sev: "problem", icon: "alert",
      title: `${needsCount} issue${needsCount === 1 ? "" : "s"} need attention`,
      sub: [
        blockedPRs.length && `${blockedPRs.length} blocked PR${blockedPRs.length === 1 ? "" : "s"}`,
        failedActs.length && `${failedActs.length} failed action${failedActs.length === 1 ? "" : "s"}`,
        watchingRepos.length && `${watchingRepos.length} repo${watchingRepos.length === 1 ? "" : "s"} watching lag`,
        ocpCritical.length && `${ocpCritical.length} pod${ocpCritical.length === 1 ? "" : "s"} crash-looping`
      ].filter(Boolean).join(" · ")
    };
  } else if (watchingRepos.length || hasWarn || ocpPending.length || ocpFlappy.length) {
    banner = {
      sev: "watch", icon: "alert",
      title: `${watchingRepos.length + ocpPending.length + ocpFlappy.length || 1} thing${(watchingRepos.length + ocpPending.length + ocpFlappy.length || 1) === 1 ? "" : "s"} worth watching`,
      sub: [
        watchingRepos.length && `Kafka lag on ${watchingRepos.map((r) => r.name).join(", ")}`,
        ocpPending.length && `${ocpPending.length} pod${ocpPending.length === 1 ? "" : "s"} pending`,
        ocpFlappy.length && `${ocpFlappy.length} pod${ocpFlappy.length === 1 ? "" : "s"} restarted recently`
      ].filter(Boolean).join(" · ") || "Environment warning in pipeline"
    };
  } else if (hasRun) {
    banner = {
      sev: "running", icon: "pulse",
      title: "Deploy in progress",
      sub: `${environments.find((e) => e.status === "running")?.env || "Environment"} rolling out — nothing needs action yet`
    };
  } else {
    banner = {
      sev: "ok", icon: "test",
      title: "All systems operational",
      sub: "No blocked PRs, no failed actions, Kafka lag nominal"
    };
  }
  // Issue rows shown when the banner is expanded — each deep-links to its section
  const attentionItems = [
    ...blockedPRs.map((pr) => ({ type: "blocked PR", color: "red", title: `${pr.id} — ${pr.title}`, sub: `${pr.repo} · ${pr.checks} checks · ${pr.author}`, view: "workflow", go: "PR Workflow" })),
    ...failedActs.map((a)  => ({ type: "failed action", color: "red", title: `${a.run} ${a.workflow}`, sub: `${a.repoId} · ${a.branch} · ${a.time}`, view: "workflow", go: "PR Workflow" })),
    ...ocpCritical.map((p) => ({ type: "pod crash", color: "red", title: p.name, sub: `${p.namespace} · ${p.lastRestart?.reason || p.status}`, view: "ocp", go: "OCP" })),
    ...watchingRepos.map((r) => ({ type: "watch", color: "amber", title: r.name, sub: `Kafka lag · ${r.topics[0] || "—"}`, view: "kafka", go: "Kafka" }))
  ];
  const expandable = attentionItems.length > 0;

  document.querySelector("#overviewStatus").innerHTML = `
    <div class="status-banner status-banner--${banner.sev} ${expandable ? "status-banner--clickable" : ""}"
         ${expandable ? `role="button" tabindex="0" aria-expanded="${overviewOpen.issues}"` : ""}>
      <span class="status-banner-icon" data-icon="${banner.icon}"></span>
      <div class="status-banner-body">
        <strong>${banner.title}</strong>
        <span>${banner.sub}</span>
      </div>
      <span class="status-banner-time">api-gateway · updated ${environments[0].time}</span>
      ${expandable ? `<svg class="status-banner-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>` : ""}
    </div>
    ${expandable && overviewOpen.issues ? `
      <div class="overview-expand">
        ${attentionItems.map((item) => `
          <button class="overview-expand-row" type="button" data-goto="${item.view}">
            <span class="attention-type ${item.color}">${item.type}</span>
            <div class="attention-body">
              <strong>${item.title}</strong>
              <span>${item.sub}</span>
            </div>
            <span class="expand-go">${item.go}<svg class="row-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
          </button>
        `).join("")}
      </div>
    ` : ""}
  `;
  document.querySelectorAll("#overviewStatus [data-icon]").forEach((n) => { n.innerHTML = icons[n.dataset.icon] || ""; });

  // System status — one glance across every connected system
  const runningPods = ocpPods.filter((p) => p.status === "Running").length;
  const systems = [
    {
      key: "github", label: "GitHub", icon: "github", view: "workflow",
      sev: failedActs.length ? "problem" : blockedPRs.length ? "watch" : "ok",
      sub: (failedActs.length || blockedPRs.length)
        ? `${failedActs.length} failed action${failedActs.length === 1 ? "" : "s"} · ${blockedPRs.length} blocked PR${blockedPRs.length === 1 ? "" : "s"}`
        : `${openPRs.length} open PRs · checks passing`
    },
    {
      key: "kafka", label: "Kafka", icon: "stream", view: "kafka",
      sev: watchingRepos.length ? "watch" : "ok",
      sub: watchingRepos.length ? `Lag warning · ${watchingRepos.map((r) => r.name).join(", ")}` : "Consumer lag nominal"
    },
    {
      key: "prometheus", label: "Prometheus", icon: "pulse", view: "prometheus",
      sev: promSummary.status,
      sub: promSummary.label
    },
    {
      key: "ocp", label: "OCP", icon: "cloud", view: "ocp",
      sev: ocpCritical.length ? "problem" : (ocpPending.length || ocpFlappy.length) ? "watch" : "ok",
      sub: ocpCritical.length
        ? `${ocpCritical.length} pod${ocpCritical.length === 1 ? "" : "s"} crash-looping`
        : `${runningPods}/${ocpPods.length} pods running`
    }
  ];
  document.querySelector("#systemStatus").innerHTML = systems.map((s) => `
    <button class="system-chip system-chip--${s.sev}" type="button" data-goto="${s.view}"
            aria-label="Open ${s.label} section">
      <span class="system-chip-icon" data-icon="${s.icon}"></span>
      <div class="system-chip-body">
        <strong>${s.label}</strong>
        <span>${s.sub}</span>
      </div>
      <svg class="system-chip-arrow" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `).join("");
  document.querySelectorAll("#systemStatus [data-icon]").forEach((n) => { n.innerHTML = icons[n.dataset.icon] || ""; });
  document.querySelectorAll("#systemStatus [data-goto]").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelector(`.nav-item[data-view="${chip.dataset.goto}"]`)?.click();
    });
  });

  // Hero — environment pipeline status
  const sDot  = { passed: "✓", failed: "✗", running: "↻", warning: "⚠" };
  const sDotC = { passed: "mint", failed: "red", running: "blue", warning: "amber" };
  const envPill = { passed: "ready", failed: "blocked", running: "running", warning: "review" };
  const overallEnvStatus = hasFail ? "failed" : hasWarn ? "warning" : hasRun ? "running" : "passed";
  document.querySelector("#overviewHero").innerHTML = `
    <div class="hero-strip hero-strip--${overallEnvStatus} hero-strip--clickable"
         role="button" tabindex="0" aria-expanded="${overviewOpen.pipeline}">
      <span class="hero-strip-dot hero-strip-dot--${sDotC[overallEnvStatus]}"></span>
      <span class="hero-strip-tag">Pipeline</span>
      <span class="hero-strip-sep"></span>
      <div class="hero-env-status">
        ${environments.map((env) => `
          <div class="hero-env-chip hero-env-chip--${env.status}">
            <span class="env-badge env-${env.id}">${env.label}</span>
            <span class="hero-env-icon">${sDot[env.status] || "•"}</span>
          </div>
        `).join("")}
      </div>
      <span class="hero-strip-dim">api-gateway · updated ${environments[0].time}</span>
      <svg class="status-banner-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
    </div>
    ${overviewOpen.pipeline ? `
      <div class="overview-expand">
        ${environments.map((env) => `
          <button class="overview-expand-row" type="button" data-goto="deployments">
            <span class="env-badge env-${env.id}">${env.label}</span>
            <div class="attention-body">
              <strong>${env.env}</strong>
              <span>${env.branch} · run ${env.run} · ${env.time} · by ${env.triggeredBy}${env.duration !== "—" ? ` · ${env.duration}` : ""}</span>
            </div>
            <span class="pill ${envPill[env.status] || "neutral"}">${env.status}</span>
            <span class="expand-go">Deployments<svg class="row-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
          </button>
        `).join("")}
      </div>
    ` : ""}
  `;

  // Toggle handlers for the expandable banner + pipeline strip
  [["#overviewStatus .status-banner--clickable", "issues"],
   ["#overviewHero .hero-strip--clickable", "pipeline"]].forEach(([sel, key]) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const flip = () => { overviewOpen[key] = !overviewOpen[key]; renderOverview(); };
    el.addEventListener("click", flip);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
  });

  // Deep links from expanded rows into their sections
  document.querySelectorAll("#overviewStatus .overview-expand [data-goto], #overviewHero .overview-expand [data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(`.nav-item[data-view="${btn.dataset.goto}"]`)?.click();
    });
  });

  // Metric cards
  const avgCI = Math.round(repos.reduce((s, r) => s + r.stats.ciPassRate, 0) / repos.length);
  document.querySelector("#overviewMetrics").innerHTML = `
    <article class="metric-card ${watchingRepos.length ? "metric-card--watch" : ""}">
      <span class="metric-icon ${watchingRepos.length ? "amber" : "violet"}" data-icon="repo"></span>
      <small>Connected repos</small>
      <strong>${repos.length}</strong>
      <p>${repos.map((r) => r.name.split("-")[0]).join(", ")}</p>
    </article>
    <article class="metric-card ${blockedPRs.length ? "metric-card--alert" : ""}">
      <span class="metric-icon ${blockedPRs.length ? "red" : "mint"}" data-icon="gitpull"></span>
      <small>Open PRs</small>
      <strong>${openPRs.length}</strong>
      <p>${readyPRs.length} ready · ${blockedPRs.length} blocked</p>
    </article>
    <article class="metric-card ${watchingRepos.length ? "metric-card--watch" : ""}">
      <span class="metric-icon ${watchingRepos.length ? "amber" : "blue"}" data-icon="stream"></span>
      <small>Kafka max lag</small>
      <strong>2.4k</strong>
      <p>orders-events-consumer</p>
    </article>
    <article class="metric-card ${ocpCritical.length ? "metric-card--alert" : (ocpPending.length || ocpFlappy.length) ? "metric-card--watch" : ""}">
      <span class="metric-icon ${ocpCritical.length ? "red" : (ocpPending.length || ocpFlappy.length) ? "amber" : "mint"}" data-icon="pod"></span>
      <small>OCP pods</small>
      <strong>${runningPods}/${ocpPods.length}</strong>
      <p>${ocpCritical.length ? `${ocpCritical.length} crash-looping · ${ocpPending.length} pending` : ocpPending.length ? `${ocpPending.length} pending` : "all running"}</p>
    </article>
  `;
  document.querySelectorAll("#overviewMetrics [data-icon]").forEach((n) => { n.innerHTML = icons[n.dataset.icon] || ""; });

  // Live feed — computed from real data
  const feedItems = [
    ...readyPRs.slice(0, 2).map((pr) => ({ src: "GH", text: `${pr.id} ${pr.title} — ready`, sub: pr.repo, time: "just now" })),
    ...failedActs.slice(0, 2).map((a)  => ({ src: "GH", text: `Action ${a.run} ${a.workflow} failed`, sub: a.repoId, time: a.time })),
    ...watchingRepos.map((r) => ({ src: "K",  text: `${r.topics[0] || "topic"} lag warning`, sub: r.name, time: "7 min ago" })),
    { src: "P", text: "checkout-api burn rate recovered", sub: "prometheus", time: "13 min ago" }
  ].slice(0, 5);

  document.querySelector("#liveFeed").innerHTML = feedItems.map((f) => `
    <article>
      <b>${f.src}</b>
      <div>
        <strong>${f.text}</strong>
        <span>${f.sub} · ${f.time}</span>
      </div>
    </article>
  `).join("");
}

// --- Repositories ---
function renderRepoSummary() {
  const totalPRs    = repos.reduce((s, r) => s + r.openPRs, 0);
  const avgCI       = Math.round(repos.reduce((s, r) => s + r.stats.ciPassRate, 0) / repos.length);
  const totalMerges = repos.reduce((s, r) => s + r.stats.mergesWeek, 0);
  const watching    = repos.filter((r) => r.health === "Watching lag").length;

  const ciColor      = avgCI >= 95 ? "mint" : avgCI >= 85 ? "amber" : "red";
  const watchColor   = watching > 0 ? "amber" : "mint";
  const watchLabel   = watching > 0 ? "requires attention" : "all good";
  const totalContrib = repos.reduce((s, r) => s + r.stats.activeContributors, 0);

  document.querySelector("#repoSummary").innerHTML = `
    <div class="panel repo-summary">
      <div class="summary-stat">
        <span class="summary-label">Total open PRs</span>
        <strong class="summary-value">${totalPRs}</strong>
        <span class="summary-sub">across ${repos.length} repos</span>
      </div>
      <div class="summary-stat">
        <span class="summary-label">Avg CI pass rate</span>
        <strong class="summary-value ${ciColor}">${avgCI}%</strong>
        <span class="summary-sub">last 30 days</span>
      </div>
      <div class="summary-stat">
        <span class="summary-label">Merges this week</span>
        <strong class="summary-value">${totalMerges}</strong>
        <span class="summary-sub">across all repos</span>
      </div>
      <div class="summary-stat">
        <span class="summary-label">Active contributors</span>
        <strong class="summary-value">${totalContrib}</strong>
        <span class="summary-sub">last 7 days</span>
      </div>
      <div class="summary-stat">
        <span class="summary-label">Watch status</span>
        <strong class="summary-value ${watchColor}">${watching} / ${repos.length}</strong>
        <span class="summary-sub">${watchLabel}</span>
      </div>
    </div>
  `;
}

let activeRepoId = null;

function renderRepos() {
  document.querySelector("#repoGrid").innerHTML = repos.map((repo) => `
    <article class="repo-card ${repo.health === "Watching lag" ? "repo-card--watch" : ""} ${activeRepoId === repo.id ? "selected" : ""}"
             data-repo-id="${repo.id}" role="button" tabindex="0" aria-expanded="${activeRepoId === repo.id}">
      <div class="repo-top">
        <span class="repo-mark ${repo.color}">${repo.name.slice(0, 2).toUpperCase()}</span>
        <span class="health ${repo.health === "Watching lag" ? "watch" : "ok"}">${repo.health}</span>
      </div>
      <h3>${repo.name}</h3>
      <p>${repo.role}</p>
      <div class="repo-stats">
        <span class="repo-stat"><b>${repo.openPRs}</b>open PRs</span>
        <span class="repo-stat"><b>${repo.checks}</b>checks</span>
      </div>
      <div class="repo-commit">
        <span class="commit-msg">${repo.lastCommit}</span>
        <span class="commit-time">${repo.lastCommitTime}</span>
      </div>
      <div class="repo-meta">
        <span>${repo.branch}</span>
        <span>${repo.contributors} contributors</span>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".repo-card").forEach((card) => {
    const activate = () => {
      activeRepoId = activeRepoId === card.dataset.repoId ? null : card.dataset.repoId;
      renderRepos();
      renderRepoDetail();
    };
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") activate(); });
  });
}

function renderRepoDetail() {
  const container = document.querySelector("#repoDetail");
  if (!activeRepoId) { container.hidden = true; return; }
  const repo = repos.find((r) => r.id === activeRepoId);
  const repoPRs = workflow.filter((w) => w.repo === activeRepoId);
  const s = repo.stats;
  const ciColor = s.ciPassRate >= 95 ? "mint" : s.ciPassRate >= 85 ? "amber" : "red";
  const trendIcon = s.trend === "up"
    ? `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m18 9-6-6-6 6"/><path d="M12 3v14"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m6 15 6 6 6-6"/><path d="M12 21V7"/></svg>`;

  container.hidden = false;
  container.innerHTML = `
    <div class="panel detail-panel">
      <div class="panel-head">
        <div style="display:flex;align-items:center;gap:12px">
          <span class="repo-mark ${repo.color}">${repo.name.slice(0, 2).toUpperCase()}</span>
          <div><h2>${repo.name}</h2><p>${repo.role} · ${repo.branch}</p></div>
        </div>
        <button class="soft-button" id="detailClose" type="button" aria-label="Close detail">${icons.close}</button>
      </div>
      <div class="detail-stats">
        <div class="detail-stat">
          <span class="detail-stat-label">CI pass rate</span>
          <strong class="detail-stat-value ${ciColor}">${s.ciPassRate}%</strong>
          <span class="detail-stat-sub">last 30 days</span>
        </div>
        <div class="detail-stat">
          <span class="detail-stat-label">Avg merge time</span>
          <strong class="detail-stat-value">${s.avgMergeTime}</strong>
          <span class="detail-stat-sub">from PR open</span>
        </div>
        <div class="detail-stat">
          <span class="detail-stat-label">Merges this week</span>
          <strong class="detail-stat-value" style="display:flex;align-items:center;gap:6px">
            ${s.mergesWeek}
            <span class="stat-trend ${s.trend}">${trendIcon}</span>
          </strong>
          <span class="detail-stat-sub">vs. last week</span>
        </div>
        <div class="detail-stat">
          <span class="detail-stat-label">Active contributors</span>
          <strong class="detail-stat-value">${s.activeContributors}</strong>
          <span class="detail-stat-sub">last 7 days</span>
        </div>
      </div>
      <div class="detail-body">
        <div class="detail-col">
          <div class="detail-label">Open PRs</div>
          ${repoPRs.length ? `
            <div class="detail-pr-list">
              ${repoPRs.map((pr) => `
                <div class="detail-pr-row">
                  <span class="detail-pr-id">${pr.id}</span>
                  <span class="detail-pr-title">${pr.title}</span>
                  <span class="detail-pr-impact">${pr.status}</span>
                  <span class="pill ${pr.gate}">${pr.gate}</span>
                </div>
              `).join("")}
            </div>
          ` : `<p class="detail-empty">No open PRs</p>`}
        </div>
        <div class="detail-col">
          <div class="detail-label">Checks &amp; status</div>
          <div class="detail-checks">
            <div class="detail-check done"><span></span>GitHub Actions<b>${repo.checks} passed</b></div>
            <div class="detail-check done"><span></span>TDD Gate<b>all green</b></div>
            <div class="detail-check ${repo.health === "Watching lag" ? "watch" : "done"}">
              <span></span>Kafka<b>${repo.health === "Watching lag" ? "watch orders.events" : "no issues"}</b>
            </div>
          </div>
          ${repo.topics.length ? `
            <div class="detail-label" style="margin-top:20px">Kafka topics</div>
            <div class="detail-topics">${repo.topics.map((t) => `<span class="pill neutral">${t}</span>`).join("")}</div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
  document.querySelector("#detailClose").addEventListener("click", () => {
    activeRepoId = null; renderRepos(); renderRepoDetail();
  });
}

renderOverview();
renderRepoSummary();
renderRepos();
renderRepoDetail();

// --- PR Workflow ---
let selectedRepos = new Set(repos.map((r) => r.id));
const panelTabs = {};
const panelFilters = {};
const expandedRows = {};
const deployExpandedRows = {};

const actionStatusClass = { passed: "ready", failed: "blocked", warning: "review", running: "running" };

const prFilterDefs = [
  { key: "all",    label: "All"    },
  { key: "open",   label: "Open"   },
  { key: "merged", label: "Merged" },
  { key: "closed", label: "Closed" },
  { key: "failed", label: "Failed" }
];

const actionFilterDefs = [
  { key: "all",     label: "All"     },
  { key: "passed",  label: "Passed"  },
  { key: "failed",  label: "Failed"  },
  { key: "running", label: "Running" },
  { key: "warning", label: "Warning" }
];

function filterBar(defs, activeKey, repoId, tab) {
  return `<div class="table-filter-bar">
    ${defs.map((f) => `
      <button class="table-filter-pill ${activeKey === f.key ? "active" : ""}"
              data-repo="${repoId}" data-tab="${tab}" data-tfilter="${f.key}" type="button">
        ${f.label}
      </button>
    `).join("")}
  </div>`;
}

function expandRowPR(pr) {
  const approved = pr.reviewers.filter((r) => r.approved).length;
  return `
    <tr class="expand-row">
      <td colspan="3">
        <div class="row-expand">
          <div class="expand-meta-bar">
            <span><b>Author</b>${pr.author}</span>
            <span><b>Commits</b>${pr.commits}</span>
            <span><b>Comments</b>${pr.comments}</span>
            <span><b>Approvals</b>${approved}/${pr.required}</span>
          </div>
          <p class="expand-desc">${pr.description}</p>
          <div class="expand-footer">
            <div class="expand-reviewers">
              ${pr.reviewers.map((r) => `
                <span class="reviewer ${r.approved ? "approved" : "pending"}">${r.approved ? "✓" : "⏳"} ${r.name}</span>
              `).join("")}
              ${!pr.reviewers.length ? `<span class="detail-empty">No reviewers</span>` : ""}
            </div>
            <div class="expand-labels">
              ${pr.labels.map((l) => `<span class="pill neutral">${l}</span>`).join("")}
            </div>
          </div>
        </div>
      </td>
    </tr>
  `;
}

function expandRowAction(run) {
  const sc = { passed: "passed", failed: "failed", running: "running", warning: "warning" };
  const ic = { passed: "✓", failed: "✗", running: "↻", warning: "⚠" };
  return `
    <tr class="expand-row">
      <td colspan="3">
        <div class="row-expand">
          <div class="expand-meta-bar">
            <span><b>Duration</b>${run.duration}</span>
            <span><b>Triggered by</b>${run.triggeredBy}</span>
            <span><b>Commit</b>${run.commit}</span>
            <span><b>Time</b>${run.time}</span>
          </div>
          <div class="expand-steps">
            ${run.steps.map((step) => `
              <span class="step-chip ${sc[step.s] || ""}">
                ${ic[step.s] || "•"} ${step.n}
              </span>
            `).join("")}
          </div>
        </div>
      </td>
    </tr>
  `;
}

function renderPRsContent(repoPRs, repo, filter, expandedId) {
  const filtered = filter === "all" ? repoPRs :
    filter === "failed" ? repoPRs.filter((p) => p.gate === "blocked") :
    repoPRs.filter((p) => p.status === filter);

  const bar = filterBar(prFilterDefs, filter, repo.id, "prs");
  if (!filtered.length) return bar + `<p class="detail-empty" style="padding:14px 20px">No PRs for this filter</p>`;

  return bar + `
    <div class="table-wrap"><table>
      <thead><tr><th>Pull request</th><th>Checks</th><th>Gate</th></tr></thead>
      <tbody>
        ${filtered.map((pr) => {
          const open = expandedId === pr.id;
          return `
            <tr class="row-clickable ${open ? "row-expanded" : ""}"
                data-xid="${pr.id}" data-repo="${repo.id}" data-xtab="prs">
              <td><strong>${pr.id}</strong><span>${pr.title}</span></td>
              <td><span class="pill neutral">${pr.checks}</span></td>
              <td><div class="td-chevron-wrap"><span class="pill ${pr.gate}">${pr.gate}</span><svg class="row-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></div></td>
            </tr>
            ${open ? expandRowPR(pr) : ""}
          `;
        }).join("")}
      </tbody>
    </table></div>
  `;
}

function renderActionsContent(repoActions, repo, filter, expandedId) {
  const filtered = filter === "all" ? repoActions : repoActions.filter((a) => a.status === filter);

  const bar = filterBar(actionFilterDefs, filter, repo.id, "actions");
  if (!filtered.length) return bar + `<p class="detail-empty" style="padding:14px 20px">No runs for this filter</p>`;

  return bar + `
    <div class="table-wrap"><table>
      <thead><tr><th>Run</th><th>Workflow</th><th>Status</th></tr></thead>
      <tbody>
        ${filtered.map((run) => {
          const open = expandedId === run.run;
          return `
            <tr class="row-clickable ${open ? "row-expanded" : ""}"
                data-xid="${run.run}" data-repo="${repo.id}" data-xtab="actions">
              <td><strong>${run.run}</strong><span>${run.branch}</span></td>
              <td>${run.workflow}</td>
              <td><div class="td-chevron-wrap"><span class="pill ${actionStatusClass[run.status] || "neutral"}">${run.status}</span><svg class="row-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></div></td>
            </tr>
            ${open ? expandRowAction(run) : ""}
          `;
        }).join("")}
      </tbody>
    </table></div>
  `;
}

function renderWorkflowFilters() {
  const allSelected = selectedRepos.size === repos.length;
  document.querySelector("#workflowFilters").innerHTML = `
    <div class="filter-bar">
      <button class="filter-pill ${allSelected ? "active" : ""}" data-filter="all" type="button">
        All repos
      </button>
      ${repos.map((r) => `
        <button class="filter-pill ${!allSelected && selectedRepos.has(r.id) ? "active" : ""}"
                data-filter="${r.id}" type="button">
          <span class="filter-dot ${r.color}"></span>${r.name}
        </button>
      `).join("")}
    </div>
  `;
  document.querySelectorAll(".filter-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      if (f === "all") {
        selectedRepos = new Set(repos.map((r) => r.id));
      } else if (selectedRepos.size === repos.length) {
        selectedRepos = new Set([f]);
      } else if (selectedRepos.has(f)) {
        selectedRepos.delete(f);
        if (selectedRepos.size === 0) selectedRepos = new Set(repos.map((r) => r.id));
      } else {
        selectedRepos.add(f);
      }
      renderWorkflowFilters();
      renderWorkflowPanels();
    });
  });
}

function renderWorkflowPanels() {
  const container = document.querySelector("#workflowPanels");
  const selected = repos.filter((r) => selectedRepos.has(r.id));
  container.className = `workflow-panels cols-${selected.length}`;

  container.innerHTML = selected.map((repo) => {
    const tab    = panelTabs[repo.id] || "prs";
    const filter = panelFilters[repo.id]?.[tab] || "all";
    const xid    = expandedRows[repo.id]?.[tab] || null;
    const repoPRs    = workflow.filter((w) => w.repo === repo.id);
    const repoActions = actions[repo.id] || [];
    return `
      <section class="panel">
        <div class="panel-head">
          <div style="display:flex;align-items:center;gap:10px">
            <span class="repo-mark-sm ${repo.color}">${repo.name.slice(0, 2).toUpperCase()}</span>
            <div><h2>${repo.name}</h2><p>${repo.branch}</p></div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
            <span class="health ${repo.health === "Watching lag" ? "watch" : "ok"}">${repo.health}</span>
            <div class="range-tabs" aria-label="Switch view">
              <button class="${tab === "prs"     ? "active" : ""}" data-repo="${repo.id}" data-panel-tab="prs"     type="button">PRs</button>
              <button class="${tab === "actions" ? "active" : ""}" data-repo="${repo.id}" data-panel-tab="actions" type="button">Actions</button>
            </div>
          </div>
        </div>
        ${tab === "prs"
          ? renderPRsContent(repoPRs, repo, filter, xid)
          : renderActionsContent(repoActions, repo, filter, xid)}
      </section>
    `;
  }).join("");

  // Tab switch
  container.querySelectorAll("[data-panel-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      panelTabs[btn.dataset.repo] = btn.dataset.panelTab;
      renderWorkflowPanels();
    });
  });

  // Table filter
  container.querySelectorAll("[data-tfilter]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const { repo, tab, tfilter } = btn.dataset;
      if (!panelFilters[repo]) panelFilters[repo] = {};
      panelFilters[repo][tab] = tfilter;
      if (expandedRows[repo]) expandedRows[repo][tab] = null;
      renderWorkflowPanels();
    });
  });

  // Expandable rows
  container.querySelectorAll(".row-clickable").forEach((row) => {
    row.addEventListener("click", () => {
      const { xid, repo, xtab } = row.dataset;
      if (!expandedRows[repo]) expandedRows[repo] = {};
      expandedRows[repo][xtab] = expandedRows[repo][xtab] === xid ? null : xid;
      renderWorkflowPanels();
    });
  });
}

renderWorkflowFilters();
renderWorkflowPanels();
renderDeployments();
renderOcp();

// --- Deployments ---
function renderDeployments() {
  const container = document.querySelector("#deploymentsView");
  if (!container) return;

  const sc = { passed: "ready", failed: "blocked", running: "running", warning: "review" };
  const ic = { passed: "✓", failed: "✗", running: "↻", warning: "⚠" };

  container.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div><h2>api-gateway</h2><p>Deployment pipeline · 6 environments</p></div>
        <span class="health ok">pipeline active</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Environment</th>
              <th>Branch</th>
              <th>Run</th>
              <th>Triggered by</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${environments.map((env) => {
              const open = deployExpandedRows[env.id];
              return `
                <tr class="row-clickable ${open ? "row-expanded" : ""}" data-deploy-id="${env.id}">
                  <td>
                    <strong class="env-badge env-${env.id}">${env.label}</strong>
                    <span>${env.env}</span>
                  </td>
                  <td>${env.branch}</td>
                  <td><strong>${env.run}</strong><span>${env.time}</span></td>
                  <td>${env.triggeredBy}</td>
                  <td>${env.duration}</td>
                  <td>
                    <div class="td-chevron-wrap">
                      <span class="pill ${sc[env.status] || "neutral"}">${env.status}</span>
                      <svg class="row-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </td>
                </tr>
                ${open ? `
                  <tr class="expand-row">
                    <td colspan="6">
                      <div class="row-expand">
                        <div class="expand-meta-bar">
                          <span><b>Commit</b>${env.commit}</span>
                          <span><b>Triggered by</b>${env.triggeredBy}</span>
                        </div>
                        <div class="deploy-jobs">
                          ${env.jobs.map((job) => `
                            <div class="deploy-job-row">
                              <span class="step-chip ${job.status}">${ic[job.status] || "•"} ${job.name}</span>
                              <span class="job-dur">${job.duration}</span>
                            </div>
                          `).join("")}
                        </div>
                      </div>
                    </td>
                  </tr>
                ` : ""}
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;

  container.querySelectorAll(".row-clickable").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.dataset.deployId;
      deployExpandedRows[id] = !deployExpandedRows[id];
      renderDeployments();
    });
  });
}

// --- OCP pods ---
function renderOcp() {
  const container = document.querySelector("#ocpPods");
  if (!container) return;

  const running     = ocpPods.filter((p) => p.status === "Running").length;
  const crashing    = ocpPods.filter((p) => p.status === "CrashLoopBackOff" || p.status === "Error").length;
  const pending     = ocpPods.filter((p) => p.status === "Pending").length;
  const restarts24h = ocpPods.reduce((s, p) => s + p.restarts, 0);
  const namespaces  = new Set(ocpPods.map((p) => p.namespace)).size;

  document.querySelector("#ocpSummary").innerHTML = `
    <div class="panel detail-stats" style="margin-bottom:14px">
      <div class="detail-stat">
        <span class="detail-stat-label">Pods running</span>
        <strong class="detail-stat-value ${crashing ? "amber" : "mint"}">${running} / ${ocpPods.length}</strong>
        <span class="detail-stat-sub">across ${namespaces} namespaces</span>
      </div>
      <div class="detail-stat">
        <span class="detail-stat-label">Crash-looping</span>
        <strong class="detail-stat-value ${crashing ? "red" : "mint"}">${crashing}</strong>
        <span class="detail-stat-sub">${crashing ? "needs attention" : "none"}</span>
      </div>
      <div class="detail-stat">
        <span class="detail-stat-label">Pending</span>
        <strong class="detail-stat-value ${pending ? "amber" : "mint"}">${pending}</strong>
        <span class="detail-stat-sub">scheduling / image pull</span>
      </div>
      <div class="detail-stat">
        <span class="detail-stat-label">Restarts (recent)</span>
        <strong class="detail-stat-value ${restarts24h ? "amber" : "mint"}">${restarts24h}</strong>
        <span class="detail-stat-sub">across all pods</span>
      </div>
    </div>
  `;

  const sc = { Running: "ready", CrashLoopBackOff: "blocked", Error: "blocked", Pending: "review" };

  container.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div><h2>Pods</h2><p>${ocpPods.length} pods · ${namespaces} namespaces</p></div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Pod</th>
              <th>Namespace</th>
              <th>Node</th>
              <th>Restarts</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${ocpPods.map((pod) => {
              const open = ocpExpandedRows[pod.name];
              return `
                <tr class="row-clickable ${open ? "row-expanded" : ""}" data-pod-id="${pod.name}">
                  <td>
                    <strong>${pod.app}</strong>
                    <span>${pod.name}</span>
                  </td>
                  <td>${pod.namespace}</td>
                  <td>${pod.node}</td>
                  <td>${pod.restarts ? `<strong style="color:var(--amber)">${pod.restarts}</strong>` : "0"}</td>
                  <td>${pod.age}</td>
                  <td>
                    <div class="td-chevron-wrap">
                      <span class="pill ${sc[pod.status] || "neutral"}">${pod.status}</span>
                      <svg class="row-chevron" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </td>
                </tr>
                ${open ? `
                  <tr class="expand-row">
                    <td colspan="6">
                      <div class="row-expand">
                        <div class="expand-meta-bar">
                          <span><b>Image</b>${pod.image}</span>
                          <span><b>Node</b>${pod.node}</span>
                        </div>
                        ${pod.lastRestart ? `
                          <p class="expand-desc">
                            <strong>Last restart ${pod.lastRestart.time}</strong> — ${pod.lastRestart.reason}, was <strong>${pod.lastRestart.prevStatus}</strong> before. ${pod.lastRestart.detail}.
                          </p>
                        ` : `<p class="expand-desc">No restarts — stable since creation.</p>`}
                      </div>
                    </td>
                  </tr>
                ` : ""}
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;

  container.querySelectorAll(".row-clickable").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.dataset.podId;
      ocpExpandedRows[id] = !ocpExpandedRows[id];
      renderOcp();
    });
  });
}

// --- Kafka bars ---
const kafkaBars = [
  { label: "orders-events-consumer", value: "2.4k", width: 92 },
  { label: "payment-audit-writer",   value: "1.7k", width: 68 },
  { label: "notifications-sender",   value: "910",  width: 46 },
  { label: "inventory-sync",         value: "330",  width: 28 }
];

document.querySelector("#kafkaBars").innerHTML = kafkaBars.map((bar) => `
  <article class="bar-row">
    <div>
      <strong>${bar.label}</strong>
      <div class="bar-track"><span style="width: ${bar.width}%"></span></div>
    </div>
    <b>${bar.value}</b>
  </article>
`).join("");

// --- Prometheus Charts ---
const promData = {
  slo: {
    "24h": { values: [99.97,99.97,99.96,99.95,99.91,99.88,99.92,99.95,99.97,99.98,99.97,99.95,99.96,99.97,99.96,99.94,99.92,99.95,99.97,99.96,99.95,99.96,99.97,99.94], min:99.8, max:100, target:99.9 },
    "7d":  { values: [99.94,99.96,99.92,99.88,99.91,99.95,99.94], min:99.8, max:100, target:99.9 },
    "30d": { values: [99.95,99.93,99.96,99.92,99.88,99.91,99.94,99.96,99.95,99.93,99.97,99.94,99.92,99.96,99.95,99.93,99.91,99.94,99.96,99.95,99.93,99.94,99.96,99.92,99.95,99.93,99.94,99.96,99.95,99.94], min:99.8, max:100, target:99.9 }
  },
  latency: [138,135,142,148,155,162,145,138,133,130,135,140,138,135,138,142,148,142,138,135,140,142,140,142]
};

function makePath(pts) {
  let d = `M${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i-1], c = pts[i];
    const cx = ((p.x + c.x) / 2).toFixed(1);
    d += ` C${cx} ${p.y.toFixed(1)} ${cx} ${c.y.toFixed(1)} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`;
  }
  return d;
}

function toPoints(values, minV, maxV, x0, x1, y0, y1) {
  return values.map((v, i) => ({
    x: x0 + (i / (values.length - 1)) * (x1 - x0),
    y: y1 - ((v - minV) / (maxV - minV)) * (y1 - y0)
  }));
}

function animateDraw(el) {
  if (!el || !el.getTotalLength) return;
  const len = el.getTotalLength();
  el.style.transition = "none";
  el.style.strokeDasharray = len;
  el.style.strokeDashoffset = len;
  el.getBoundingClientRect();
  el.style.transition = "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)";
  el.style.strokeDashoffset = 0;
}

function renderSloChart(range) {
  const d = promData.slo[range];
  const W = 720, H = 200, p = 12;
  const pts = toPoints(d.values, d.min, d.max, p, W - p, p, H - p);
  const line = makePath(pts);
  const fill = line + ` L${W-p} ${H-p} L${p} ${H-p} Z`;
  const ty = (H-p) - ((d.target - d.min) / (d.max - d.min)) * (H - 2*p);
  const gy = [p, (H-p)*0.33+p*0.67, (H-p)*0.66+p*0.34, H-p];
  document.getElementById("sloGrid").setAttribute("d", gy.map(y => `M${p} ${y.toFixed(1)}H${W-p}`).join(" "));
  document.getElementById("sloThreshold").setAttribute("d", `M${p} ${ty.toFixed(1)}H${W-p}`);
  document.getElementById("sloFill").setAttribute("d", fill);
  const el = document.getElementById("sloLine");
  el.setAttribute("d", line);
  animateDraw(el);
}

function renderLatChart() {
  const vals = promData.latency;
  const W = 720, H = 160, p = 12;
  const pts = toPoints(vals, 100, 200, p, W - p, p, H - p);
  const line = makePath(pts);
  const fill = line + ` L${W-p} ${H-p} L${p} ${H-p} Z`;
  const gy = [p, H/2, H-p];
  document.getElementById("latGrid").setAttribute("d", gy.map(y => `M${p} ${y.toFixed(1)}H${W-p}`).join(" "));
  document.getElementById("latFill").setAttribute("d", fill);
  const el = document.getElementById("latLine");
  el.setAttribute("d", line);
  animateDraw(el);
}

function initPromCharts() {
  const stats = [
    { label: "SLO",         value: "99.94%", sub: "target 99.9%",           color: "green" },
    { label: "Error Rate",  value: "0.06%",  sub: "↓ 0.02% vs yesterday",   color: "green" },
    { label: "P99 Latency", value: "142ms",  sub: "↑ 12ms vs yesterday",    color: "amber" },
    { label: "Burn Rate",   value: "0.8×",   sub: "budget consumption rate", color: "green" },
  ];
  const el = document.getElementById("promStats");
  if (el) el.innerHTML = stats.map(s => `
    <div class="prom-stat">
      <span class="prom-stat-label">${s.label}</span>
      <span class="prom-stat-val prom-${s.color}">${s.value}</span>
      <span class="prom-stat-sub">${s.sub}</span>
    </div>`).join("");

  renderSloChart("24h");
  renderLatChart();

  document.getElementById("sloRangeTabs")?.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("sloRangeTabs").querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSloChart(btn.dataset.range);
    });
  });
}

// Re-animate charts when prometheus view is activated
document.querySelectorAll(".nav-item").forEach(btn => {
  if (btn.dataset.view === "prometheus") {
    btn.addEventListener("click", () => {
      setTimeout(() => { animateDraw(document.getElementById("sloLine")); animateDraw(document.getElementById("latLine")); }, 50);
    });
  }
});

initPromCharts();

/* ══════════════════════════════════════════════
   SmartCampus AI — Shared Utilities & Mock Data
   ══════════════════════════════════════════════ */

'use strict';

// ── API Config ──────────────────────────────────
const API_URL = 'http://localhost:8080/api';
const DEMO_MODE = true; // Always use mock data

// ── Mock Data Store ─────────────────────────────
const MOCK = {
  users: {
    student1:  { id:1, username:'student1', password:'password', role:'STUDENT',  fullName:'Arjun Sharma',    email:'arjun@campus.edu',    phone:'9876543210', avatar:'AS' },
    faculty1:  { id:2, username:'faculty1', password:'password', role:'FACULTY',  fullName:'Dr. Priya Nair',  email:'priya@campus.edu',    phone:'9123456780', avatar:'PN' },
    admin:     { id:3, username:'admin',    password:'password', role:'ADMIN',    fullName:'Admin Kumar',     email:'admin@campus.edu',    phone:'9000000001', avatar:'AK' },
    student2:  { id:4, username:'student2', password:'password', role:'STUDENT',  fullName:'Sneha Patel',     email:'sneha@campus.edu',    phone:'9876543211', avatar:'SP' },
    faculty2:  { id:5, username:'faculty2', password:'password', role:'FACULTY',  fullName:'Prof. Ravi Rao',  email:'ravi@campus.edu',     phone:'9123456781', avatar:'RR' },
    student3:  { id:6, username:'student3', password:'password', role:'STUDENT',  fullName:'Kiran Mehta',     email:'kiran@campus.edu',    phone:'9876543212', avatar:'KM' },
  },

  dashboard: {
    attendance: 84,
    cgpa: 8.7,
    assignmentsDue: 3,
    feeDue: 24500,
    semester: 'Sem 5',
    cgpaTrend: [7.2, 7.8, 8.1, 8.4, 8.6, 8.7],
    attendanceSubjects: [
      { subject:'Data Structures',     pct:92 },
      { subject:'DBMS',                pct:78 },
      { subject:'Operating Systems',   pct:88 },
      { subject:'Computer Networks',   pct:73 },
      { subject:'Software Engineering',pct:91 },
    ],
    lastBorrowedBook: { title:'Clean Code', dueDate:'2026-07-20' },
  },

  books: [
    { id:1, title:'Clean Code',           author:'Robert C. Martin',  category:'Software Engineering', isbn:'9780132350884', availableCopies:3,  totalCopies:5 },
    { id:2, title:'The Pragmatic Programmer', author:'David Thomas',  category:'Software Engineering', isbn:'9780201633610', availableCopies:1,  totalCopies:3 },
    { id:3, title:'Introduction to Algorithms', author:'CLRS',        category:'Computer Science',     isbn:'9780262033848', availableCopies:4,  totalCopies:6 },
    { id:4, title:'Design Patterns',      author:'Gang of Four',      category:'Software Engineering', isbn:'9780201633610', availableCopies:2,  totalCopies:4 },
    { id:5, title:'Python Crash Course',  author:'Eric Matthes',      category:'Programming',          isbn:'9781593279288', availableCopies:5,  totalCopies:5 },
    { id:6, title:'JavaScript: The Good Parts', author:'Douglas Crockford', category:'Programming',  isbn:'9780596517748', availableCopies:0,  totalCopies:2 },
    { id:7, title:'Database Systems',     author:'Silberschatz',      category:'Computer Science',     isbn:'9780073523323', availableCopies:3,  totalCopies:4 },
    { id:8, title:'Computer Networks',    author:'Tanenbaum',         category:'Computer Science',     isbn:'9780132126953', availableCopies:2,  totalCopies:3 },
    { id:9, title:'Operating Systems',    author:'Abraham Silberschatz', category:'Computer Science',  isbn:'9781118063330', availableCopies:1,  totalCopies:3 },
    { id:10,title:'Artificial Intelligence', author:'Stuart Russell', category:'Computer Science',     isbn:'9780134610993', availableCopies:2,  totalCopies:2 },
    { id:11,title:'Deep Learning',        author:'Goodfellow',        category:'Programming',          isbn:'9780262035613', availableCopies:3,  totalCopies:3 },
    { id:12,title:'System Design Interview', author:'Alex Xu',        category:'Software Engineering', isbn:'9798664653403', availableCopies:4,  totalCopies:4 },
  ],

  borrowedBooks: [
    { id:1, bookTitle:'Clean Code',           author:'Robert C. Martin', borrowDate:'2026-06-20', dueDate:'2026-07-20', status:'BORROWED', fine:0 },
    { id:2, bookTitle:'Introduction to Algorithms', author:'CLRS',      borrowDate:'2026-05-10', dueDate:'2026-06-10', status:'OVERDUE',  fine:30 },
  ],

  placementStats: {
    totalDrives:7, openDrives:3, upcomingDrives:2, studentsPlaced:142,
    highestPackage:'₹42 LPA', averagePackage:'₹18 LPA'
  },

  drives: [
    { id:1, company:'Google',    industry:'Technology',  jobTitle:'Software Engineer',       eligibility:'CGPA ≥ 8.0 | CS/IT only', interviewDate:'2026-07-28', package:'₹42 LPA', status:'OPEN',     color:'#4285F4', logo:'G' },
    { id:2, company:'Microsoft', industry:'Technology',  jobTitle:'SDE II',                  eligibility:'CGPA ≥ 7.5 | All branches', interviewDate:'2026-08-05', package:'₹38 LPA', status:'UPCOMING', color:'#00A4EF', logo:'M' },
    { id:3, company:'Amazon',    industry:'E-Commerce',  jobTitle:'Software Dev Engineer',   eligibility:'CGPA ≥ 7.0 | CS/IT/EC', interviewDate:'2026-07-15', package:'₹32 LPA', status:'OPEN',     color:'#FF9900', logo:'A' },
    { id:4, company:'Infosys',   industry:'IT Services', jobTitle:'Systems Engineer',        eligibility:'CGPA ≥ 6.5 | All branches', interviewDate:'2026-06-20', package:'₹6.5 LPA', status:'CLOSED', color:'#007CC3', logo:'I' },
    { id:5, company:'TCS',       industry:'IT Services', jobTitle:'Assistant Systems Eng.',  eligibility:'CGPA ≥ 6.0 | All branches', interviewDate:'2026-06-10', package:'₹7 LPA',   status:'CLOSED', color:'#0078d7', logo:'T' },
    { id:6, company:'Flipkart',  industry:'E-Commerce',  jobTitle:'SDE I',                   eligibility:'CGPA ≥ 7.5 | CS/IT', interviewDate:'2026-08-12', package:'₹28 LPA', status:'UPCOMING', color:'#F74F00', logo:'F' },
    { id:7, company:'Wipro',     industry:'IT Services', jobTitle:'Project Engineer',        eligibility:'CGPA ≥ 6.0 | All branches', interviewDate:'2026-07-20', package:'₹6.5 LPA', status:'OPEN',   color:'#341C6B', logo:'W' },
  ],

  events: [
    { id:1, title:'HackFest 2026',          category:'TECHNICAL', icon:'fa-laptop-code', description:'48-hour national hackathon. Build innovative solutions for real-world problems.',    location:'Main Auditorium',    organizer:'Tech Club',           eventDate:'2026-07-25T09:00:00', registrations:180 },
    { id:2, title:'Google Career Fair',     category:'PLACEMENT', icon:'fa-briefcase',   description:'Meet Google recruiters, get resumes reviewed and learn about job opportunities.',    location:'Seminar Hall A',     organizer:'Placement Cell',      eventDate:'2026-07-28T10:00:00', registrations:320 },
    { id:3, title:'Crescendo — Culturals',  category:'CULTURAL',  icon:'fa-music',       description:'Annual cultural extravaganza featuring music, dance, drama, and art competitions.',  location:'Open Air Theatre',   organizer:'Cultural Committee',  eventDate:'2026-08-10T17:00:00', registrations:540 },
    { id:4, title:'DSA Bootcamp',           category:'WORKSHOP',  icon:'fa-code',        description:'Intensive 3-day workshop on Data Structures & Algorithms by industry experts.',     location:'Lab Block 3',        organizer:'CSE Dept',            eventDate:'2026-07-18T09:00:00', registrations:95  },
    { id:5, title:'Inter-College Cricket',  category:'SPORTS',    icon:'fa-baseball-ball',description:'Intercollegiate cricket tournament. Register your team of 11 players.',            location:'Cricket Ground',     organizer:'Sports Committee',    eventDate:'2026-08-02T08:00:00', registrations:12  },
    { id:6, title:'AI/ML Summit',           category:'TECHNICAL', icon:'fa-brain',       description:'Full-day summit on Artificial Intelligence and Machine Learning trends.',            location:'Conference Hall',    organizer:'AI Club',             eventDate:'2026-07-22T09:00:00', registrations:210 },
    { id:7, title:'Entrepreneurship Conclave', category:'WORKSHOP',icon:'fa-lightbulb',  description:'Learn from successful startup founders. Pitch your ideas for seed funding.',       location:'Innovation Hub',     organizer:'E-Cell',              eventDate:'2026-07-30T10:00:00', registrations:130 },
    { id:8, title:'Annual Sports Day',      category:'SPORTS',    icon:'fa-trophy',      description:'Annual inter-department sports championship. Compete in 10+ sports categories.',   location:'Sports Complex',     organizer:'Sports Committee',    eventDate:'2026-06-15T08:00:00', registrations:380 },
  ],

  chatResponses: {
    attendance:    (u) => `📋 **Attendance Report**\n\nOverall Attendance: **${MOCK.dashboard.attendance}%**\n\nSubject-wise:\n${MOCK.dashboard.attendanceSubjects.map(s=>`• ${s.subject}: ${s.pct}%`).join('\n')}\n\n${MOCK.dashboard.attendance >= 75 ? '✅ You are eligible to appear for exams.' : '⚠️ Attendance below 75%. Obtain condonation from HOD.'}`,
    marks:         () => `📊 **Academic Performance**\n\nCurrent CGPA: **${MOCK.dashboard.cgpa}** / 10.0\nSemester: **${MOCK.dashboard.semester}**\n\nCGPA Trend: ${MOCK.dashboard.cgpaTrend.join(' → ')}\n\nKeep it up! You're in the top 20% of your batch. 🎉`,
    gpa:           () => `📊 Your current GPA is **${MOCK.dashboard.cgpa} / 10.0** (${MOCK.dashboard.semester}).\n\nYour CGPA has been steadily improving across semesters. Keep it up!`,
    fees:          () => `💰 **Fee Details**\n\nPending Fee: **₹${MOCK.dashboard.feeDue.toLocaleString()}**\nDue Date: **July 31, 2026**\n\nPayment Modes:\n• Net Banking via Campus Portal\n• UPI: campus@hdfcbank\n• Demand Draft in favour of "SmartCampus Institute"\n\n⚠️ Late fee of ₹50/day applicable after due date.`,
    library:       () => `📚 **Library Info**\n\nLibrary Hours: **Mon–Sat, 8 AM – 8 PM**\nSunday: **10 AM – 2 PM**\n\nYou currently have **${MOCK.borrowedBooks.filter(b=>b.status!=='RETURNED').length}** book(s) borrowed.\n\nOverdue fines: **₹${MOCK.borrowedBooks.reduce((s,b)=>s+b.fine,0)}**\n\nVisit the Library module to browse our 5,000+ book catalog.`,
    placements:    () => `💼 **Placement Info**\n\nOpen Drives: **${MOCK.placementStats.openDrives}**\nHighest Package: **${MOCK.placementStats.highestPackage}**\nAverage Package: **${MOCK.placementStats.averagePackage}**\nStudents Placed: **${MOCK.placementStats.studentsPlaced}**\n\nVisit the Placements module to register for open drives!`,
    events:        () => `🎉 **Upcoming Events**\n\n${MOCK.events.filter(e=>new Date(e.eventDate)>=new Date()).slice(0,4).map(e=>`• **${e.title}** — ${new Date(e.eventDate).toLocaleDateString('en-IN',{day:'numeric',month:'short'})}`).join('\n')}\n\nVisit the Events module to register and get your reference ID!`,
    timetable:     () => `🗓️ **Today's Schedule** (${new Date().toLocaleDateString('en-IN',{weekday:'long'})})\n\n• 09:00 – Data Structures (Room 301)\n• 11:00 – DBMS Lab (Lab Block 2)\n• 14:00 – Operating Systems (Room 204)\n• 16:00 – Seminar (Seminar Hall B)\n\n*Note: Always verify on the official Notice Board.*`,
    exams:         () => `📝 **Exam Schedule**\n\n• Internal I: **July 10–15, 2026**\n• Internal II: **August 5–10, 2026**\n• End Semester: **November 15–30, 2026**\n\nHall tickets will be available on the student portal 1 week before exams.`,
    leave:         () => `📋 **Leave Application**\n\n1. Fill the Leave Application Form (available at the Admin Counter or portal)\n2. Get it signed by your Class Advisor\n3. Submit to HOD at least 2 days in advance\n4. Medical leave: attach medical certificate\n\nFor emergency leave, contact your Class Advisor directly.`,
    hostel:        () => `🏠 **Hostel Rules**\n\n• Curfew: Boys — 10 PM | Girls — 9 PM\n• Visitors allowed: 10 AM – 6 PM (Ground floor only)\n• Mess Timings: Breakfast 7–9 AM | Lunch 12–2 PM | Dinner 7–9 PM\n• Wifi available 6 AM – 11 PM\n• Contact Warden for any maintenance issues`,
    bonafide:      () => `📄 **Bonafide Certificate**\n\n1. Submit request at the Academic Section counter (Block A, Ground Floor)\n2. Bring your ID card and fee receipt\n3. Processing time: **3 working days**\n4. Cost: **₹50**\n\nAlternatively, apply online through the Student Portal → Certificates section.`,
    faculty:       () => `👩‍🏫 **Faculty Contact**\n\nClass Advisor: **Dr. Meena Krishnan** — meena@campus.edu\nHOD (CSE): **Dr. Rajesh Kumar** — hod.cse@campus.edu\nDean (Academics): **Prof. Suresh Babu** — dean.acad@campus.edu\n\nFaculty are available during college hours Mon–Sat, 9 AM – 5 PM.`,
    hello:         (u) => `👋 Hello, **${u || 'Student'}**! How can I help you today?\n\nI can assist with attendance, marks, fees, library, placements, events, timetables, and more. Just ask away!`,
  }
};

// Load custom users from localStorage if any
try {
  const customUsers = JSON.parse(localStorage.getItem('sc-custom-users') || '{}');
  Object.assign(MOCK.users, customUsers);
} catch (e) {
  console.error('Error loading custom users:', e);
}

// ── Theme Management ─────────────────────────────
const initTheme = () => {
  const saved = localStorage.getItem('sc-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
};

const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('sc-theme', next);
  updateThemeIcon(next);
};

const updateThemeIcon = (theme) => {
  document.querySelectorAll('.theme-toggle-btn, #theme-toggle').forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    const label = btn.querySelector('.theme-label');
    if (label) label.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  });
};

// ── Auth Management ──────────────────────────────
const getUser = () => {
  try { return JSON.parse(localStorage.getItem('sc-user')); }
  catch { return null; }
};

const getToken = () => localStorage.getItem('sc-token') || 'demo-token';

const logLoginAttempt = (username, fullName, role, status) => {
  try {
    const logs = JSON.parse(localStorage.getItem('sc-login-logs') || '[]');
    const newLog = {
      timestamp: new Date().toISOString(),
      username,
      fullName: fullName || 'Unknown User',
      role: role || 'UNKNOWN',
      status
    };
    logs.unshift(newLog);
    if (logs.length > 100) logs.pop();
    localStorage.setItem('sc-login-logs', JSON.stringify(logs));
  } catch (e) {
    console.error('Error logging login attempt:', e);
  }
};

const login = (username, password) => {
  const user = MOCK.users[username];
  if (!user || user.password !== password) {
    logLoginAttempt(username, user ? user.fullName : 'Unknown User', user ? user.role : 'UNKNOWN', 'FAILED');
    return null;
  }
  localStorage.setItem('sc-token', 'demo-jwt-' + Date.now());
  localStorage.setItem('sc-user', JSON.stringify(user));
  logLoginAttempt(username, user.fullName, user.role, 'SUCCESS');
  return user;
};

const logout = () => {
  localStorage.removeItem('sc-token');
  localStorage.removeItem('sc-user');
  window.location.href = 'login.html';
};

const checkAuth = () => {
  const user = getUser();
  if (!user) { window.location.href = 'login.html'; return null; }
  return user;
};

const checkAdmin = () => {
  const user = checkAuth();
  if (user && user.role !== 'ADMIN') { window.location.href = 'dashboard.html'; return null; }
  return user;
};

// ── Toast ────────────────────────────────────────
const showToast = (message, type = 'info') => {
  let root = document.getElementById('toast-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'toast-root';
    document.body.appendChild(root);
  }

  const icons = { success:'fa-check-circle', error:'fa-exclamation-circle', info:'fa-info-circle', warning:'fa-exclamation-triangle' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><span>${message}</span>`;
  root.appendChild(toast);

  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
};

// ── Modal ────────────────────────────────────────
const openModal = (id) => {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
};
const closeModal = (id) => {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
};

// ── Sidebar active link ───────────────────────────
const markActiveSidebarLink = () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && page.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });
};

// ── Render user info in sidebar ───────────────────
const renderSidebarUser = () => {
  const user = getUser();
  const nameEl = document.getElementById('sidebar-user-name');
  const roleEl = document.getElementById('sidebar-user-role');
  const avatarEl = document.getElementById('sidebar-user-avatar');
  if (nameEl && user) nameEl.textContent = user.fullName;
  if (roleEl && user) roleEl.textContent = user.role;
  if (avatarEl && user) avatarEl.textContent = user.avatar || user.fullName.slice(0,2).toUpperCase();
};

// ── Reference ID generator ────────────────────────
const genRef = (prefix = 'SC') => {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,5).toUpperCase()}`;
};

// ── Format date ───────────────────────────────────
const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
const fmtDateTime = (d) => new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });

// ── Days until ────────────────────────────────────
const daysUntil = (dateStr) => {
  const diff = Math.ceil((new Date(dateStr) - new Date()) / 86400000);
  if (diff < 0)   return { label: 'Past',     color: '#ef4444' };
  if (diff === 0) return { label: 'Today!',   color: '#f59e0b' };
  if (diff === 1) return { label: 'Tomorrow', color: '#10b981' };
  return { label: `In ${diff} days`, color: '#10b981' };
};

// ── Count-up animation ────────────────────────────
const countUp = (el, target, suffix = '', duration = 1200) => {
  const start = 0;
  const step = target / (duration / 16);
  let current = start;
  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
    if (current < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

// ── AI Chatbot Response ───────────────────────────
const getChatResponse = (msg) => {
  const m = msg.toLowerCase();
  const user = getUser();
  const name = user ? user.fullName.split(' ')[0] : 'Student';

  if (m.match(/\b(hi|hello|hey|greet)/))                  return MOCK.chatResponses.hello(name);
  if (m.match(/attend|miss|class|eligible|eligib/))        return MOCK.chatResponses.attendance(name);
  if (m.match(/\bmarks?\b|result|subject|fail|pass/))      return MOCK.chatResponses.marks();
  if (m.match(/\bgpa\b|\bcgpa\b|grade/))                   return MOCK.chatResponses.gpa();
  if (m.match(/fee|due|pay|pending|amount|fine/))          return MOCK.chatResponses.fees();
  if (m.match(/library|book|borrow|return|catalog/))       return MOCK.chatResponses.library();
  if (m.match(/placement|job|company|recruit|drive|offer/))return MOCK.chatResponses.placements();
  if (m.match(/event|hackathon|fest|workshop|sport|cultural/)) return MOCK.chatResponses.events();
  if (m.match(/timetable|schedule|class today|today class/))   return MOCK.chatResponses.timetable();
  if (m.match(/exam|internal|end sem|hall ticket/))         return MOCK.chatResponses.exams();
  if (m.match(/leave|absent|permission/))                   return MOCK.chatResponses.leave();
  if (m.match(/hostel|mess|curfew|warden/))                 return MOCK.chatResponses.hostel();
  if (m.match(/bonafide|certificate|document/))             return MOCK.chatResponses.bonafide();
  if (m.match(/faculty|teacher|professor|hod|contact/))    return MOCK.chatResponses.faculty();

  return `🤖 I'm not sure about that specific query. Here's what I can help you with:\n\n• 📋 Attendance & eligibility\n• 📊 Marks & CGPA\n• 💰 Fees & payments\n• 📚 Library services\n• 💼 Placement drives\n• 🎉 Campus events\n• 🗓️ Timetable & exams\n• 📝 Leave & certificates\n\nTry asking one of these topics!`;
};

// ── Init on DOM ready ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  markActiveSidebarLink();
  renderSidebarUser();

  // Wire theme toggle buttons
  document.querySelectorAll('.theme-toggle-btn, #theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Wire modal close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  // Toast root
  if (!document.getElementById('toast-root')) {
    const root = document.createElement('div');
    root.id = 'toast-root';
    document.body.appendChild(root);
  }
});

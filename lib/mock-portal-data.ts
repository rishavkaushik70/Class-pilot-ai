/**
 * CLASS PILOT AI — Illustrative Demonstration Data Module
 *
 * NOTE: This module contains mock preview data for UI demonstration and early
 * milestone verification. In future milestones, these datasets will be replaced
 * with live scoped Prisma database queries.
 */

export interface TeacherDashboardPreview {
  metrics: {
    totalStudents: number
    activeBatches: number
    todayAttendanceRate: number
    presentCount: number
    absentCount: number
    feeCollectedAmount: number
    feeTargetAmount: number
    feePercentage: number
    pendingFollowUpsCount: number
  }
  upcomingClasses: {
    id: string
    title: string
    batch: string
    time: string
    room: string
    instructor: string
    status: "active_qr" | "upcoming" | "scheduled"
    attendanceTally: string
  }[]
  pendingFollowUps: {
    id: string
    studentName: string
    batch: string
    issueType: "absentee" | "overdue_fee" | "academic_risk"
    detail: string
    urgency: "high" | "medium" | "low"
  }[]
  aiInsights: {
    id: string
    signalType: "attendance" | "cashflow" | "capacity"
    title: string
    summary: string
    recommendedAction: string
  }[]
}

export interface StudentDashboardPreview {
  metrics: {
    attendanceRate: number
    totalSessions: number
    attendedSessions: number
    pendingAssignments: number
    feeBalance: number
    nextFeeDueDate: string
  }
  todayTimetable: {
    id: string
    subject: string
    instructor: string
    time: string
    room: string
    status: "live_now" | "upcoming" | "completed"
  }[]
  upcomingClasses: {
    id: string
    subject: string
    date: string
    time: string
    topic: string
  }[]
  homeworkAssignments: {
    id: string
    subject: string
    title: string
    dueDate: string
    status: "pending" | "submitted" | "graded"
  }[]
  announcements: {
    id: string
    title: string
    date: string
    category: "exam" | "holiday" | "schedule"
    excerpt: string
  }[]
}

export const TEACHER_DEMO_DATA: TeacherDashboardPreview = {
  metrics: {
    totalStudents: 428,
    activeBatches: 12,
    todayAttendanceRate: 94.6,
    presentCount: 182,
    absentCount: 11,
    feeCollectedAmount: 485000,
    feeTargetAmount: 520000,
    feePercentage: 93.2,
    pendingFollowUpsCount: 7,
  },
  upcomingClasses: [
    {
      id: "cls-1",
      title: "Rotational Mechanics (JEE-A)",
      batch: "JEE Advanced Droppers",
      time: "04:00 PM – 05:30 PM",
      room: "Hall 302",
      instructor: "Prof. V. Sharma",
      status: "active_qr",
      attendanceTally: "48/50 Present",
    },
    {
      id: "cls-2",
      title: "Coordination Compounds (NEET-1)",
      batch: "NEET 12th Regular",
      time: "05:45 PM – 07:15 PM",
      room: "Lab 204",
      instructor: "Dr. Anita Rao",
      status: "upcoming",
      attendanceTally: "Starts in 35m",
    },
    {
      id: "cls-3",
      title: "Integral Calculus (12-B)",
      batch: "Class 12 Foundation",
      time: "07:30 PM – 09:00 PM",
      room: "Room 101",
      instructor: "Er. K. Patel",
      status: "scheduled",
      attendanceTally: "Session 18",
    },
  ],
  pendingFollowUps: [
    {
      id: "fol-1",
      studentName: "Aryan Khan",
      batch: "JEE-A",
      issueType: "absentee",
      detail: "Missed 3 consecutive physics tutorials.",
      urgency: "high",
    },
    {
      id: "fol-2",
      studentName: "Priya Sharma",
      batch: "NEET-1",
      issueType: "overdue_fee",
      detail: "Term 1 installment overdue by 4 days (₹15,000).",
      urgency: "medium",
    },
    {
      id: "fol-3",
      studentName: "Rohan Verma",
      batch: "Foundation-10",
      issueType: "academic_risk",
      detail: "Mock test score declined from 84% to 58%.",
      urgency: "medium",
    },
  ],
  aiInsights: [
    {
      id: "ai-1",
      signalType: "attendance",
      title: "Attendance Dropout Warning",
      summary: "3 students in Batch JEE-A show a 28% drop in attendance over the last 14 days.",
      recommendedAction: "Dispatch automated WhatsApp check-in to parents.",
    },
    {
      id: "ai-2",
      signalType: "cashflow",
      title: "Monthly Cashflow Forecast",
      summary: "91% probability of collecting ₹32,000 of ₹35,000 outstanding dues before Friday.",
      recommendedAction: "Schedule reminder queue for tomorrow morning.",
    },
  ],
}

export const STUDENT_DEMO_DATA: StudentDashboardPreview = {
  metrics: {
    attendanceRate: 96.2,
    totalSessions: 52,
    attendedSessions: 50,
    pendingAssignments: 2,
    feeBalance: 0,
    nextFeeDueDate: "Nov 15, 2026",
  },
  todayTimetable: [
    {
      id: "st-cls-1",
      subject: "Advanced Physics",
      instructor: "Prof. V. Sharma",
      time: "04:00 PM – 05:30 PM",
      room: "Hall 302",
      status: "live_now",
    },
    {
      id: "st-cls-2",
      subject: "Physical Chemistry",
      instructor: "Dr. Anita Rao",
      time: "05:45 PM – 07:15 PM",
      room: "Lab 204",
      status: "upcoming",
    },
  ],
  upcomingClasses: [
    {
      id: "st-up-1",
      subject: "Mathematics",
      date: "Tomorrow",
      time: "04:00 PM",
      topic: "Definite Integration & Areas",
    },
    {
      id: "st-up-2",
      subject: "Physics",
      date: "Friday",
      time: "05:30 PM",
      topic: "Rotational Dynamics Problem Solving",
    },
  ],
  homeworkAssignments: [
    {
      id: "hw-1",
      subject: "Physics",
      title: "Problem Set 4: Angular Momentum",
      dueDate: "Tomorrow at 11:59 PM",
      status: "pending",
    },
    {
      id: "hw-2",
      subject: "Chemistry",
      title: "Coordination Compounds Worksheet 2",
      dueDate: "Saturday at 06:00 PM",
      status: "pending",
    },
    {
      id: "hw-3",
      subject: "Mathematics",
      title: "Calculus Worksheet 9",
      dueDate: "Oct 12, 2026",
      status: "submitted",
    },
  ],
  announcements: [
    {
      id: "ann-1",
      title: "All India Grand Mock Test #3 Scheduled",
      date: "Oct 20, 2026",
      category: "exam",
      excerpt: "Online and paper test window opens at 09:00 AM. Syllabus: Units 1 through 6.",
    },
    {
      id: "ann-2",
      title: "Dussehra Holiday Schedule",
      date: "Oct 22, 2026",
      category: "holiday",
      excerpt: "The institute will remain closed on Tuesday. Regular classes resume Wednesday.",
    },
  ],
}

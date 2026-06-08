# Maintor.systems Website Brief

This document serves as a detailed brief for the design and development of the new marketing website for **Maintor.systems**. It outlines the core product identity, target audience, key features, competitive differentiators, design system (including branding colors), and page structure.

---

## 1. Project Overview & Target Audience

### Product Identity
**Maintor** is a modern, high-performance, cloud-native Computerized Maintenance Management System (CMMS) built specifically for industrial companies (e.g., recycling plants, food & beverage facilities, pharmaceutical packaging, and heavy manufacturing). It simplifies and optimizes how industrial plants schedule, execute, and report on machinery maintenance.

### The Problem
Industrial maintenance is plagued by paperwork, slow notifications, complex software that technicians hate using, and rigid licensing systems that make collaborating with external contractors or consultants extremely difficult.

### The Maintor Solution
Maintor splits the user experience to match organizational roles perfectly:
1. **Admins & Supervisors (Desktop-First)**: A comprehensive, highly configurable dashboard for scheduling planned maintenance, monitoring breakdowns, assigning team members, and generating compliance-ready audit trails.
2. **Technicians & Engineers (Mobile-First)**: A ultra-streamlined, simplified interface designed for use on the factory floor to file tickets, tick off task checklists, track downtime, and upload photos.

---

## 2. Core Strengths & Key Features

### 1. Dual-Track Maintenance Workflow
Maintor treats planned and breakdown maintenance as two distinct, highly optimized workflows:
* **Planned Maintenance**: Scheduled periodical checkups to prevent machinery failure. Technicians follow interactive checklist tasks, upload photos as verification for individual tasks, and track their labor time.
* **Breakdown Maintenance**: Initiated instantly when a machine fails. Emphasizes fast response, mandatory asset association, root cause cataloging, and downtime calculation.

### 2. Multi-Account Cross-Collaboration (The Primary Differentiator)
* Unlike competitors who restrict users to a single company boundary, Maintor supports **Account-to-Account Invitations**.
* An industrial plant (Account A) can invite an external service provider, machinery vendor, or consulting firm (Account B) to collaborate on specific sites.
* Account B's administrators can then delegate site-specific roles (e.g., **CONSULTANT** or **TECHNICIAN**) to their own employees.
* External users get zero-friction access to client sites without sharing credentials or requiring additional costly licenses under the host account.

### 3. Precision Labor & Downtime Tracking
* **Detailed Labor Entries**: Captures start/end times and durations for multiple assignees on a single ticket.
* **Downtime Calculation**: Automatically calculates exact machine downtime and labor duration in minutes for accurate OEE (Overall Equipment Effectiveness) reporting.

### 4. Real-time WhatsApp Notification Engine
* Integrated WhatsApp alerts for both breakdown alerts and scheduled maintenance windows.
* Plant supervisors and technicians receive instant templates via WhatsApp, meaning critical breakdowns are addressed immediately without checking email or needing the mobile app open at all times.

---

## 3. Competitive Differentiation

| Feature / Aspect | **Maintor.systems** | **AnyMaint** (anymaint.com) | **Limble** (limble.com) | **MaintainX** (getmaintainx.com) | **UpKeep** (upkeep.com) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Heavy industrial, multi-tenant collaboration, high speed. | AI-powered predictive algorithms. | Broad mid-market CMMS, highly custom fields. | Real-time chat, mobile-first procedures. | Mobile asset tracking and inventory. |
| **External Collaboration** | **Unmatched**: Native Account-to-Account invitations and site delegation. | Limited to guest portals or single-tenant users. | Basic vendor portals (no cross-account assignment). | Vendor portal with limited technician actions. | Basic guest requests, rigid tenant boundaries. |
| **Technician UI** | Highly focused mobile view dedicated *only* to executing/filing. | Standard responsive web. | Feature-rich but can be cluttered and slow. | Highly interactive, but requires onboarding. | Very functional, but can feel bloated. |
| **Alert Delivery** | Direct, configurable WhatsApp notification templates. | Email/SMS/App push only. | Email/SMS/App push only. | In-app chat / Push notifications. | Email/SMS/App push only. |
| **Architecture** | Serverless backend (Cloudflare Workers) - global sub-second speed. | Monolithic cloud hosting. | Standard cloud hosting. | Standard cloud hosting. | Standard cloud hosting. |

---

## 4. Visual Identity & Design System

The marketing website must convey **reliability, cutting-edge speed, and industrial strength**. It should feel premium, sleek, and highly professional, avoiding boring default templates.

### Color Palette
We use a modern, high-contrast dark mode aesthetic mixed with clean white backgrounds for reading sections.
* **Coal (`#212121`)**: Use as the primary dark color for backgrounds, high-emphasis text blocks, and dark mode containers. It represents heavy machinery, industrial steel, and modern software stability.
* **Accent Color**: Harmonious safety orange or electric blue (e.g., `#FF5722` or `#2962FF`) to represent action, alerts, and modern engineering.
* **Backgrounds**: Slate gray (`#F5F7FA`) for clean light sections, contrasting with Coal (`#212121`) for hero elements and feature showcases.

### Typography
* **Primary / Headings**: Modern, clean geometric sans-serif fonts such as **Outfit** or **Inter** from Google Fonts.
* **Body Text**: Highly readable sans-serif like **Roboto** or **Inter**.

### Layout & Micro-Animations
* **Glassmorphism**: Use semi-transparent blur overlays for headers and cards to emphasize a modern, tech-forward app shell.
* **Interactive Demos**: Hover effects on cards showing "Desktop View" versus "Mobile View" transitions.
* **Downtime Counter**: Interactive interactive widget showing how much money/time is saved when response time drops from 45 minutes to 5 minutes using Maintor's WhatsApp alerts.

---

## 5. Website Structure & Key Pages

### Page 1: Home (The Hook)
* **Hero Section**: High-impact headline: *"Industrial Maintenance, Streamlined in Real Time."* Showing side-by-side mockups of the Desktop Admin portal and the Mobile Technician view.
* **The "Zero Downtime" Value Prop**: Highlight the two core pillars: Planned Maintenance and Breakdown Alerts.
* **WhatsApp Alerts Demonstration**: Interactive mockup showing a WhatsApp message arriving on a phone screen with a quick-link to the breakdown ticket.
* **Social Proof & Stats**: Target metrics (e.g., "Reduce average downtime by 34%", "Technician adoption rate > 95%").

### Page 2: Features & Deep Dive
* **Admin Dashboard (Desktop)**: Focus on scheduling calendars, custom columns, filterable data tables, and comprehensive role assignments (Owner, Admin, Site Manager).
* **Technician App (Mobile)**: Emphasize ease of use. Large tap targets, easy photo uploads per task checklist item, and offline-resilient logging.
* **The Collaboration Portal**: Interactive diagram showing how Account A invites Account B (e.g. contracting agency) to collaborate on Site X.

### Page 3: Industries & Solutions
Tailored landing pages or sections for:
* **Recycling & Waste Management**: Focus on dust/wear-prone machinery, heavy downtime costs, and quick breakdown alerts.
* **Food & Beverage / Pharma**: Focus on planned preventative maintenance checklists, hygiene audits, and strict compliance logs.
* **Maintenance Consultants & Contractors**: Show how consultants manage multiple client sites via a single account using Account-to-Account delegation.

### Page 4: Pricing & Transparency
* Straightforward tiering showing how Maintor's multi-account invitation system saves organizations from buying hundreds of seat licenses for external personnel.

---

## 6. SEO & Technical Requirements
* **Semantic HTML**: Proper heading structure (`<h1>` for title, sequential `<h2>`/`<h3>`).
* **Performance**: Fast page speed (Cloudflare hosting or Vercel) to match Maintor's sub-second backend speed.
* **Meta Tags**: Clean descriptions targeting keywords like *"Industrial CMMS", "Preventative Maintenance Software", "Recycling plant maintenance", "Cross-account contractor management"*.

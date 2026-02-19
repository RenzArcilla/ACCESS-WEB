# ACCESS: An Integrated Organizational Directory and Asset Management System

## Project Overview

The **ACCESS Web Portal** is a centralized platform designed to modernize the administrative and logistical frameworks of the **Association of Computer Engineering Students (ACCESS)** at the Polytechnic University of the Philippines. This project aims to consolidate organizational governance and asset management into a single, professional web application, fostering transparency and efficiency for student leaders and the general student body.

## Technology Stack

- **Frontend**: Next.js (React), Tailwind CSS
- **Backend**: Next.js API Routes / Server Actions
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth

Currently, information regarding the organizational hierarchy (Batch Officers, Class Representatives) is scattered across social media and private chats. Additionally, the tracking of technical equipment and electronics (microcontrollers, sensors, tools) relies on less efficient methods. This project addresses these issues by providing a **digital "single source of truth"** for both directory information and asset management.

## Key Features

### 1. Organizational Directory

- **Visual Organizational Chart**: A dynamic map of the leadership hierarchy.
- **Searchable Profiles**: Easy access to contact data for student representatives across all year levels.
- **Event Highlights**: Showcase of major events like General Assembly and CPE Fair.

### 2. Asset Management System

- **Real-Time Inventory Dashboard**: Digital tracking of all physical equipment (speakers, mixers, tools).
- **Borrowing Workflow**: Automated request system for students with administrative approval logic.
- **Audit Trail**: Precise tracking of item status (Approved, Denied, Returned).

### 3. Role-Based Access Control (RBAC)

The system secures data through distinct user levels:

- **Super Admins**: ACCESS Executive Board (Full control).
- **Officers**: Batch Officers and Class Representatives (Limited administrative access).
- **General Students**: View directory, request assets.

## Scope & Limitations

### In-Scope

- End-to-end design and development of the web portal.
- User Authentication (Internal member list / Institutional email verification).
- Responsive design for mobile and desktop access.

### Out-of-Scope

- Financial transaction processing or fee collection.
- Real-time GPS tracking of physical assets.
- Direct integration with University Registrar or SIS databases.

## Project Timeline & Milestones

The project follows an aggressive timeline to ensure a fully operational system within a single academic term:

- **Sprint 0/1 (Planning & Foundation)**: Finalization of Project Management Plan & BRD sign-off.
- **Sprint 2 (Architecture & UI Design)**: Database Schema (ERD) & High-fidelity UI/UX wireframes.
- **Sprint 3 (Core Logic, Directory, & Highlights)**: RBAC, User Auth, and Public-facing Directory.
- **Sprint 4 (Inventory & Borrowing Workflow)**: Asset Management Module & Approval Logic.
- **Sprint 5 (Finalization & Deployment)**: User Acceptance Testing (UAT), Bug Fixing, and Go-Live.

## Project Team

| Role                        | Name                                    |
| --------------------------- | --------------------------------------- |
| **Project Sponsor**         | PUP ACCESS                              |
| **Project Manager**         | Zachary Ralf Crescel Charles DG. Nudalo |
| **Scrum Master**            | Ren Fernandez Zapanta                   |
| **System/Business Analyst** | Gerald S. Berongoy                      |
| **Backend & DB Lead**       | Renz Tyrone F. Arcilla                  |
| **Backend Developers**      | Arvie Lastra                            |
| **Frontend Lead**           | Earl Clyde M. Bañez                     |
| **Frontend Developers**     | Elton James U. Donato                   |
| **UI/UX Lead**              | Sophia Lim                              |
| **UI/UX Designer**          | Blessie Jane Alba                       |
| **QA & Data Integrity**     | Clark Jao Alarcon                       |

## Deliverables

- Business Requirements Document (BRD)
- Functional Specifications Document (FSD)
- Database Architecture (ERD)
- UI/UX Prototypes
- Fully Functional Web Application
- User Manual & Administrative Handover Guide

---

_Created: February 14, 2026_

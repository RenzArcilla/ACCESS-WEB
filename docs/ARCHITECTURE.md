# Architecture Overview

## Technology Stack

The ACCESS Web Portal is built using modern web technologies to ensure scalability, security, and performance.

### Core Frameworks

- **Frontend**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

### Backend & Database

- **Backend Logic**: Next.js Server Actions & API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (with RBAC)

---

## High-Level Architecture

### Directory Structure (Plan)

```
/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Authentication routes (login, register)
│   ├── (dashboard)/      # Protected dashboard routes
│   │   ├── admin/        # Super Admin views
│   │   ├── officer/      # Officer views
│   │   └── verify/       # Asset approval workflows
│   ├── api/              # API endpoints (webhooks, specialized logic)
│   └── page.tsx          # Landing page
├── components/           # Reusable UI components
│   ├── ui/               # Core design system components (buttons, inputs)
│   ├── forms/            # Form components (signup, asset request)
│   └── modules/          # Feature-specific modules (calendar, directory)
├── lib/                  # Utility functions
│   ├── supabase/         # Supabase client configuration
│   └── utils.ts          # Helper functions
├── types/                # TypeScript interfaces and types
└── public/               # Static assets (images, icons)
```

## Data Flow

1.  **Frontend**: User interacts with the UI (e.g., submitting an asset borrowing request).
2.  **Server Action**: The form submission triggers a Server Action secure function.
3.  **Supabase**: The Server Action interacts with Supabase using the Service Role or User Client.
    - **RBAC Check**: Middlewares or Row Level Security (RLS) policies verify the user's role (Super Admin, Officer, Student).
4.  **Database**: Data is written to the PostgreSQL database.
5.  **Response**: The UI updates to reflect the success or failure of the operation.

## Role-Based Access Control (RBAC)

Permission levels are implemented via Supabase Custom Claims or a `profiles` table role column.

| Role            | Access Level                                                |
| :-------------- | :---------------------------------------------------------- |
| **Super Admin** | Full access to directory, asset management, and user roles. |
| **Officer**     | limited management of assets and directory data.            |
| **Student**     | Read-only directory access, can request assets.             |

## Deployment

- **Hosting**: Vercel (recommended for Next.js) or similar platform.
- **CI/CD**: GitHub Actions for automated testing and preview deployments.

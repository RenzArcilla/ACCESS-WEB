# Local Development Setup

Follow these steps to get the ACCESS Web Portal running on your local machine.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v20 or higher recommended)
- **pnpm** (Our package manager of choice)
  ```bash
  npm install -g pnpm
  ```
- **Git**

## Installation

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/ACCESS-PUP/access-web.git
    cd access-web
    ```

2.  **Install Dependencies**

    ```bash
    pnpm install
    ```

3.  **Environment Variables**
    Create a `.env.local` file in the root directory. Copy the template from `.env.example`:

    ```bash
    cp .env.example .env.local
    ```

    Fill in your Supabase credentials:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
    ```

## Running the App

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup (Supabase)

1.  Create a new project on [Supabase](https://supabase.com).
2.  Go to the **SQL Editor** and run the initialization scripts found in `supabase/migrations/` (if available).
3.  Ensure authentication providers (Email/Password) are enabled in the Supabase Dashboard.

## Troubleshooting

- **Port 3000 is needed**: If the port is busy, kill the process or run on a different port:
  ```bash
  pnpm dev -- -p 3001
  ```
- **Supabase Network Error**: Check your internet connection and ensure the API URL in `.env.local` is correct.

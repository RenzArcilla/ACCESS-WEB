# Dockerized Setup

Follow these steps to get the ACCESS Web Portal running on your local machine.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Ensure the docker daemon is running in the background by opening docker desktop

## Database Setup (Supabase)

1.  Create a new project on [Supabase](https://supabase.com).
2.  Go to the **SQL Editor** and run the initialization scripts found in `supabase/migrations/` (if available). Ensure row level security is enabled for each table.
3.  Also run `supabase/test_connection.sql` in the **SQL Editor** for later testing.
4.  Ensure authentication providers (Email/Password) are enabled in the Supabase Dashboard.

## Development
1.  **Clone your Forked Repository**

    ```bash
    git clone https://github.com/your-username/ACCESS-WEB.git
    cd access-web
    ```
2.  **Environment Variables**
    
    Create a `.env.local` file in the root directory. 

    ```bash
    touch .env.local
    ```

    Fill in your Supabase credentials:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
    ```

3. **First time setup**

    ```bash
    docker compose build
    ```

### How to start the dev server:

```bash
docker compose watch
```

This starts the Next.js dev server on `http://localhost:3000` with file syncing active. Changes you make to source files are pushed into the container instantly and Next.js handles hot reload. If you modify `package.json` or `pnpm-lock.yaml`, the image rebuilds automatically.

Proceed to `http://localhost:3000/db-test` to test your database connection.

### How to stop:

```bash
docker compose down
```

### Rebuild manually:

Only needed if you change the `Dockerfile` itself.

```bash
docker compose down
docker compose build
docker compose watch
```

---

## Production

### Build the production image

```bash
docker build \
  --build-arg NEXT_PUBLIC_SUPABASE_URL=your-supabase-url \
  --build-arg NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key \
  --target runner \
  -t access-web:production .
```

> NOTE: The `NEXT_PUBLIC_*` values are baked into the client bundle at build time. Any variable prefixed NEXT_PUBLIC_ gets statically inlined into the JavaScript bundle during next build. 

### Run the production image

```bash
docker run -p 3000:3000 access-web:production
```

---

## Updating Node.js version

When updating to a new Node.js version, **both** the tag and the digest in the `Dockerfile` must be updated.

```bash
docker pull node:XX.XX.X-slim
```

Then update the `ARG` at the top of the `Dockerfile`:

```dockerfile
ARG NODE_VERSION=XX.XX.X-slim@sha256:<new-digest>
```

## Troubleshooting

- **Port 3000 is needed**: If the port is busy, kill the process then rerun.
- **Supabase Network Error**: Check your internet connection and ensure the API URL in `.env.local` is correct.
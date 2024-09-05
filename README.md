# IndieGig

IndieGig is a platform for developers to find gigs and work together on projects as well as companies to find developers for their projects.

## Environment Variables

We're using [T3-OSS Env](https://github.com/t3-oss/env-nextjs) to manage environment variables.

Create a `.env` file with the following variables:

### Database
```
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
```

### Clerk
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

## Database

We're using [Drizzle](https://orm.drizzle.team/) as our database ORM.

### Schema

The schema is defined in `src/server/db/schema/*.ts`.

### Database Migrations

To create a new migration, run `bun run db:generate`.

To apply the migration, run `bun run db:migrate`.

### Database Studio

You can use the [Drizzle Studio](https://orm.drizzle.team/studio) to view the database.

To start the studio, run `bun run db:studio`.


## Authentication

We're using [Clerk](https://clerk.com/) for authentication.

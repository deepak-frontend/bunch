# Bunch marketing site

Next.js App Router, TypeScript, Tailwind CSS, and Sanity Studio for `mybunch.ai`.

## Local setup

1. Use Node.js 20.9 or newer and run `npm install`.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.
3. Local development uses the static preview content by default so pages load without waiting on Sanity. Set `BUNCH_CONTENT_MODE=sanity` in `.env.local` when you want to preview published CMS content.
4. In Sanity project settings, add `http://localhost:3000` under API CORS origins and enable credentials. Add the deployed site origin before using Studio in production.
5. Create a Sanity API token with write access and set `SANITY_API_WRITE_TOKEN` temporarily for the seed command.
6. Run `npm run seed:sanity` once to create the supplied module, industry, and case metric documents. Existing documents are left unchanged.
7. Open `/studio/`, create and publish the Site settings and Home page singleton documents. Their initial values contain the approved copy and pricing defaults from the project brief.
8. Add testimonials, FAQs, comparison rows, and any remaining page copy in Studio. Review the Project Management module before writing its description; the starter record is marked for owner review.
9. Run `npm run dev` and visit `http://localhost:3000`.

The API write token is not needed by the website at runtime. Never expose it as a `NEXT_PUBLIC_` variable or commit it.

## Forms and deployment

Trial and demo routes validate submissions and require both a Bunch-provided HTTPS endpoint (`TRIAL_API_ENDPOINT` / `DEMO_API_ENDPOINT`) and Upstash Redis credentials. Until configured, the endpoints return `503` without forwarding or storing personal information. Add these values to local environment variables and Vercel project settings; do not invent endpoint URLs.

## Checks

- `npm run typecheck`
- `npm run lint`
- `npm run build`

The CMS schemas and GROQ queries live under `sanity/`; section layout lives under `components/sections/`.

"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { sanityEnv } from "@/sanity/env";

const Studio = dynamic(() => import("../studio-client"), { ssr: false });

export default function StudioPage() {
  if (!sanityEnv.projectId) {
    return (
      <main className="setup-state">
        <Link className="site-logo" href="/">
          <span className="brand-mark">b</span><span>bunch</span>
        </Link>
        <div>
          <p className="eyebrow">SANITY SETUP</p>
          <h1>Connect your Sanity project.</h1>
          <p>
            Add your project ID to <code>.env.local</code> and restart the dev
            server to open the content studio.
          </p>
          <Link className="button button-primary" href="/">
            Back to Bunch
          </Link>
        </div>
      </main>
    );
  }

  return <Studio />;
}

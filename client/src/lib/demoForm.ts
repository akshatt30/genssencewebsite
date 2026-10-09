export interface DemoRequest {
  name: string;
  email: string;
  company: string;
  spend: string;
}

export type DemoErrors = Partial<Record<'name' | 'email' | 'company', string>>;

export const SPEND_OPTIONS = ['$50M – $250M', '$250M – $1B', '$1B+'];

// Same rules are enforced again by the server (server/src/validate.js).
export function validateDemoRequest(d: DemoRequest): DemoErrors {
  const er: DemoErrors = {};
  if (d.name.length < 2) er.name = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) er.email = 'Enter a valid email address.';
  else if (/@(gmail|yahoo|hotmail|outlook|icloud|aol|proton|protonmail)\./i.test(d.email)) er.email = 'Please use your work email.';
  if (!d.company) er.company = 'Enter your company name.';
  return er;
}

export class DemoRequestError extends Error {
  constructor(message: string, public errors: DemoErrors = {}) {
    super(message);
  }
}

/**
 * Sends a demo request to the Node API (POST /api/demo-request).
 * TODO(demo-form): the API currently only logs the request. Wire its
 * destination (HubSpot, Formspree, email) in server/src/index.js.
 */
export async function submitDemoRequest(data: DemoRequest): Promise<void> {
  const res = await fetch('/api/demo-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.ok) {
    throw new DemoRequestError(body.error || 'Something went wrong. Please try again.', body.errors);
  }
}

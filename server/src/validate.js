// Mirrors the client-side rules in client/src/lib/demoForm.ts.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FREE_EMAIL_RE = /@(gmail|yahoo|hotmail|outlook|icloud|aol|proton|protonmail)\./i;
const SPEND_OPTIONS = ['$50M – $250M', '$250M – $1B', '$1B+'];

const str = (v) => (typeof v === 'string' ? v.trim().slice(0, 200) : '');

export function validateDemoRequest(body) {
  const name = str(body?.name);
  const email = str(body?.email);
  const company = str(body?.company);
  const spend = SPEND_OPTIONS.includes(str(body?.spend)) ? str(body.spend) : SPEND_OPTIONS[0];

  const errors = {};
  if (name.length < 2) errors.name = 'Enter your full name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.';
  else if (FREE_EMAIL_RE.test(email)) errors.email = 'Please use your work email.';
  if (!company) errors.company = 'Enter your company name.';

  if (Object.keys(errors).length) return { errors };
  return { data: { name, email, company, spend } };
}

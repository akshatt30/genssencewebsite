// Vercel serverless function for POST /api/demo-request.
// Locally the same route is served by Express (server/src/index.js).
import { validateDemoRequest } from '../server/src/validate.js';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { data, errors } = validateDemoRequest(req.body);
  if (errors) return res.status(400).json({ ok: false, errors });

  // TODO(demo-form): deliver the request to its real destination
  // (CRM such as HubSpot, a Formspree form, or a transactional email).
  // No endpoint has been chosen yet, so the request is only logged
  // (visible under Vercel → Project → Logs).
  console.log('[demo-request]', new Date().toISOString(), data);

  return res.status(200).json({ ok: true });
}

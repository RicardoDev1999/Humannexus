
export async function POST({ request }) {
  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get("cf-turnstile-response");
  const ip = request.headers.get("CF-Connecting-IP");

  if (typeof token !== "string" || token.length === 0) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }

  // Validate the token by calling the
  // "/siteverify" API endpoint.
  let formData = new FormData();
  formData.append("secret", import.meta.env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    body: formData,
    method: "POST",
  });

  const outcome = await result.json();
  return new Response(JSON.stringify(outcome), { status: outcome.success ? 200 : 403 });
}

// Raw HTTP (no SDK): a static request body to the vendor API. apiwatch maps this to
// the OpenAPI operation and, when the vendor renames a request field, rewrites the body
// and validates it against the new schema before proposing the fix.
export async function ask(): Promise<unknown> {
  const res = await fetch('https://api.openai.com/v1/demo', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-4', prompt: 'hello', stream: false }),
  });
  return res.json();
}

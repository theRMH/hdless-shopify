import { render } from '@shopify/hydrogen/entry-server';

export default async function handler(req, res) {
  const { request, ...context } = req;
  const response = await render(request, context);
  response.headers.forEach((value, name) => res.setHeader(name, value));
  res.status(response.status).send(response.body);
}

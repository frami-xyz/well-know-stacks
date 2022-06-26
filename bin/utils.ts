import { JSDOM } from "jsdom";

export async function dom(url: string | URL) {
  console.log('loading dom from:', url.toString())
  const res = await fetch(url)
  const txt = await res.text()
  return new JSDOM(txt)
}
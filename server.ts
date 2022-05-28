import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

import { xmd } from "./mod.ts";

const html = await xmd({
  title: "xmd.txt",
  filename: "README.md",
});

serve(function handler() {
  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
});

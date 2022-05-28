import { render } from "./dep.ts";

const decoder = new TextDecoder("utf-8");

async function xmd(opt: { filename: string; title: string; rootUrl?: string }) {
  const markdown = decoder.decode(await Deno.readFile(opt.filename));
  const body = render(markdown, {
    baseUrl: opt.rootUrl || "/",
  });
  const html = `
    <html>
      <head>
        <style type="text/css" media="all">
          body#manpage {margin:0}
          .mp {max-width:100ex;padding:0 9ex 1ex 4ex}
          .mp p,.mp pre,.mp ul,.mp ol,.mp dl {margin:0 0 20px 0}
          .mp h2 {margin:10px 0 0 0}
          .mp > p,.mp > pre,.mp > ul,.mp > ol,.mp > dl {margin-left:8ex}
          .mp h3 {margin:0 0 0 4ex}
          .mp dt {margin:0;clear:left}
          .mp dt.flush {float:left;width:8ex}
          .mp dd {margin:0 0 0 9ex}
          .mp h1,.mp h2,.mp h3,.mp h4 {clear:left}
          .mp pre {margin-bottom:20px}
          .mp pre+h2,.mp pre+h3 {margin-top:22px}
          .mp h2+pre,.mp h3+pre {margin-top:5px}
          .mp img {display:block;margin:auto}
          .mp h1.man-title {display:none}
          .mp,.mp code,.mp pre,.mp tt,.mp kbd,.mp samp,.mp h3,.mp h4 {font-family:monospace;font-size:14px;line-height:1.42857142857143}
          .mp h2 {font-size:16px;line-height:1.25}
          .mp h1 {font-size:20px;line-height:2}
          .mp {text-align:justify;background:#fff}
          .mp,.mp code,.mp pre,.mp pre code,.mp tt,.mp kbd,.mp samp {color:#131211}
          .mp h1,.mp h2,.mp h3,.mp h4 {color:#030201}
          .mp u {text-decoration:underline}
          .mp code,.mp strong,.mp b {font-weight:bold;color:#131211}
          .mp em,.mp var {font-style:italic;color:#232221;text-decoration:none}
          .mp a,.mp a:link,.mp a:hover,.mp a code,.mp a pre,.mp a tt,.mp a kbd,.mp a samp {color:#0000ff}
          .mp b.man-ref {font-weight:normal;color:#434241}
          .mp pre code {font-weight:normal;color:#434241}
          .mp li { margin-bottom: 6px; }
          .mp ol { margin: 0px; }
          ol.man-decor,ol.man-decor li {margin:3px 0 10px 0;padding:0;float:left;width:33%;list-style-type:none;text-transform:uppercase;color:#999;letter-spacing:1px}
          ol.man-decor {width:100%}
          ol.man-decor li.tl {text-align:left}
          ol.man-decor li.tc {text-align:center;letter-spacing:4px}
          ol.man-decor li.tr {text-align:right;float:right}
          .mp pre { background: #f8f8f8; padding: 2ex; }
          .highlight { margin-left: 8ex; }
        </style>
      </head>
      <body>
        <div class="mp">
          <ol class="man-decor man-head man head">
              <li class="tl">${opt.title}</li>
          </ol>
          ${body}
        </div>
      </body>
    </html>
  `;

  return html;
}

export { xmd };
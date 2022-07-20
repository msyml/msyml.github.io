import{d as n}from"./app.2450d0e1.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=n(`<h1 id="\u9752\u9F99\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#\u9752\u9F99\u9762\u677F" aria-hidden="true">#</a> \u9752\u9F99\u9762\u677F</h1><p>docker\u5B89\u88C5\u9752\u9F99\u9762\u677F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker pull whyour/qinglong:latest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u90E8\u7F72\u9762\u677F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -dit <span class="token punctuation">\\</span>
-v <span class="token environment constant">$PWD</span>/ql/config:/ql/config <span class="token punctuation">\\</span>
-v <span class="token environment constant">$PWD</span>/ql/log:/ql/log <span class="token punctuation">\\</span>
-v <span class="token environment constant">$PWD</span>/ql/db:/ql/db <span class="token punctuation">\\</span>
-p <span class="token number">5600</span>:5600 <span class="token punctuation">\\</span>
--name qinglong <span class="token punctuation">\\</span>
--hostname qinglong <span class="token punctuation">\\</span>
--restart always <span class="token punctuation">\\</span>
whyour/qinglong:latest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,5);function p(l,t){return e}var o=s(a,[["render",p]]);export{o as default};

import{d as n}from"./app.2450d0e1.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="promise\u4ECB\u7ECD\u4E0E\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#promise\u4ECB\u7ECD\u4E0E\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> Promise\u4ECB\u7ECD\u4E0E\u57FA\u672C\u4F7F\u7528</h1><p>Promise\u662FJS\u8FDB\u884C\u5F02\u6B65\u7F16\u7A0B\u7684\u65B0\u89E3\u51B3\u65B9\u6848\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528promise" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528promise" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F7F\u7528Promise</h2><ul><li>\u65E7\u7684\uFF1A\u5FC5\u987B\u5728\u542F\u52A8\u5F02\u6B65\u4EFB\u52A1\u524D\u6307\u5B9A</li><li>Promise\uFF1A\u542F\u52A8\u5F02\u6B65\u4EFB\u52A1 -&gt; \u8FD4\u56DEPromise\u5BF9\u8C61 -&gt; \u7ED9promise\u5BF9\u8C61\u7ED1\u5B9A\u56DE\u8C03\u51FD\u6570\u3002</li><li>\u652F\u6301\u94FE\u5F0F\u8C03\u7528\uFF0C\u53EF\u4EE5\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u95EE\u9898\u3002</li></ul><p>\u501F\u52A9<code>until.promisify</code>\u5C06(err, res)\u98CE\u683C\u51FD\u6570\u8FDB\u884Cpromise\u8F6C\u5316\u3002</p><h2 id="\u5B9E\u73B0\u62BD\u5956\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u62BD\u5956\u7A0B\u5E8F" aria-hidden="true">#</a> \u5B9E\u73B0\u62BD\u5956\u7A0B\u5E8F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u5F02\u6B65\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7F16\u7A0B" aria-hidden="true">#</a> \u5F02\u6B65\u7F16\u7A0B</h2><ul><li><p>fs\u6587\u4EF6\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> date</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u6570\u636E\u5E93\u64CD\u4F5C</p></li><li><p>AJAX</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/server&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u5B9A\u65F6\u5668</p></li></ul><h1 id="promise-api" tabindex="-1"><a class="header-anchor" href="#promise-api" aria-hidden="true">#</a> Promise API</h1><h2 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve" aria-hidden="true">#</a> Promise.resolve</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u4E3A\u975EPromise\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\u6210\u529Fpromise\u5BF9\u8C61</span>
<span class="token comment">// \u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u4E3APromise\u5BF9\u8C61\uFF0C\u5219\u53C2\u6570\u7684\u7ED3\u679C\u51B3\u5B9A\u4E86resolve\u7684\u7ED3\u679C</span>
p1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 111</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject" aria-hidden="true">#</a> Promise.reject</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u4E3A\u975EPromise\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\u6210\u529Fpromise\u5BF9\u8C61</span>
<span class="token comment">// \u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u4E3APromise\u5BF9\u8C61\uFF0C\u4E00\u76F4\u662F\u5931\u8D25</span>
p1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 111</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> Promise.all</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">,</span>p3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u53EA\u6709\u6570\u7EC4\u5185\u90E8Promise\u5168\u6210\u529F\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u503C\u624D\u662F\u6210\u529F\u7684</span>
<span class="token comment">// \u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u662F\u5404\u4E2APromise\u5BF9\u8C61\u7684\u7ED3\u679C\u3002</span>
<span class="token comment">// \u5982\u679C\u6709\u5931\u8D25\u7684Promise\uFF0C\u90A3\u4E2A\u7ED3\u679C\u5C31\u662F\u5931\u8D25\u7684\u90A3\u4E2APromise\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="promise-race" tabindex="-1"><a class="header-anchor" href="#promise-race" aria-hidden="true">#</a> Promise.race</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684promise\uFF0C\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684promise\u7684\u7ED3\u679C\u72B6\u6001\u5C31\u662F\u6700\u7EC8\u7684\u7ED3\u679C\u72B6\u6001</span>
Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E2D\u65ADpromise" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u65ADpromise" aria-hidden="true">#</a> \u4E2D\u65ADPromise</h2><p>\u8FD4\u56DE\u4E00\u4E2A pending\u72B6\u6001\u7684Promise</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="promise\u5173\u952E\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#promise\u5173\u952E\u95EE\u9898" aria-hidden="true">#</a> Promise\u5173\u952E\u95EE\u9898</h1><h1 id="promise\u81EA\u5B9A\u4E49\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#promise\u81EA\u5B9A\u4E49\u5C01\u88C5" aria-hidden="true">#</a> Promise\u81EA\u5B9A\u4E49\u5C01\u88C5</h1><h1 id="async\u4E0Eawait" tabindex="-1"><a class="header-anchor" href="#async\u4E0Eawait" aria-hidden="true">#</a> async\u4E0Eawait</h1><h2 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h2><p>\u8FD4\u56DE\u503C\u662F\u4E00\u4E2APromise\u5BF9\u8C61</p>`,26);function e(t,o){return p}var i=s(a,[["render",e]]);export{i as default};

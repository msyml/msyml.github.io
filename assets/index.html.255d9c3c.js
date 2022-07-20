import{r as p,c as t,a as n,b as o,F as l,d as s,e as a,o as c}from"./app.2450d0e1.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const i={},u=s(`<h1 id="\u4E00\u4E9B\u5947\u602A\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5947\u602A\u7684\u95EE\u9898" aria-hidden="true">#</a> \u4E00\u4E9B\u5947\u602A\u7684\u95EE\u9898</h1><h2 id="node-sass\u4F9D\u8D56\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#node-sass\u4F9D\u8D56\u95EE\u9898" aria-hidden="true">#</a> node-sass\u4F9D\u8D56\u95EE\u9898</h2><ul><li>\u4F7F\u7528npm\u5B89\u88C5node-sass\u65F6\uFF0C\u6216\u8005\u5B89\u88C5\u9700\u8981python2\u7684\u4F9D\u8D56\u65F6\uFF0C\u4F1A\u62A5\u51FA\u4EE5\u4E0B\u9519\u8BEF:npm install Error: not found: python2</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u5B89\u88C5python
<span class="token function">npm</span> <span class="token function">install</span> -g node-gyp
// \u914D\u7F6E\u73AF\u5883\u53D8\u91CF
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> python python2.7
// \u914D\u7F6E\u7248\u672C
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> msvs_version <span class="token number">2017</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g mirror-config-china --registry<span class="token operator">=</span>http://registry.npm.taobao.org
<span class="token function">npm</span> <span class="token function">install</span> node-sass
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u624B\u52A8\u6307\u5B9A<strong>node-sass</strong>\u5B89\u88C5\u5730\u5740</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> sass_binary_site <span class="token string">&quot;https://npm.taobao.org/mirrors/node-sass/&quot;</span>
// \u6216\u8005\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF
<span class="token builtin class-name">set</span> <span class="token assign-left variable">SASS_BINARY_SITE</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node-sass/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u9760\u8C31\u7684\u89E3\u51B3\u65B9\u6848-\u76F4\u63A5\u4F7F\u7528cnpm\u3002" tabindex="-1"><a class="header-anchor" href="#\u9760\u8C31\u7684\u89E3\u51B3\u65B9\u6848-\u76F4\u63A5\u4F7F\u7528cnpm\u3002" aria-hidden="true">#</a> \u9760\u8C31\u7684\u89E3\u51B3\u65B9\u6848,\u76F4\u63A5\u4F7F\u7528cnpm\u3002</h3><h2 id="element-ui" tabindex="-1"><a class="header-anchor" href="#element-ui" aria-hidden="true">#</a> Element-UI</h2><h3 id="element\u8868\u5355\u6821\u9A8C-\u52A8\u6001\u66F4\u6539\u89C4\u5219-\u4F1A\u89E6\u53D1\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#element\u8868\u5355\u6821\u9A8C-\u52A8\u6001\u66F4\u6539\u89C4\u5219-\u4F1A\u89E6\u53D1\u6821\u9A8C" aria-hidden="true">#</a> Element\u8868\u5355\u6821\u9A8C\uFF0C\u52A8\u6001\u66F4\u6539\u89C4\u5219\uFF0C\u4F1A\u89E6\u53D1\u6821\u9A8C</h3>`,11),b={href:"https://github.com/ElemeFE/element/issues/2846",target:"_blank",rel:"noopener noreferrer"},d=a("\u52A8\u6001\u4FEE\u6539\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\uFF0C\u7ACB\u5373\u89E6\u53D1\u9A8C\u8BC1"),m=a("\u53C2\u7167github issue\u3002"),k=s(`<p>\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">checkUserName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u7528\u6237\u540D&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        userName<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> validator<span class="token operator">:</span> checkUserName<span class="token punctuation">,</span> trigger<span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,2);function h(g,f){const e=p("OutboundLink");return c(),t(l,null,[u,n("p",null,[n("a",b,[d,o(e)]),m]),k],64)}var x=r(i,[["render",h]]);export{x as default};

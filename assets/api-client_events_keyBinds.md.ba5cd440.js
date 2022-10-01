import{_ as a,c as l,a as s,b as p,t as o,d as e,o as t}from"./app.36b3142b.js";const _=JSON.parse('{"title":".keyBinds","description":"","frontmatter":{"title":".keyBinds","order":-99},"headers":[{"level":2,"title":"KeyBind Interface","slug":"keybind-interface","link":"#keybind-interface","children":[]},{"level":2,"title":"registerKeybind","slug":"registerkeybind","link":"#registerkeybind","children":[]}],"relativePath":"api-client/events/keyBinds.md"}'),r={name:"api-client/events/keyBinds.md"},c={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),F=e(`<p>While similar to the <a href="./keyHeld.html">Key Held</a> API, it helps with more specific functionality.</p><p>Use <a href="https://www.toptal.com/developers/keycode" target="_blank" rel="noreferrer">https://www.toptal.com/developers/keycode</a> to determine what key number to use.</p><h2 id="keybind-interface" tabindex="-1">KeyBind Interface <a class="header-anchor" href="#keybind-interface" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Keybind</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">singlePress</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Callback Function</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">longPress</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Callback Function</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="registerkeybind" tabindex="-1">registerKeybind <a class="header-anchor" href="#registerkeybind" aria-hidden="true">#</a></h2><p>Used to register a specific key to perform a function when a key is let go.</p><p>Also allows a &#39;long press&#39; of a key to trigger something after holding a key for a set period of time.</p><p>Arguments</p><ul><li>keybind object, see above.</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> SEMI_COLON_KEY </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">186</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// ;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> QUOTE_KEY </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">222</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doSomething</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Prevents chat from triggering this key press.</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isAnyMenuOpen</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">playAnimation</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">amb@code_human_in_car_mp_actions@dance@std@rds@base</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">idle_a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ANIMATION_FLAGS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">REPEAT</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doSomethingAfterSomeTime</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isAnyMenuOpen</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ding!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">events</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keyBinds</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerKeybind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> SEMI_COLON_KEY</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">singlePress</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> doSomething</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">events</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keyBinds</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerKeybind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> QUOTE_KEY</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">longPress</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> doSomethingAfterSomeTime</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,10);function D(n,i,A,C,d,h){return t(),l("div",null,[s("h1",c,[p(o(n.$frontmatter.title)+" ",1),y]),F])}const f=a(r,[["render",D]]);export{_ as __pageData,f as default};
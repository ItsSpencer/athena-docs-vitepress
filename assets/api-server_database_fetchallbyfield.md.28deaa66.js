import{_ as n,c as l,a as s,b as o,t as e,d as p,o as t}from"./app.1459144b.js";const h=JSON.parse('{"title":".funcs.fetchAllByField","description":"","frontmatter":{"title":".funcs.fetchAllByField","order":0},"headers":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"api-server/database/fetchallbyfield.md"}'),r={name:"api-server/database/fetchallbyfield.md"},c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=p(`<p>Used to fetch data from a collection based on a specific key and value pairing. It will return all documents as an array that match the key and value pair.</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>key -&gt; string <ul><li>An identifier to help find the document you are looking for.</li><li>Example: &#39;model&#39;</li></ul></li><li>value -&gt; any <ul><li>A value that should correspond under that specific key&#39;s value.</li><li>Example: &#39;infernus&#39;</li></ul></li><li>collection -&gt; string <ul><li>The name of the collection to fetch data from.</li><li>Example: &#39;vehicles&#39;</li></ul></li></ul><p>Returns</p><ul><li>Promises to return an Array of documents if found. Otherwise an empty array.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IVehicle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">_uid</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fetchSomething</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">results</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">database</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">funcs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fetchAllByField</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IVehicle</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">infernus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vehicles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">results</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">results</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Could not find any infernuses.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Found all the infernuses owned by players.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">results</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7);function i(a,D,d,A,u,C){return t(),l("div",null,[s("h1",c,[o(e(a.$frontmatter.title)+" ",1),F]),y])}const _=n(r,[["render",i]]);export{h as __pageData,_ as default};
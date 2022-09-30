import{_ as n,c as o,a as s,b as l,t as e,d as p,o as t}from"./app.1459144b.js";const f=JSON.parse('{"title":".world","description":"","frontmatter":{"title":".world","order":-99},"headers":[{"level":2,"title":"positionIsClear","slug":"positionisclear","link":"#positionisclear","children":[]},{"level":2,"title":"isInOceanWater","slug":"isinoceanwater","link":"#isinoceanwater","children":[]}],"relativePath":"api-server/get/world.md"}'),r={name:"api-server/get/world.md"},c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=p(`<p>Used to get general world information.</p><h2 id="positionisclear" tabindex="-1">positionIsClear <a class="header-anchor" href="#positionisclear" aria-hidden="true">#</a></h2><p>Checks if a position in the world does not have a specific entity in the way.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isFreeOfVehicles </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">world</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">positionIsClear</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vehicle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isFreeOfPlayers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">world</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">positionIsClear</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">player</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isCompletelyFree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">world</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">positionIsClear</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><em>This function is async. Must use an async function.</em></p><h2 id="isinoceanwater" tabindex="-1">isInOceanWater <a class="header-anchor" href="#isinoceanwater" aria-hidden="true">#</a></h2><p>Check if a specific entity such as a vehicle, or player is in the ocean.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isInWater </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">world</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isInOceanWater</span><span style="color:#A6ACCD;">(somePlayer)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,8);function C(a,i,F,A,d,h){return t(),o("div",null,[s("h1",c,[l(e(a.$frontmatter.title)+" ",1),D]),y])}const u=n(r,[["render",C]]);export{f as __pageData,u as default};
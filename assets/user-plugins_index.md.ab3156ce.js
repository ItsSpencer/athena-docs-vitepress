import{_ as t,c as a,a as e,b as o,t as n,d as l,o as r}from"./app.55a10406.js";const D=JSON.parse('{"title":"Submitting User Plugins","description":"","frontmatter":{"title":"Submitting User Plugins","order":-99},"headers":[{"level":2,"title":"How to Submit a Plugin?","slug":"how-to-submit-a-plugin","link":"#how-to-submit-a-plugin","children":[{"level":3,"title":"Fork the Repository","slug":"fork-the-repository","link":"#fork-the-repository","children":[]},{"level":3,"title":"Modify the Plugin List","slug":"modify-the-plugin-list","link":"#modify-the-plugin-list","children":[]},{"level":3,"title":"Create a Pull Request","slug":"create-a-pull-request","link":"#create-a-pull-request","children":[]}]}],"relativePath":"user-plugins/index.md"}'),p={name:"user-plugins/index.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<p>User plugins are submitted to the main documentation repository.</p><h2 id="how-to-submit-a-plugin" tabindex="-1">How to Submit a Plugin? <a class="header-anchor" href="#how-to-submit-a-plugin" aria-hidden="true">#</a></h2><h3 id="fork-the-repository" tabindex="-1">Fork the Repository <a class="header-anchor" href="#fork-the-repository" aria-hidden="true">#</a></h3><p>Visit the following repository and fork it.</p><p><a href="https://github.com/Stuyk/athena-docs-vitepress/" target="_blank" rel="noreferrer">https://github.com/Stuyk/athena-docs-vitepress/</a></p><p>If you have an existing fork, you need to catch up with the main repository, or simply re-fork it by deleting your fork and making another.</p><h3 id="modify-the-plugin-list" tabindex="-1">Modify the Plugin List <a class="header-anchor" href="#modify-the-plugin-list" aria-hidden="true">#</a></h3><p>After forking the repository, modify your version of the forked repository and edit the file under:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docs/plugins/list.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Append information pertaining to your plugin&#39;s repository in the JavaScript array.</p><p>Example:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">author</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Stuyk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Template Plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">repo</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">altv-athena-plugin-template</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="create-a-pull-request" tabindex="-1">Create a Pull Request <a class="header-anchor" href="#create-a-pull-request" aria-hidden="true">#</a></h3><p>Visit the following link: <a href="https://github.com/Stuyk/athena-docs-vitepress/pulls" target="_blank" rel="noreferrer">https://github.com/Stuyk/athena-docs-vitepress/pulls</a></p><p>Click on <code>New Pull Request</code> on the right-hand side.</p><p>Click <code>compare across forks</code>.</p><p><img src="https://i.imgur.com/kA4J9uN.png" alt=""></p><p>Find the repository you modified, and select it for the <code>head repository</code>.</p><p><img src="https://i.imgur.com/WBcmfLg.png" alt=""></p><p>A big green button will say <code>Create Pull Request</code>. Click it.</p><p>Submit the PR.</p>`,21);function u(s,h,y,g,F,m){return r(),a("div",null,[e("h1",i,[o(n(s.$frontmatter.title)+" ",1),c]),d])}const k=t(p,[["render",u]]);export{D as __pageData,k as default};
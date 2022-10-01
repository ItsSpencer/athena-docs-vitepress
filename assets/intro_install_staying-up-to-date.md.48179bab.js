import{_ as s,c as n,a as e,b as a,t as o,d as r,o as i}from"./app.55a10406.js";const C=JSON.parse('{"title":"Staying up to date","description":"","frontmatter":{"title":"Staying up to date","order":-94},"headers":[{"level":2,"title":"Why Update?","slug":"why-update","link":"#why-update","children":[{"level":3,"title":"How do I Update?","slug":"how-do-i-update","link":"#how-do-i-update","children":[]},{"level":3,"title":"Fetching Upstream","slug":"fetching-upstream","link":"#fetching-upstream","children":[]},{"level":3,"title":"Now I Have Merge Conflicts?","slug":"now-i-have-merge-conflicts","link":"#now-i-have-merge-conflicts","children":[]},{"level":3,"title":"After Resolving Merge Conflicts?","slug":"after-resolving-merge-conflicts","link":"#after-resolving-merge-conflicts","children":[]}]}],"relativePath":"intro/install/staying-up-to-date.md"}'),l={name:"intro/install/staying-up-to-date.md"},p={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=r(`<h2 id="why-update" tabindex="-1">Why Update? <a class="header-anchor" href="#why-update" aria-hidden="true">#</a></h2><p>Well in most cases Athena is constantly moving forward with security patches, algorithm improvements, and new features. There is often a dedicated development branch that Stuyk and the community are constantly pushing changes into.</p><p>If you do not update you run the risk of your game mode becoming out-of-date and unmanageable in the foreseeable future. </p><p>Want evidence of this? As the author of Athena I&#39;ve witnessed my old game mode become completely unplayable after 6 months time of not updating. Too many features have become out-of-date and API changes have made it near impossible to update.</p><p>So... what does the author recommend?</p><blockquote><p>Stay up-to-date or risk the game mode breaking. Learn these tools you will not regret it.</p></blockquote><h3 id="how-do-i-update" tabindex="-1">How do I Update? <a class="header-anchor" href="#how-do-i-update" aria-hidden="true">#</a></h3><p>When you cloned your private fork of the Athena Framework you should have ran this in a terminal:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git remote add upstream https://github.com/Stuyk/altv-athena</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote set-url --push upstream DISABLE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Instead of disabling the push upstream, you can also set this to your origin repository.</p><p>An example of how to change the remote push URL is here:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">git remote set</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">url </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">push origin your_repository_url</span></span>
<span class="line"></span></code></pre></div><p>After running this in a terminal you are now hooked up to the main repository to pull updates from.</p><p>You will first need to commit any changes that you have made on your private fork.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &quot;I made some changes, this is what I did here&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>If you run into errors will doing the above, google it. Seriously.</em></p><h3 id="fetching-upstream" tabindex="-1">Fetching Upstream <a class="header-anchor" href="#fetching-upstream" aria-hidden="true">#</a></h3><p>Pulling from upstream means that you are going to take the changes from the main Athena repository and smash them into your current repository.</p><h4 id="merging-from-master" tabindex="-1">Merging from Master <a class="header-anchor" href="#merging-from-master" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git fetch upstream</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull upstream master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="merging-from-a-development-branch" tabindex="-1">Merging from a Development Branch <a class="header-anchor" href="#merging-from-a-development-branch" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git fetch upstream</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull upstream branch_version_goes_here</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="now-i-have-merge-conflicts" tabindex="-1">Now I Have Merge Conflicts? <a class="header-anchor" href="#now-i-have-merge-conflicts" aria-hidden="true">#</a></h3><p>Yes, you should normally have merge conflicts. This is the part where you absolutely must learn the tools that you are using. Merge conflicts means there is a difference between your current repository and the other repository which you pulled code from.</p><p>This means you will be fixing merge conflicts by using VSCode to help identify and fix them. You will need to figure out where all the merge conflicts are and resolve them based on what you need.</p><p>tl;dr - Watch this video below on how to manage merge conflicts.</p>`,26),d=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/QmKdodJU-js",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),u=e("h3",{id:"after-resolving-merge-conflicts",tabindex:"-1"},[a("After Resolving Merge Conflicts? "),e("a",{class:"header-anchor",href:"#after-resolving-merge-conflicts","aria-hidden":"true"},"#")],-1),m=e("p",null,"You should make a new commit and push the changes up to your private repository.",-1),g=e("p",null,"That's it.",-1);function y(t,f,v,b,A,w){return i(),n("div",null,[e("h1",p,[a(o(t.$frontmatter.title)+" ",1),c]),h,d,u,m,g])}const D=s(l,[["render",y]]);export{C as __pageData,D as default};
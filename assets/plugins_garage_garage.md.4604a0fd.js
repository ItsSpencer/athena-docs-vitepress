import{_ as e,c as n,a,b as r,t,d as o,o as l}from"./app.9a04e582.js";const f=JSON.parse('{"title":"Garage","description":"","frontmatter":{"title":"Garage","order":-99},"headers":[{"level":3,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]}],"relativePath":"plugins/garage/garage.md"}'),i={name:"plugins/garage/garage.md"},p={id:"frontmatter-title",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<h3 id="abstract" tabindex="-1">Abstract <a class="header-anchor" href="#abstract" aria-hidden="true">#</a></h3><p>The garage system allows players to store and withdraw vehicles in preset virtual garages across Los Santos. A vehicle that is destroyed may be withdrawn from any garage. When a vehicle is stored it can only be withdrawn from that garage.</p><p>\u{1F4C1} <code>src/core/plugins/core-garages/</code></p><ul><li>Withdraw a Vehicle</li><li>Deposit a Vehicle</li></ul><p><img src="https://i.imgur.com/ietFAMD.png" alt=""></p><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h3><p>\u{1F4C1} <code>src/core/plugins/core-garage/server/garages/LocationNameHere.ts</code></p><p><strong>Additional garages can be added inside of the garages folder.</strong></p><p>\u{1F4C1} <code>src/core/plugins/core-garage/server/src/garages.ts</code></p><p>Parking is an array of positions and rotations that should be used to park vehicles.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    position: { x: -2954.107666015625, y: 470.46356201171875, z: 14.9 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: VEHICLE_TYPE.VEHICLE,</span></span>
<span class="line"><span style="color:#A6ACCD;">    index: &#39;banham-canyon&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    parking: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        position: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                x: -2963.80224609375,</span></span>
<span class="line"><span style="color:#A6ACCD;">                y: 462.5670471191406,</span></span>
<span class="line"><span style="color:#A6ACCD;">                z: 15.210205078125,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        rotation: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                x: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">                y: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">                z: -2.671590805053711,</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>There are commands for making parking lists easier. Check <a href="./../../plugins/commands/cmds-mod-garage.html">out this link</a>.</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Drive your car into a parking space near a garage.</p><p>If the parking space is registered you will be able to go to the garage marker and de-spawn it.</p><p>Access the garage interface by interacting with <code>E</code>.</p><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><p>No Commands Available</p>`,18);function g(s,h,A,C,m,u){return l(),n("div",null,[a("h1",p,[r(t(s.$frontmatter.title)+" ",1),c]),d])}const _=e(i,[["render",g]]);export{f as __pageData,_ as default};
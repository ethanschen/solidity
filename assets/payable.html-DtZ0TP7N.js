import{_ as a,c as s,a as e,o as t}from"./app-Dt8Q2BcN.js";const p={};function o(c,n){return t(),s("div",null,n[0]||(n[0]=[e(`<h1 id="可支付" tabindex="-1"><a class="header-anchor" href="#可支付"><span>可支付</span></a></h1><p>本节我们讨论一个划时代的函数修饰符 -- <strong>payable</strong></p><p><strong>payable</strong>的出现是划时代的 🥳</p><p>在它出现前，函数只能将代表货币的数字作为参数传入;</p><p>在它出现后，函数可以将货币直接作为参数传入。</p><p>在以太坊中，因为货币（以太币）、数据（事务负载）、以及智能合约代码本身都存在于以太坊，</p><p>所以可以在调用函数的同时付钱给智能合约。</p><p>这就允许出现很多有趣的逻辑！</p><p>比如要求必须支付指定数量的以太才能运行函数,</p><div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity" data-title="solidity"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 检查调用方是否支付0.001以太</span></span>
<span class="line">  <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token number">0.001</span> ether<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 如果已支付，则运行函数逻辑</span></span>
<span class="line">  <span class="token keyword">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，<code>msg.value</code>是一种可以查看调用方向合约发送了多少以太的方法，另外<code>ether</code>是一个内建单元。</p><p>从调用方那边看到的应该是下面这样子：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 假设 \`KarezaContract\` 在以太坊上指向你的合约：</span></span>
<span class="line">KarezaContract<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>from<span class="token operator">:</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>defaultAccount<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> web3<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">toWei</span><span class="token punctuation">(</span><span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>JavaScript</code>使用<code>value</code>字段来指定发送多少（<code>0.001</code>）以太。</p><p>如果把事务想象成信封，你发送到函数的参数就是信的内容。添加<code>value</code>很像在信封里面放钱 -- 信件内容和钱同时发送给了接收者。</p><blockquote><p>注意：如果一个函数没标记为<code>payable</code>，而你尝试利用上面的方法发送以太，函数将拒绝你的事务。</p></blockquote>`,16)]))}const i=a(p,[["render",o],["__file","payable.html.vue"]]),u=JSON.parse('{"path":"/payable.html","title":"可支付","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1734842645000,"contributors":[{"name":"Ethan S. Chen","username":"Ethan S. Chen","email":"ethanschen@163.com","commits":1,"url":"https://github.com/Ethan S. Chen"}]},"filePathRelative":"payable.md"}');export{i as comp,u as data};
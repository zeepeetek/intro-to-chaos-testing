---
marp: true
backgroundColor: ##EDF2F9
footer: Ramp.network
backgroundImage: url('icon.png')
backgroundSize: 45px
backgroundPosition: top 10px left 10px
---
# intro to chaos testing
---

# Prerequisites

1. [Docker](https://docs.docker.com/get-docker/) 
2. [Visual Studio Code](https://code.visualstudio.com/download)
3. [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
4. [ngrok account](https://dashboard.ngrok.com/)
5. Docker `chaos-testing` network created: `$ docker network create chaos-testing`
6. Cloned `chaos-testing` [repo](git@github.com:RampNetwork/chaos-testing.git)
---
# *hello world* (well, not actually *hello world*, *[but still](https://youtu.be/YeMnPyusuBE?t=274)*)


<!-- 
The joke is from Monty Python's "Funniest Joke in the World". 
Luckily, nobody here speaks German, so we are safe 😆
-->
<!-- 
footer: 'branch: main'
-->
---
# even the best joke can get boring

<!-- 
We need to spice up our service, as we are loosing our customers at alarming rate.
-->
<!-- 
footer: 'branch: one_joke_is_not_enough'
-->
---
# but there is a problem
![](jokes_responses.png)
<!-- 
avreage response time is ~700mS. 
But average user gets bored after 750mS, so we're tight.
-->
---
# looks like we're failing
![](errors.png)
<!-- 
Itroducing (aartificial) timeout shows that we have an issue. Question is is it only one, and how can we reproduce it on production.
-->
---
# Chaos Engineering

Chaos engineering is the practice of intentionally injecting faults into a system to test its resilience. 
The goal is to identify potential failure points and correct them before they cause an actual outage or other disruption.

---
# [ToxiProxy](https://github.com/Shopify/toxiproxy) comes into play
![](toxiproxy.png)
<!-- 
Developed by Shopify, Toxiproxy is a framework for simulating network conditions. It's made specifically to work in testing, CI and development environments, supporting deterministic tampering with connections, but with support for randomized chaos and customization.
-->
<!-- 
footer: 'branch: toxiproxy_comes_into_play'
-->
---
# Let's give it a (re)try
![](re-try.png)

<!-- 
We are using axios-retry to fix the situation.
As timeout by default does not trigger retry, we need to make it explicit
  shouldResetTimeout: true,
  retryCondition: (_error) => true
We need to mind if we're not overflooding the system with re-tries, but that's entirely different problem
-->
<!-- 
footer: 'branch: give_it_a_re_try'
-->
---
# expose it to the world
`docker run -it -e NGROK_AUTHTOKEN=YOUR_AUTH_TOKEN --rm --name ngrok --network=chaos-testing ngrok/ngrok:latest  http 172.20.0.2:3000`

<!-- 
Here we are using ngrok to expose our application to the internet. The ip is an actual IP of a running container.
-->
<!--
footer: branch: expose_it_to_the_world
-->
---
# unleash the chaos
<!-- 
Let's play with other toxics, and see if we are resilient. Start with *connection reset by peer*
-->
<!--
footer: branch: unleash_the_chaos
-->
---
# next steps
* [Zed Attack Proxy](https://www.zaproxy.org/)
* [mitmproxy](https://mitmproxy.org/)
* [ChaosTollkit](https://chaostoolkit.org/)

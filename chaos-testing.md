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
---

# even the best joke can get boring

<!-- 
We need to spice up our service, as we are loosing our customers at alarming rate.
-->
---
# but there is a problem
![](jokes_responses.png)

---
![](errors.png)

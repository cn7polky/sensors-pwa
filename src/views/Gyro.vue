<template>
  <div id="gyro">
    <h1>Device Orientation API</h1>
    <span id="notsuport" class="hidden">deviceorientation event não suportado</span>
    <span id="calibration" class="hidden">compassneedscalibration event não suportado</span>

    <div id="results">
      <div id="cube" class="cube">
        <div class="img face one">
          <img src="../assets/imgs/1.png" width="120px" height="120px" alt="1" />
        </div>
        <div class="img face two">
          <img src="../assets/imgs/2.png" width="120px" height="120px" alt="2" />
        </div>
        <div class="img face three">
          <img src="../assets/imgs/3.png" width="120px" height="120px" alt="3" />
        </div>
        <div class="img face four">
          <img src="../assets/imgs/4.png" width="120px" height="120px" alt="4" />
        </div>
        <div class="img face five">
          <img src="../assets/imgs/5.png" width="120px" height="120px" alt="5" />
        </div>
        <div class="img face six">
          <img src="../assets/imgs/6.png" width="120px" height="120px" alt="6" />
        </div>
      </div>
      <div id="inf" class="hidden">
        <p>
          Coordenadas:
          (
          <span id="beta" class="value">null</span>,
          <span id="gamma" class="value">null</span>,
          <span id="alpha" class="value">null</span>)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.all()
  },
  methods: {
    all() {
      //verificar se o dispositivo tem suporte ao sensor
      //se não possuir o sensor, exibe mensagem
      if (!window.DeviceOrientationEvent) {
        document.getElementById('notsuport').classList.remove('hidden')
      } else {
        document.getElementById('inf').classList.remove('hidden')

        //obter o evento gerado a partir da movimentação do dispositivo
        window.addEventListener('deviceorientation', function (event) {
          document.getElementById('cube').style.webkitTransform =
            document.getElementById('cube').style.transform =
            'rotateX(' + event.beta + 'deg) ' + //obtém a coordenada X e atribui ao cubo
            'rotateY(' + event.gamma + 'deg) ' +//obtém a coordenada Y e atribui ao cubo
            'rotateZ(' + event.alpha + 'deg)'   //obtém a coordenada Z e atribui ao cubo

          //exibe o valor das coordenadas X Y Z através da função Math.round do Javascript
          document.getElementById('beta').innerHTML = Math.round(event.beta)
          document.getElementById('gamma').innerHTML = Math.round(event.gamma)
          document.getElementById('alpha').innerHTML = Math.round(event.alpha)
        })
      }
    }
  }
}
</script>

<style>
.img {
  display: flex;
  justify-content: center;
  padding-top: 15px;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  max-width: 500px;
  margin: 2em auto;
  padding: 0 0.5em;
  font-size: 20px;
}

h1 {
  text-align: center;
}

.hidden {
  display: none;
}

.cube {
  width: 150px;
  height: 150px;
  position: relative;
  margin: 30px auto;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.face {
  width: 150px;
  height: 150px;
  position: absolute;
  font-size: 80px;
  text-align: center;
  line-height: 150px;
  background-color: #462b8f;
  /* box-shadow: inset 0 0 20px #242424; */
  /* opacity: 0.6; */
}

.cube .one {
  -webkit-transform: translateZ(75px);
  transform: translateZ(75px);
}

.cube .two {
  -webkit-transform: rotateY(90deg) translateZ(75px);
  transform: rotateY(90deg) translateZ(75px);
}

.cube .three {
  -webkit-transform: rotateY(180deg) translateZ(75px);
  transform: rotateY(180deg) translateZ(75px);
}

.cube .four {
  -webkit-transform: rotateY(-90deg) translateZ(75px);
  transform: rotateY(-90deg) translateZ(75px);
}

.cube .five {
  -webkit-transform: rotateX(90deg) translateZ(75px);
  transform: rotateX(90deg) translateZ(75px);
}

.cube .six {
  -webkit-transform: rotateX(-90deg) translateZ(75px) rotate(0deg);
  transform: rotateX(-90deg) translateZ(75px) rotate(0deg);
}

.value {
  font-weight: bold;
}

.author {
  display: block;
  margin-top: 1em;
}
</style>
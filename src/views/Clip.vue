<template>
  <div id="clip">
    <h1>Async Clipboard API</h1>
    <div id="content">
      <textarea id="out" placeholder="Texto a ser copiado"></textarea>

      <section>
        <button id="copy">
          <strong>Copiar</strong>
        </button>
        <button id="paste">
          <strong>Colar</strong>
        </button>
      </section>

      <div id="toast" hidden></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.copy()
    this.paste()
  },
  methods: {
    log(value) {
      if (toast.hidden) toast.textContent = value
      else toast.textContent += '\n' + value
      toast.className = String(value).match(/error/i) ? 'error' : ''
      toast.hidden = false
      setTimeout(() => { toast.hidden = true }, 1000)
    },
    copy() {
      document.getElementById('copy').onclick = () => {
        navigator.clipboard.writeText(out.value)
          .then(() => {
            this.log('Texto Copiado')
          })
      }
    },
    paste() {
      document.getElementById('paste').onclick = () => {
        navigator.clipboard.readText()
          .then(text => {
            out.value = text
            this.log('Text colado.') //ASDASDJLAHSD
          })
          .catch(() => {
            this.log('Falha ao ler o clipboard') //KAJSDHJKAHSDJKA
          })
      }
    },
  }
}
</script>

<style>
h1 {
  margin: 10px;
  font: inherit;
  font-size: 200%;
  color: #485184;
  text-shadow: 0 1px 0 #fff;
}

h3 {
  margin: 0;
  font: inherit;
  font-size: 140%;
  color: #666;
  text-shadow: 0 1px 0 #fff;
}

strong {
  font-weight: 500;
}

section {
  margin: 5px auto;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

section > * {
  flex: 0 1 45%;
}

button {
  position: relative;
  box-sizing: border-box;
  margin: 5px;
  padding: 10px 20px;
  border: 1px solid #430e85;
  background: #494884;
  border-radius: 5px;
  color: #fff;
  text-shadow: 0 -1px 0 #000;
  cursor: pointer;
  font: inherit;
  line-height: 1.1;
  outline: none;
  white-space: nowrap;
}

button:hover,
button:focus {
  background: rgb(104, 140, 164);
}

textarea {
  box-sizing: border-box;
  display: block;
  max-width: 478px;
  margin: 10px auto;
  padding: 10px;
  font: inherit;
  color: rgb(0, 0, 0);
  border: 2px solid #432864;
  border-radius: 5px;
  width: calc(100% - 22px);
  height: 6em;
  outline: none;
}

#toast,
#toast[hidden] {
  display: block;
  position: fixed;
  left: 50%;
  bottom: 0;
  padding: 6px 20px;
  min-width: 30%;
  max-width: 80%;
  background: #333;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
  transition: all 500ms ease;
  visibility: visible;
  white-space: pre-wrap;
  line-height: 2;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  will-change: transform, opacity;
  overflow: hidden;
  contain: content;
}

#toast[hidden] {
  transform: translateX(-50%) translateY(120%);
  opacity: 0;
}

#toast.error {
  color: #fcc;
  background: #511;
}

#content {
  margin-top: 100px;
}
</style>
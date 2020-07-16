import { init, h } from 'snabbdom'

console.log(init, h)

function add () {
  console.log(0)
}

function view () {
  return h('div#app', [
    h('h1', 'Top 10 movies'),
    h('div', [
      h('a.btn.add', {
        on: {
          click: add
        }
      })
    ])
  ])
}

const patch = init([])

const vnode = view()

const app = document.getElementById('app')

patch(app, vnode)

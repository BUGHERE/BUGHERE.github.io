const template = document.createElement('template')

template.innerHTML = ` 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<div class="card">
  <img src="https://picsum.photos/400" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 slot="title" class="card-title">
        <slot name=title">title to be replaced</slot>
    </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<style>
.card {
    margin-bottom:1rem;
}
</style>
`

class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectCallback(){
        this.shadowRoot.querySelector('.card').style.width = this.getAttribute('width')
        this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('img'))
    }
}

customElements.define('card-component', CardComponent)
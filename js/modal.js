function createModal() {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.insertAdjacentHTML('afterbegin', `
    <div id="myModal" class="modal">
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title"></span>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="modal-body">
            ${options.content || ''}
          </div>
          <div class="modal-footer">
            <button class="btn btn_type_second" type="submit">Ok</button>
            <button class="btn btn_type_second" type="reset">Reset</button>
          </div>
        </div>
      </div>
    </div>
    `)  
  document.body.appendChild(modal)
  return modal
}

$.modal = function(options) {
  const animationSpeed = 200
  const $modal = createModal(options)
  let closing = false

  return {
    open() {
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
      }, animationSpeed)
    },
    destroy() {}
  }
}
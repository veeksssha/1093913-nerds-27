var link=document.querySelector(".modal-button"),popup=document.querySelector(".modal-contact"),close=popup.querySelector(".close-modal-contact"),form=popup.querySelector("form"),name=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){name.value&&email.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});
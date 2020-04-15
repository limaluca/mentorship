const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
	card.addEventListener("click",function(){
		const detailId = card.getAttribute('id')
		window.location.href = `/receitaDetalhada?id=${detailId}`
		// const title = card.querySelector('h4').innerHTML
		// const author = card.querySelector('p').innerHTML
		// modalOverlay.classList.add('active')
		// modalOverlay.querySelector("iframe").src = `https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/${imgId}.png`
		// modalOverlay.querySelector('h4').innerHTML = `${title}` /*mostra o conteudo capturado*/
        // modalOverlay.querySelector('p').innerHTML = `${author}` /*mostra o conteudo capturado*/
	})


}

document.querySelector(".close-modal").addEventListener('click',function(){
	modalOverlay.classList.remove('active');
})

// Funcao para mexer no botao!!!!
function mostra(id){
	if (document.getElementById(id).style.display == 'block'){ 
		document.getElementById(id).style.display ='none';
		document.getElementById('b'+id).value = "Mostrar";
	}
	else {document.getElementById(id).style.display = 'block'
	document.getElementById('b'+id).value = "Esconder";
}

}

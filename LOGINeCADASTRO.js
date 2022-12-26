 let abaBotao = document.querySelector('#aba-botao');
 abaBotao.addEventListener('click', () => {
   abaBotao.setAttribute('id','botao');
   abaBotao2.removeAttribute('id'); 
   
   let conteudoCadastrar = document.querySelector('.form2');
   conteudoCadastrar.setAttribute('id','sumir');

   let conteudoEntrar = document.querySelector('.form1');
   conteudoEntrar.removeAttribute('id');
 })

 let abaBotao2 = document.querySelector('#aba-botao2');
 abaBotao2.addEventListener('click', () => {
   abaBotao2.setAttribute('id','botao');
   abaBotao.removeAttribute('id');

   let conteudoCadastrar = document.querySelector('.form2');
   conteudoCadastrar.removeAttribute('id');
   let conteudoEntrar = document.querySelector('.form1');
   conteudoEntrar.setAttribute('id','sumir');
 })
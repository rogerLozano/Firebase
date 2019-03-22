 var config = {
      apiKey: "AIzaSyBbnwoC6QJXta_zSjzrbYpX9b9dwU1hves",
      authDomain: "landing-publisher.firebaseapp.com",
      databaseURL: "https://landing-publisher.firebaseio.com",
      projectId: "landing-publisher",
      storageBucket: "landing-publisher.appspot.com",
      messagingSenderId: "812083925829"
   };
   firebase.initializeApp(config);

   var mensagens = []

   var database = firebase.database()
   var mensagensRef = database.ref('Dados')

   function getInput(campo){
       return document.getElementById(campo).value;
   }


   function enviarFormulario() {
    var nome = getInput('nome');
    var email = getInput('email');
    var telefone = getInput('telefone');
    var link = getInput('link');
    salvar(nome, email, telefone, link);
    location.reload();

}
   function salvar(nome, email, telefone, link) {
      var novaMensagem = mensagensRef.push();
      novaMensagem.set({
         nome: nome,
         email: email,
         telefone: telefone,
         link: link
      })
   }
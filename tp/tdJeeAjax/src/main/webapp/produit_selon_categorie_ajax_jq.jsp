<html>
<head>
    <title>produit_selon_categorie_ajax_jq</title>
    <meta charset="UTF-8">
    <script src="./lib/jquery.min.js" ></script>
    <script src="js/produit_selon_categorie_ajax_jq.js"></script> 
</head>
<body>

   <h2>produits categorie (ajax,jquery)</h2>

    categorie: <select id="selCategorie"> 
      <option value="">toutes categories</option>
      <option value="papeterie">papeterie</option>
      <option value="ordinateur">ordinateur</option>
      <option value="imprimante">imprimante</option>
      <option value="inexistante">inexistante</option>
    </select> <br/>

    <!-- NB: selon la categorie choisie ("change"), on ira chercher via ajax
        les donn�es du fichier ./data/products_papeterie.json ou autre -->
    <hr/>
    <span id="spanMessage"></span>
    <hr/>
    Produits de la cat�gorie s�lectionn�e: <br/>
    <table border="1" id="tableHtmlProd">
      <thead>
         <tr><th>code</th><th>nom</th><th>prix</th><th>description</th></tr>
       </thead>
      <tbody id="tBodyProd">
       <!-- <tr><td>1</td><td>produit1</td><td>2.45</td><td>descr</td></tr> -->
      </tbody>
    </table> 
  <br/> 
<%=new java.util.Date() %>
</body>
</html>
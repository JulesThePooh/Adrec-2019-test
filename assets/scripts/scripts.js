//recuper le nom du j1, j2 
$tour_de = document.querySelector("section.game-section div.container div.card div.card-body div.text-center span#tour-de");
$name_joueur1 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-1").value; 
$name_joueur2 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-2").value;
function recupnom(){
    $name_joueur1 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-1").value;
     return $name_joueur1; 
}
function recupnom2(){
    $name_joueur2 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-2").value;
    return $name_joueur2; 
}

// Bonton recommencer (essaye de faire une boucle...)
function restartgame(){
    tab_v_p = []; 
    var i = 0;
    do {
        i = i + 1;
        document.getElementById("span_A" + i).className = "square-text";
      } while (i < 9);
    
}
//Trouver nombre pair
function NbPair(Nb)
{
   if(Nb/2 == Math.round(Nb/2)) return true;
   else return false;
}

//Fonction changer les onclicks par une autre fonction
function changeronclick(){
    var a = document.querySelectorAll(".square"); 
    a.forEach(function(element){
        element.onclick = null; 
    });
    
}

//Animation des cases X & O et recupération des coordonées + valeur dans tab_v_p
tab_v_p = [];
function animation_croix(position, position2){
    if (document.getElementById("span_A"+position2).className === "square-text"){

    
        if (NbPair(tab_v_p.length)=== true){
            $name_joueur2 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-2").value;
            if ($name_joueur2 === ''){
                $tour_de.innerHTML = 'Joueur 2'
            }
            else if ($name_joueur2 !== ''){
                $tour_de.innerHTML = $name_joueur2;
            }
            tab_v_p.push('x' + position); 
            document.getElementById("span_A"+position2).className += " square-text-blue";
        }
        else if (NbPair(tab_v_p.length)=== false){
            $name_joueur1 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-1").value;
            
            if ($name_joueur1 === ''){
                $tour_de.innerHTML = 'Joueur 1'
            }
            else if ($name_joueur1 !== ''){
                $tour_de.innerHTML = $name_joueur1;
            }
            tab_v_p.push('o' + position);
            document.getElementById("span_A"+position2).className += " square-text-red";
        }
        if (tab_v_p.length === 9){
            alert("Match nul!")
        }
    }

    
    //Permet de gagner si les lignes sont XXX ou OOO
    var x = 1;
    var y = 2;
    var z = 3;
    while (x <= 7){
        var o = 1;
        var x_o = 'x';
        while (o <= 2){
            test_ligne_A_X = tab_v_p.find(function(element){
                return element === x_o + x;
            })
            test_ligne_A_X = test_ligne_A_X + tab_v_p.find(function(element){
                return element === x_o + y;
            })
            test_ligne_A_X = test_ligne_A_X + tab_v_p.find(function(element){
                return element === x_o + z;
            })
            if (test_ligne_A_X === x_o + x + x_o + y + x_o + z){
                $name_joueur1 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-" + o).value;
                if ($name_joueur1 === ''){
                    alert('Joueur ' + o + ' gagne!');
                    changeronclick();
                }
                else if ($name_joueur1 !== ''){
                    alert($name_joueur1 + " gagne!"); 
                    changeronclick();
                }
            }
        o++; 
        x_o = 'o'
        test_ligne_A_X = ''; 
        }
    x = x + 3;
    y = y + 3;
    z = z + 3;
    }

    //Permet de gagner si les colones sont XXX ou OOO
    var x = 1;
    var y = 4;
    var z = 7;
    while (x <= 3){
        var o = 1;
        var x_o = 'x';
        while (o <= 2){
            test_ligne_A_X = tab_v_p.find(function(element){
                return element === x_o + x;
            })
            test_ligne_A_X = test_ligne_A_X + tab_v_p.find(function(element){
                return element === x_o + y;
            })
            test_ligne_A_X = test_ligne_A_X + tab_v_p.find(function(element){
                return element === x_o + z;
            })
            if (test_ligne_A_X === x_o + x + x_o + y + x_o + z){
                $name_joueur1 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-" + o).value;
                if ($name_joueur1 === ''){
                    alert('Joueur ' + o + ' gagne!');
                    changeronclick();
                    x = 3; 
                }
                else if ($name_joueur1 !== ''){
                    alert($name_joueur1 + " gagne!"); 
                    changeronclick();
                    x = 3; 
                }
            }
        o++; 
        x_o = 'o'
        }
    x = x + 1;
    y = y + 1;
    z = z + 1;
    }

    //Permet de gagner si les diagonales sont XXX ou OOO
    var x = 1;
    var y = 5;
    var z = 9;
    while (x <= 3){
        var o = 1;
        var x_o = 'x';
        while (o <= 2){
            test_ligne_A_X = tab_v_p.find(function(element){
                return element === x_o + x;
            })
            test_ligne_A_X = test_ligne_A_X + tab_v_p.find(function(element){
                return element === x_o + y;
            })
            test_ligne_A_X = test_ligne_A_X + tab_v_p.find(function(element){
                return element === x_o + z;
            })
            if (test_ligne_A_X === x_o + x + x_o + y + x_o + z){
                $name_joueur1 = document.querySelector("section.game-section div.card div.card-body div.form-group input#player-" + o).value;
                if ($name_joueur1 === ''){
                    alert('Joueur ' + o + ' gagne!');
                    changeronclick();
                    x = 3; 
                }
                else if ($name_joueur1 !== ''){
                    alert($name_joueur1 + " gagne!"); 
                    changeronclick();
                    x = 3; 
                }
            }
        o++; 
        x_o = 'o'
        }
    x = x + 2;
    y = 5; 
    z = z - 2;
    
    }
}
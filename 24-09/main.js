var vragen = ["wat?", "waar?", "hoe?"];
		var antwoorden = ["dat", "daar", "zo"];
		var quizscore = 0;

		for (i in vragen) {

			var antwoord = prompt(vragen[i]).toLowerCase();

			if (antwoord == antwoorden[i]) {
				quizscore += 10;
				alert("uw antwoord is juist, totaal:" + quizscore);

			} else {
				quizscore -= 10;
				alert("uw antwoord is onjuist, totaal:")
			}
		}
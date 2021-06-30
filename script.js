// api url
const api_url =
	"https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2";

// Defining async function
async function getapi(url) {
	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data.transactions);

	let text =" ";
	for (let i = 0; i < data.transactions.length; i++) {
		if(data.transactions[i].direction == 1){
		text += `
		<div style = "color: white;float:right;background-color: blue;width: 400px;height :130px;border-style: solid;border-color: #FFFFFF;">
			<i>
		------------------------------<b>${(data.transactions[i].startDate).split('T')[0]}</b>------------------------------<br>
				<h1> Sent <span>&#8377;</span>${data.transactions[i].amount} &nbsp;</h1>
					<h3>&nbsp;&nbsp;Transaction id :<b>${data.transactions[i].id}</h3>
					&nbsp;&nbsp;
			<i><br>
		</div>	`
		}
		else {
			text += `
		<div style = "background-color:green;float:left;">
			<i>
		------------------------------<b>${(data.transactions[i].startDate).split('T')[0]}</b>----------------------------<br>
			<h1>Receive <span>&#8377;</span>${data.transactions[i].amount} </h1>
					<h3>&nbsp;&nbsp;Transaction id :${data.transactions[i].id}</h3>
			</i><br>
		</div>
				`
		}
	}
	document.getElementById("employees").innerHTML = text;


	if (response) {
		hideloader();
	}
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {
	`${data.length()}`
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}


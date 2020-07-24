
function openModal(modal,projectBody,projectTitle,projectLink) {
  if (modal == null) return

  const title = document.getElementById('title')
  const body = document.getElementById('modal-body')
  const link = document.getElementById('project-link')
  
  title.innerHTML=projectTitle
  body.innerHTML=projectBody
  link.href=projectLink
  
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return

  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function getData(a){
	//console.log(a);
	const modal = document.getElementById('modal')

	const match={
			1:"articleClassifier",
			2:"cellularAutomata",
			3:"blogSystem",
			4:"apzaad",
			5:"coder",
			6:"vizible",
			7:"bank",
			8:"diabetesPredictor"
	};

	const title = {"diabetesPredictor":"Diabetes Predictor",
					"articleClassifier":"Article Classifier",
					"cellularAutomata":"Cellular Automata using CUDA",
					"blogSystem":"Blog System",
					"apzaad":"Accident Prone Zone Alert and Accident Detection System",
					"coder":"Talk to Mr.Coder",
					"vizible":"Vizible",
					"bank":"Bank System using C++"};
	const body = { "diabetesPredictor":"A simple machine learning application implemented End to End. Deployment is done using Heroku , the application is live and the link is in given below. Go on check if you have diabetes or not.",
					"articleClassifier":"Article Classification using wordnet and n-grams.",
					"cellularAutomata":"Based on Game theory proposed by John Horton Conway.I have tried to implement it using CUDA.",
					"blogSystem":"A fully functional PHP based blog system where user can create, edit, view, delete and like posts/blogs.",
					"apzaad":"It is an embedded systems project currently on which I am working on as my final year project. It has Data mining and IoT as its main technological domains.It predicts accident prone zones based on past accident data records and alerts the user if he/she is near to any prone zone.Incase of an accident occured it automatically send a notification about it to emergency services like Ambulance,Police etc.",
					"coder":"It is a google assistant app which is a trivia game which asks questions related to computer programming and other Computer science concepts.",
					"vizible":"An open data initiative for municipal authorities to visualize and account their spent funds.It Also makes everything transparent from system's end.",
					"bank":"A C++ program for a fully functioning bank management system which includes file handling as well."};
	
	const projectLink = {
					"diabetesPredictor":"https://diabetes-prediction-using-ml.herokuapp.com/",
					"articleClassifier":"https://github.com/rajr11/Article-Classifier",
					"cellularAutomata":"https://github.com/rajr11/Implementation-of-Cellular-Automata-using-CUDA-",
					"blogSystem":"https://github.com/rajr11/blog-system",
					"apzaad":"",
					"coder":"https://assistant.google.com/services/a/uid/0000004690b3d155",
					"vizible":"https://github.com/malgamves/Vizible",
					"bank":""};

	openModal(modal,body[match[a]],title[match[a]],projectLink[match[a]])

	const overlay = document.getElementById('overlay')
	const closeButton = document.getElementById('close-button')

	closeButton.addEventListener('click',()=>{
		const modals = document.querySelector('.modal.active')
		closeModal(modal)	
	})

	overlay.addEventListener('click', () => {
	const modals = document.querySelector('.modal.active')
	closeModal(modal)
	})



}
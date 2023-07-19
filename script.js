

function updateCounter() {
    let currentDate = new Date();
    let targetDate = new Date('May 1, 2023 00:00:00');
    let difference = Math.floor((currentDate - targetDate)/1000);
    document.getElementById('counter').textContent = 'Ich lerne seit ' + difference + ' Sekunden coden';
    
}

setInterval(updateCounter, 1000);




let firstPicture = document.getElementById('pictureOne');
let firstPoint = document.getElementById('one');
firstPoint.addEventListener('click', function() {
  if (firstPicture.style.visibility === 'visible') {
    firstPicture.style.visibility = '';
    firstPicture.style.maxHeight = '';
  } else {
    firstPicture.style.visibility = 'visible';
    firstPicture.style.maxHeight = '800px';
  }
});

let secondPicture = document.getElementById('pictureTwo');
let secondPoint = document.getElementById('two');
secondPoint.addEventListener('click', function() {
  if (secondPicture.style.visibility === 'visible') {
    secondPicture.style.visibility = '';
    secondPicture.style.maxHeight = '';
  } else {
    secondPicture.style.visibility = 'visible';
    secondPicture.style.maxHeight = '800px';
  }
});

let thirdPicture = document.getElementById('pictureThree');
let thirdPoint = document.getElementById('three');
thirdPoint.addEventListener('click', function() {
  if (thirdPicture.style.visibility === 'visible') {
    thirdPicture.style.visibility = '';
    thirdPicture.style.maxHeight = '';
  } else {
    thirdPicture.style.visibility = 'visible';
    thirdPicture.style.maxHeight = '800px';
  }
});

let menueButton = document.getElementById('menue-btn');
let dropDown = document.getElementById('dropdown');

menueButton.addEventListener('mouseenter', function() {
    dropDown.style.visibility = 'visible';
    
} );
dropDown.addEventListener('mouseleave', function() {
  dropDown.style.visibility = 'hidden';
})




const checkbox = document.getElementById('changeBackground');

checkbox.addEventListener('change', function() {
  const body = document.body;

  if (checkbox.checked) {
    body.style.backgroundColor = 'black';
  } else {
    body.style.backgroundColor = 'white';
  }
})

const slider = document.getElementById('darkmode');

slider.addEventListener('change', function() {
  const body = document.body;

  if (slider.checked) {
    body.style.backgroundColor = 'black';
  } else {
    body.style.backgroundColor = 'white';
  }
})


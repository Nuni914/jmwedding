var app = {
  settings: {
    container: $('.calendar'),
    calendar: $('.front'),
    days: $('.weeks span'),
    form: $('.back'),
    input: $('.back input'),
    buttons: $('.back button')
  },

  init: function() {
    instance = this;
    settings = this.settings;
    this.bindUIActions();
  },

  swap: function(currentSide, desiredSide) {
    settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

  },

  bindUIActions: function() {
    settings.days.on('click', function(){
      instance.swap(settings.calendar, settings.form);
      settings.input.focus();
    });

    settings.buttons.on('click', function(){
      instance.swap(settings.form, settings.calendar);
    });
  }
}



app.init();

const calendar = document.querySelector('.calendar');

calendar.addEventListener('click', (e) => {
  // Check if a date was clicked (spans usually contain the numbers)
  const isDate = e.target.tagName === 'SPAN' || e.target.closest('.day');
  
  if (isDate) {
    calendar.classList.toggle('is-flipped');
  }
});

const calendar = document.querySelector('.calendar');
const days = document.querySelectorAll('.weeks span');
const dismissBtn = document.querySelector('.dismiss');

// Flip to back when a day is clicked
days.forEach(day => {
  day.addEventListener('click', () => {
    calendar.classList.add('flipped');
  });
});

// Flip back to front when dismiss is clicked
dismissBtn.addEventListener('click', () => {
  calendar.classList.remove('flipped');
});

document.querySelector('.weeks').addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    console.log('Date clicked:', e.target.innerText);
    // Your logic here
  }
});
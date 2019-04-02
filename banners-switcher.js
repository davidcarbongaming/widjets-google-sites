<script>
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDay();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
document.addEventListener('DOMContentLoaded', function() {
  var sunday = document.getElementById('sunday');
  var monday = document.getElementById("monday");
  var tuesday = document.getElementById('tuesday');
  var wednesday = document.getElementById("wednesday");
  var thursday = document.getElementById('thursday');
  var friday = document.getElementById("friday");
  var saturday = document.getElementById('saturday');

  var open = document.getElementById("open");
  var closed = document.getElementById("closed");

  function openClose() {
    //reset display each time this function runs
    [monday, tuesday, wednesday, thursday, friday, saturday, sunday, open, closed].forEach(function(element) {
      element.classList.remove('hidden');
    });
    if (currentDay >= 1 && currentDay <= 4) {
      friday.classList.add('hidden');
      if (currentHour >= 8 && currentHour <= 21) {
        closed.classList.add('hidden');
      } else {
        open.classList.add('hidden');
      }
    }
    if (currentDay === 5) {
      monThurs.classList.add('hidden');
      if (currentHour >= 8 && currentHour <= 17.5) {
        closed.classList.add('hidden');
      } else {
        open.classList.add('hidden');
      }
    }
    if (currentDay === 0 || currentDay === 6) {
      open.classList.add('hidden');
      friday.classList.add('hidden');
    }
  };

  setInterval(openClose, 5000);
  openClose();
});
</script>

<style>
.layout-header .header-one #open,
.layout-header .header-one #closed,
.layout-header .header-one #sunday,
.layout-header .header-one #monday, 
.layout-header .header-one #tuesday,
.layout-header .header-one #wednesday,
.layout-header .header-one #thursday,
.layout-header .header-one #friday,
.layout-header .header-one #saturday {
  display: inline-block;
  color: #000;
}

.hidden {
  display: none;
}
</style>
<!---	HTML	-->
<div id="open-display">
  <div id="open">Open</div>
  <div id="closed">Closed</div>
  <!--- WEEK DAYS --->
  <div id="monday">Monday Banners</div>
  <div id="tuesday">Tuesday Banners</div>
  <div id="wednesday">Wednesday Banners</div>
  <div id="thursday">Thursday Banners</div>
  <div id="friday">Friday Banners</div>
  <div id="saturday">Saturday Banners</div>
  <div id="sunday">Sunday Banners</div>

</div>

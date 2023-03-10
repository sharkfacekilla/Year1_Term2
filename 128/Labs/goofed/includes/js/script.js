


class Hotel {
	//class constructor
    constructor(name, city, rooms, numRooms, maxRooms, gym, restaurants, shuttle, swimmingPool) {
        this.name = name;
        this.city = city;
        this.rooms = rooms;
        this.numRooms = numRooms;
		this.maxRooms = maxRooms;
        this.gym = gym;
        this.restaurants = restaurants;
        this.shuttle = shuttle;
        this.swimmingPool = swimmingPool;
    }
	//setters
    set hotelName(name) {
        this.name = name;
    }
    set cityName(city) {
        this.city = city;
    }
	set roomType(rooms) {
		this.rooms = rooms;
	}
	set roomAmt(numRooms) {
		this.numRooms = numRooms;
	}
	set totalRooms(maxRooms) {
		this.maxRooms = maxRooms;
	}
    set hasGym(gym) {
    	this.gym = gym;
    }
	set restaurantTypes(restaurants) {
		this.restaurants = restaurants;
	}
	set hasShuttle(shuttle) {
		this.shuttle = shuttle;
	}
	set hasPool(swimmingPool) {
		this.swimmingPool = swimmingPool;
	}
	//getters
    get hotelName() {
        return this.name;
    }
    get cityName() {
        return this.city;
    }
	get roomType(){
		return this.rooms;
	}
    get roomAmt() {
        return this.numRooms;
    }
    get totalRooms() {
        return this.maxRooms;
    }
    get hasGym() {
        return this.gym;
    }
	get restaurantTypes() {
		return this.restaurants;
	}
	get hasShuttle() {
		return this.shuttle;
	}
	get hasPool() {
		return this.swimmingPool;
	}
}

class Resort extends Hotel {
	
}
//some variables



//let poloniaHotel = new Resort(`Hotel Polonia`,`Warsaw`, poloniaRooms, 6, 9, )
const savoyRooms = ["Single", " Double", " Suite"];
const restaurants1 = [["Donde La Arepa", "Colombian"], 
                    ["Casa Ramen", "Japanese"], 
                    ["Pizza Hermosa", "Italian"]]; 
let savoyHotel = new Hotel(`Savoy Hotel`, `London`, savoyRooms, 25, 100, true, restaurants1, true, true);


let savoyModalText = `
  <div class="modal fade" id="savoyModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title display-4">${savoyHotel.hotelName}</h1>
          <button id="savoyModalClose" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <a href="#" class="text-lead" style="text-decoration:none; color:white;">Hotel Info</a>
        <p class="text-lead mt-2">The <span class="fw-bold">${savoyHotel.hotelName}</span> is located in ${savoyHotel.cityName}.</p>
        <p class="text-lead mt-4">The Available types of rooms are: ${savoyHotel.roomType}.</p>
        <hr>
        <h1 class="display-6">Services</h1>
        <span class="fw-bold">Shuttle Service - </span><span> ${savoyHotel.hasShuttle}</span><br>
        <span class="fw-bold mt-2">Gym - </span><span> ${savoyHotel.hasPool}</span><br>
		<p class="fw-bold mt-2">Hotel has 3 restaurants each with a different theme:</p>
		`;

		for (let [key, value] of restaurants1) {
			savoyModalText += `<span class="fw-bold">${key}</span><span> / Type / </span><span class="fw-bold">${value}</span><br>`
		}

		savoyModalText += `
		<span id="savoyRoomsAvailable" style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span><br>
		<span id="fullyBookedSavoy"></span>
        </div>
        <div class="modal-footer">
          <button type="button" id="savoyBookBtn" class="btn btn-primary">Book Room</button>
          <button type="button" id="savoyCancelBtn" class="btn btn-danger">Cancel Room</button>
        </div>
      </div>
    </div>
  </div>
`;


const savoyBtn = document.getElementById(`savoyBtn`);
const modal1 = document.getElementById(`savoyModal`);
const savoyBookBtn = document.getElementById(`savoyBookBtn`);
const savoyCancelBtn = document.getElementById(`savoyCancelBtn`);
const savoyCloseBtn = document.getElementById(`savoyModalClose`);




savoyBtn.addEventListener(`click`, function(e) {
	document.getElementById(`savoyDisplay`).innerHTML = savoyModalText;
	e.preventDefault();
	const savoyModalBS = new bootstrap.Modal(modal1);
	savoyModalBS._element.addEventListener(`shown.bs.modal`, function() {
	  const savoyBookBtn = document.getElementById('savoyBookBtn');
	  const savoyCancelBtn = document.getElementById('savoyCancelBtn');
	  savoyBookBtn.addEventListener('click', bookBtn);
	  savoyCancelBtn.addEventListener('click', cancelBtn);
	  savoyModalBS.show();
	});
  });

function bookBtn() {
	if (savoyHotel.roomAmt < savoyHotel.totalRooms) {
		savoyHotel.roomAmt++;
		document.getElementById(`savoyRoomsAvailable`).innerHTML = `<span style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span>`;
		if (savoyHotel.roomAmt === savoyHotel.totalRooms) {
		  document.getElementById(`fullyBookedSavoy`).innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
		}
	  } else {
		document.getElementById(`fullyBookedSavoy`).innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
	  }
}

function cancelBtn() {
	if (savoyHotel.roomAmt === savoyHotel.totalRooms){
		document.getElementById(`fullyBookedSavoy`).innerHTML = "";
	  }
	  if (savoyHotel.roomAmt === 0) {
		document.getElementById(`savoyRoomsAvailable`).innerHTML = `<span style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span>`;
	  }
	  else {
		savoyHotel.roomAmt--;
		document.getElementById(`savoyRoomsAvailable`).innerHTML = `<span style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span>`;
	  }
}
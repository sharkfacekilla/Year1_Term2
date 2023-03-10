//hotel class
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

//resort class
class Resort extends Hotel {
	constructor(name, city, rooms, numRooms, maxRooms, gym, restaurants, shuttle, swimmingPool, resortType, beachFront, kidsClub, bar) {
		super(name, city, rooms, numRooms, maxRooms, gym, restaurants, shuttle, swimmingPool);
		this.resortType = resortType;
		this.beachFront = beachFront;
		this.kidsClub = kidsClub;
		this.bar = bar;
	}
	//setters
	set resort(resortType) {
		this.resortType = resortType;
	}
	set isBeach(beachFront) {
		this.beachFront = beachFront;
	}
	set hasKidsClub(kidsClub) {
		this.kidsClub = kidsClub;
	}
	set hasBar(bar) {
		this.bar = bar;
	}
	//getters
	get resort() {
		return this.resortType;
	}
	get isBeach() {
		return this.beachFront;
	}
	get hasKidsClub() {
		return this.kidsClub;
	}
	get hasBar() {
		return this.bar;
	}
}
//some variables
let hotelName = document.getElementById(`hotelName`);
let hotelDescName = document.getElementById(`hotelDescName`);
let hotelCity = document.getElementById(`hotelCity`);
let hotelRooms = document.getElementById(`hotelRooms`);
let gymService = document.getElementById(`gymService`);
let shuttleService = document.getElementById(`shuttleService`);
let restaurant = document.getElementById(`restaurant`);
let hotelRestaurants = document.getElementById(`hotelRestaurants`);
let hotelRoomsAvailable = document.getElementById(`hotelRoomsAvailable`);
let fullyBooked = document.getElementById(`fullyBooked`);
let isBeachFront = document.getElementById(`beachFront`);
let barService = document.getElementById(`barService`);
let newBar = document.getElementById(`barConstruction`);
let barConstruction = true;
const savoyRooms = ["Single", " Double", " Suite"];
const savoyRestaurants = 	[["Donde La Arepa", "Colombian"], 
                    		["Casa Ramen", "Japanese"], 
                    		["Pizza Hermosa", "Italian"]]; 
const poloniaRooms = ["King", " Suite", " Penthouse"];
const poloniaRestaurants = 	[["Bistro 94", "French"],
							["Casa Bonita", "Mexican"],
							["Pizza Si", "Italian"]];
const modal1 = document.getElementById(`hotelModal`);
const hotelModalBS = new bootstrap.Modal(modal1);
const savoyBtn = document.getElementById(`savoyBtn`);
const poloniaBtn = document.getElementById(`poloniaBtn`);
const hotelBookBtn = document.getElementById(`hotelBookBtn`);
const hotelCancelBtn = document.getElementById(`hotelCancelBtn`);
const hotelModalClose = document.getElementById(`hotelModalClose`);
//class instances
let savoyHotel = new Hotel(`Savoy Hotel`, `London`, savoyRooms, 4, 20, true, savoyRestaurants, true, true);
let poloniaHotel = new Resort(`Hotel Polonia`, `Warsaw`, poloniaRooms, 6, 9, true, poloniaRestaurants, true, true, `Resort`, false, true, false);

const hotelModalBody = document.querySelector('.modal-body');
const hotelModalContent = document.querySelector('.modal-content');

// Listen for the hide.bs.modal event
modal1.addEventListener('hide.bs.modal', function (event) {
  // Check if the event was triggered by clicking outside of the modal
  if (event.target === modal1) {
    //remove button event listeners on close (basically the same as the cancel button function)
    hotelBookBtn.removeEventListener('click', poloniaBookBtn);
    hotelCancelBtn.removeEventListener('click', poloniaCancelBtn);
    hotelBookBtn.removeEventListener('click', savoyBookBtn);
    hotelCancelBtn.removeEventListener('click', savoyCancelBtn);
    hotelName.innerHTML = ''; //clears modal content on close
    hotelDescName.innerHTML = '';
    hotelCity.innerHTML = '';
    hotelRooms.innerHTML = '';
    gymService.innerHTML = '';
    shuttleService.innerHTML = '';
    restaurant.innerHTML = '';
    hotelRestaurants.innerHTML = '';
    hotelRoomsAvailable.innerHTML = '';
    fullyBooked.innerHTML = '';
    isBeachFront.innerHTML = '';
    barService.innerHTML = '';
    newBar.innerHTML = '';
    hotelModalBS.hide();
  }
});

//close modal
hotelModalClose.addEventListener(`click`, function () {
	//remove button event listeners on close
	hotelBookBtn.removeEventListener(`click`, poloniaBookBtn);
	hotelCancelBtn.removeEventListener(`click`, poloniaCancelBtn);
	hotelBookBtn.removeEventListener(`click`, savoyBookBtn);
	hotelCancelBtn.removeEventListener(`click`, savoyCancelBtn);
	hotelName.innerHTML = ``; //clears modal content on close
	hotelDescName.innerHTML = ``;
	hotelCity.innerHTML = ``;
	hotelRooms.innerHTML = ``;
	gymService.innerHTML = ``;
	shuttleService.innerHTML = ``;
	restaurant.innerHTML = ``;
	hotelRestaurants.innerHTML = ``;
	hotelRoomsAvailable.innerHTML = ``;
	fullyBooked.innerHTML = ``;
	isBeachFront.innerHTML = ``;
	barService.innerHTML = ``;
	newBar.innerHTML = ``;
	hotelModalBS.hide();
});

//event handlers for cards
savoyBtn.addEventListener('click', showSavoyModal);
poloniaBtn.addEventListener(`click`, showPoloniaModal);

//hotel polonia modal
function showPoloniaModal() {
	hotelModalBS.show();
	hotelBookBtn.addEventListener(`click`, poloniaBookBtn);
	hotelCancelBtn.addEventListener(`click`, poloniaCancelBtn);
	hotelName.innerHTML = poloniaHotel.hotelName;
	hotelDescName.innerHTML = poloniaHotel.hotelName;
	hotelCity.innerHTML = poloniaHotel.cityName;
	hotelRooms.innerHTML = poloniaHotel.roomType;
	isBeachFront.innerHTML = `<span class="fw-bold">Beachfront - </span>${poloniaHotel.isBeach}<br>`;
	barService.innerHTML = `<span class="fw-bold">Bar - </span>${poloniaHotel.hasBar}<br><br>`;
	newBar.innerHTML = `<span class="fw-bold">NEWS! </span><span>There is a </span><span class="fw-bold">New Bar</span><span> being built!<br><br>
	<span class="fw-bold">Bar service</span> - ${barConstruction}<br><br>`;
	restaurant.innerHTML = `Hotel has 3 restaurants each with a different theme:`;
	
	for (let [key, value] of poloniaHotel.restaurantTypes) {
		hotelRestaurants.innerHTML += `<span class="fw-bold">${key}</span> / Type / <span class="fw-bold">${value}<br>`;
	}

	hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${poloniaHotel.roomAmt}/${poloniaHotel.totalRooms} rooms booked.</span><br>`;

	if (poloniaHotel.roomAmt === poloniaHotel.totalRooms) {
		fullyBooked.innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
	}
}

//savoy hotel modal
function showSavoyModal() {
	hotelModalBS.show();
	hotelBookBtn.addEventListener(`click`, savoyBookBtn);
	hotelCancelBtn.addEventListener(`click`, savoyCancelBtn);
	hotelName.innerHTML = savoyHotel.hotelName;
	hotelDescName.innerHTML = savoyHotel.hotelName;
	hotelCity.innerHTML = savoyHotel.cityName;
	hotelRooms.innerHTML = savoyHotel.roomType;
	gymService.innerHTML = `<span class="fw-bold">Gym Service</span> - ${savoyHotel.hasGym}<br>`;
	shuttleService.innerHTML = `<span class="fw-bold">Shuttle Service</span> - ${savoyHotel.hasShuttle}<br>`;
	restaurant.innerHTML = `Hotel has 3 restaurants each with a different theme:`;

	for (let [key, value] of savoyHotel.restaurantTypes) {
		hotelRestaurants.innerHTML += `<span class="fw-bold">${key}</span> / Type / <span class="fw-bold">${value}<br>`;
	}
  
	hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span><br>`;

	if (savoyHotel.roomAmt === savoyHotel.totalRooms) {
		fullyBooked.innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
	}
}

//functions for booking/cancelling rooms for both hotels
function savoyBookBtn() {
	if (savoyHotel.roomAmt < savoyHotel.totalRooms) {
		savoyHotel.roomAmt++;
		fullyBooked.innerHTML= ``;
		hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span><br>`;
		if (savoyHotel.roomAmt === savoyHotel.totalRooms) {
			fullyBooked.innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
		}
	} 
	else {
		fullyBooked.innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
	}
}

function savoyCancelBtn() {
	if (savoyHotel.roomAmt === savoyHotel.totalRooms){
		fullyBooked.innerHTML = "";
	}
	if (savoyHotel.roomAmt === 0) {
		hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span><br>`;
	}
	else {
		savoyHotel.roomAmt--;
		hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${savoyHotel.roomAmt}/${savoyHotel.totalRooms} rooms booked.</span><br>`;
	}
}


function poloniaBookBtn() {
	console.log(poloniaHotel.roomAmt);
	if (poloniaHotel.roomAmt < poloniaHotel.totalRooms) {
		poloniaHotel.roomAmt++;
		hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${poloniaHotel.roomAmt}/${poloniaHotel.totalRooms} rooms booked.</span><br>`;
		if (poloniaHotel.roomAmt === poloniaHotel.totalRooms) {
			fullyBooked.innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
		}
	} 
	else {
		fullyBooked.innerHTML = `<span style="color: red;">Hotel is fully booked!</span>`;
	}
}

function poloniaCancelBtn() {
	if (poloniaHotel.roomAmt === poloniaHotel.totalRooms){
		fullyBooked.innerHTML = "";
	}
	if (poloniaHotel.roomAmt === 0) {
		hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${poloniaHotel.roomAmt}/${poloniaHotel.totalRooms} rooms booked.</span><br>`;
	}
	else {
		poloniaHotel.roomAmt--;
		hotelRoomsAvailable.innerHTML = `<br><span style="color: green;">Hotel has ${poloniaHotel.roomAmt}/${poloniaHotel.totalRooms} rooms booked.</span><br>`;
	}
}
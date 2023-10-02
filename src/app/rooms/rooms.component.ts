import { Component } from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRoomsAvailable = 10;
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'AC , Free WIFI, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://www.pexels.com/photo/beige-concrete-building-70441/',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('12-nov-2023'),
    },
    {
      roomNumber: 2,
      roomType: 'Delux Room',
      amenities: 'AC , Free WIFI, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://www.pexels.com/photo/beige-concrete-building-70441/',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('13-nov-2023'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities:
        'AC , Free WIFI, TV, Bathroom, Kitchen and some additonal features',
      price: 15000,
      photos: 'https://www.pexels.com/photo/beige-concrete-building-70441/',
      checkInTime: new Date('14-nov-2023'),
      checkOutTime: new Date('18-nov-2023'),
    },
  ];
}

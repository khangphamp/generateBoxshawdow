import { v4 as uuidv4 } from 'uuid';

export const templates = {
  custom1: [
    {
      id: uuidv4(),
      shiftRight: -1,
      shiftDown: 0,
      spread: 0,
      blur: 4,
      opacity: 100,
      inset: false,
      color:  { r: 255, g: 255, b: 255 }
    },
    {
      id: uuidv4(),
      shiftRight: -2,
      shiftDown: 0,
      spread: 0,
      blur: 10,
      opacity: 100,
      inset: false,
      color:  { r: 255, g: 255, b: 0 }
    },
    {
      id: uuidv4(),
      shiftRight: -10,
      shiftDown: 0,
      spread: 0,
      blur: 20,
      opacity: 100,
      inset: false,
      color:  { r: 255, g: 128, b: 0 }
    },
    {
      id: uuidv4(),
      shiftRight: -18,
      shiftDown: 0,
      spread: 0,
      blur: 40,
      opacity: 100,
      inset: false,
      color:  { r: 255, g: 0, b: 0 }
    }
  ],
  custom2: [
      {
        id: uuidv4(),
        shiftRight: 5,
        shiftDown: 5,
        spread: 0,
        blur: 0,
        opacity: 100,
        inset: false,
        color:  { r: 40, g: 159, b: 237 }
      },
      {
        id: uuidv4(),
        shiftRight: 10,
        shiftDown: 10,
        spread: 0,
        blur: 0,
        opacity: 100,
        inset: false,
        color:  { r: 95, g: 184, b: 255 }
      },
      {
        id: uuidv4(),
        shiftRight: 15,
        shiftDown: 15,
        spread: 0,
        blur: 0,
        opacity: 100,
        inset: false,
        color:  { r: 161, g: 216, b: 255 }
      },
      {
        id: uuidv4(),
        shiftRight: 20,
        shiftDown: 20,
        spread: 0,
        blur: 0,
        opacity: 100,
        inset: false,
        color:  { r: 202, g: 230, b: 255 }
      },
      {
        id: uuidv4(),
        shiftRight: 25,
        shiftDown: 25,
        spread: 0,
        blur: 0,
        opacity: 100,
        inset: false,
        color:  { r: 225, g: 238, b: 255 }
      }
  ]

}
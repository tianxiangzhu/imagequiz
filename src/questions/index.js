import daffodil from '../image/daffodil.png';
import cherryblossom from '../image/cherryblossom.png';
import daisy from '../image/daisy.png';
import lily from '../image/lily.png';
import rose from '../image/rose.png';
import sunflower from '../image/sunflower.png';
import tulip from '../image/tulip.png';
import waterlily from '../image/waterlily.png';
import bear from '../image/bear.jpg';
import butter from '../image/butter.jpg';
import cat from '../image/cat.jpg';
import croissant from '../image/croissant.jpg';
import elephant from '../image/elephant.jpg';
import fruit from '../image/fruit.jpg';
import lion from '../image/lion.jpg';
import milkshake from '../image/milkshake.jpg';
import pie from '../image/pie.jpg';
import rat from '../image/rat.jpg';

const qBox = [ 
    { 
      question: 
      daffodil, 
      answers: ["daffodil", "cherryblossom", "sunflower", "waterlily"], 
      correct: "daffodil", 
      questionId: "1"
    }, 
    { 
      question: 
      cherryblossom, 
      answers: ["daisy", "sunflower", "lily", "cherryblossom"], 
      correct: "cherryblossom", 
      questionId: "2"
    }, 
    { 
      question: 
      daisy, 
      answers: ["waterlily", "cherryblossom", "daisy", "rose"], 
      correct: "daisy", 
      questionId: "3"
    }, 
    { 
      question: 
      lily, 
      answers: ["rose", "lily", "rose", "waterlily"], 
      correct: "lily", 
      questionId: "4"
    }, 
    { 
      question: 
      rose, 
      answers: ["tulip", "sunflower", "waterlily", "rose"], 
      correct: "rose", 
      questionId: "5"
    }, 
    { 
      question: 
      sunflower, 
      answers: ["sunflower", "tulip", "rose", "daisy"], 
      correct: "sunflower", 
      questionId: "6"
    }, 
    { 
      question: 
      tulip, 
      answers: ["daisy", "waterlily", "lily", "tulip"], 
      correct: "tulip", 
      questionId: "7"
    }, 
    { 
      question: 
      waterlily, 
      answers: ["daffodil", "waterlily", "tulip", "cherryblossom"], 
      correct: "waterlily", 
      questionId: "8"
    }, 
    { 
      question: 
      bear, 
      answers: ["bear", "rat", "lion", "elephant"], 
      correct: "bear", 
      questionId: "9"
    }, 
    { 
      question: 
      butter, 
      answers: ["croissant", "butter", "milkshake", "fruit"], 
      correct: "butter", 
      questionId: "10"
    }, 
    { 
      question: 
      cat, 
      answers: ["rat", "lion", "cat", "bear"], 
      correct: "cat", 
      questionId: "11"
    }, 
    { 
      question: 
      croissant, 
      answers: ["bread", "butter", "milkshake", "croissant"], 
      correct: "croissant", 
      questionId: "12"
    }, 
    { 
      question: 
      elephant, 
      answers: ["elephant", "cat", "rat", "bear"], 
      correct: "elephant", 
      questionId: "13"
    }, 
    { 
      question: 
      fruit, 
      answers: ["nut", "fruit", "wheat", "rice"], 
      correct: "fruit", 
      questionId: "14"
    }, 
    { 
      question: 
      lion, 
      answers: ["pardus", "cat", "lion", "tiger"], 
      correct: "lion", 
      questionId: "15"
    }, 
    { 
      question: 
      milkshake, 
      answers: ["egg", "soup", "milk", "milkshake"], 
      correct: "milkshake", 
      questionId: "16"
    }, 
    { 
      question: 
      pie, 
      answers: ["pie", "cake", "mooncake", "ice cream"], 
      correct: "pie", 
      questionId: "17"
    }, 
    { 
      question: 
      rat, 
      answers: ["cat", "rat", "lion", "tiger"], 
      correct: "rat", 
      questionId: "18"
    }
    
  ]; 
    
  export default (n = 6) => 
    Promise.resolve(qBox.sort(() => 0.5 - Math.random()).slice(0, n)); 
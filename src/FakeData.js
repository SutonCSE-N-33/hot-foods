import lunch1 from './imgs/lunch/lunch1.png';
import lunch2 from './imgs/lunch/lunch2.png';
import lunch3 from './imgs/lunch/lunch3.png';
import lunch4 from './imgs/lunch/lunch4.png';
import lunch5 from './imgs/lunch/lunch5.png';
import lunch6 from './imgs/lunch/lunch6.png';
import breakfast1 from './imgs/Breakfast/breakfast1.png';
import breakfast2 from './imgs/Breakfast/breakfast2.png';
import breakfast3 from './imgs/Breakfast/breakfast3.png';
import breakfast4 from './imgs/Breakfast/breakfast4.png';
import breakfast5 from './imgs/Breakfast/breakfast5.png';
import breakfast6 from './imgs/Breakfast/breakfast6.png';
import dinner1 from './imgs/Dinner/dinner1.png';
import dinner2 from './imgs/Dinner/dinner2.png';
import dinner3 from './imgs/Dinner/dinner3.png';
import dinner4 from './imgs/Dinner/dinner4.png';
import dinner5 from './imgs/Dinner/dinner5.png';
import dinner6 from './imgs/Dinner/dinner6.png';
const FakeData = [
    {
        id:1,
        key:"lunch1",
        foodName:"Healthy Meal Plan",
        outLine:"How We Dream about our Future",
        price:23.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"lunch",
        img:lunch1,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {

        id:2,
        key:"lunch2",
        foodName:"Fried Chicken Bento",
        outLine:"How We Dream about our Future",
        price:9.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"lunch",
        img:lunch2,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:3,
        key:"lunch3",
        foodName:"Tarragon-Rubbed-Salmon",
        outLine:"How We Dream about our Future",
        price:6.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"lunch",
        img:lunch3,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:4,
        key:"lunch4",
        foodName:"Indian-lunch",
        outLine:"How We Dream about our Future",
        price:8.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"lunch",
        img:lunch4,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:5,
        key:"lunch5",
        foodName:"Beef Steak",
        outLine:"How We Dream about our Future",
        price:15.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"lunch",
        img:lunch5,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:6,
        key:"lunch6",
        foodName:"Honey-Soy_Glazed Salmon with Pepper",
        outLine:"How We Dream about our Future",
        price:7.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"lunch",
        img:lunch6,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:7,
        key:"dinner1",
        foodName:"Salmon with Grapefruit and lentil Salad",
        outLine:"How We Dream about our Future",
        price:9.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"Dinner",
        img:dinner1,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:8,
        key:"dinner2",
        foodName:"Lemon Salmon Piccata",
        outLine:"How We Dream about our Future",
        price:10.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"Dinner",
        img:dinner2,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:9,
        key:"dinner3",
        foodName:"Pork Tenderion With Quinoa Pilaf",
        outLine:"How We Dream about our Future",
        price:12.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"Dinner",
        img:dinner3,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:10,
        key:"dinner4",
        foodName:"French Fries with Cheese",
        outLine:"How We Dream about our Future",
        price:9.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"Dinner",
        img:dinner4,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:11,
        key:"dinner5",
        foodName:"Garlic Butter Baked Salmon",
        outLine:"How We Dream about our Future",
        price:8.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"Dinner",
        img:dinner5,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:12,
        key:"dinner6",
        foodName:"Baked Chicken",
        outLine:"How We Dream about our Future",
        price:15.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"Dinner",
        img:dinner6,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:13,
        key:"breakfast1",
        foodName:"Bagel and Cream Cheese",
        outLine:"How We Dream about our Future",
        price:6.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"BreakFast",
        img:breakfast1,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:14,
        key:"breakfast2",
        foodName:"BreakFast Sandwich",
        outLine:"How We Dream about our Future",
        price:5.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"BreakFast",
        img:breakfast2,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:15,
        key:"breakfast3",
        foodName:"Baked Chicken",
        outLine:"How We Dream about our Future",
        price:10.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"BreakFast",
        img:breakfast3,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:6,
        key:"breakfast4",
        foodName:"Toast Croissent Fried egg",
        outLine:"How We Dream about our Future",
        price:16.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"BreakFast",
        img:breakfast4,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:17,
        key:"breakfast5",
        foodName:"Eggs Benedict",
        outLine:"How We Dream about our Future",
        price:13.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"BreakFast",
        img:breakfast5,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    },
    {
        id:18,
        key:"breakfast6",
        foodName:"Full Breakfast and Fried egg Toast Brunch",
        outLine:"How We Dream about our Future",
        price:25.99,
        details:"Gay One The What walk then she.Demesne Mention promise You justice arrived way amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye",
        category:"breakfast",
        img:breakfast6,
        details:`Gay One the what walk then she.demesne mention promise you justice arrived way.
                  Amazing foods are or and increasing to in especially inquietude companions acceptance admiration.
                  outWeigh it families distance wandered ye`
    }
]
export default FakeData;
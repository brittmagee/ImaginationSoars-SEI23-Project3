import Item1 from '../../images/bfg.jpg'
import Item2 from '../../images/ccf.jpg'
import Item3 from '../../images/fmf.jpg'
import Item4 from '../../images/gs.jpg'
import Item5 from '../../images/jgp.jpg'
import Item6 from '../../images/Matilda.jpg'
import Item7 from '../../images/gpm.png'


const initState = {
    items: [
        {id:1,title:'The BFG', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:7.99,img:Item1},
        {id:2,title:'Charlie and the Chocolate Factory', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:12.99,img: Item2},
        {id:3,title:'The Fantastic Mr. fox', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:7.99,img: Item3},
        {id:4,title:'Going Solo', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:6.99,img:Item4},
        {id:5,title:'James and the Giant Peach', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:9.99,img: Item5},
        {id:6,title:'Matilda', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:7.99,img: Item6},
        {id:7,title:'The Giraffe, the Pelly and Me', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:6.99,img: Item7},
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;
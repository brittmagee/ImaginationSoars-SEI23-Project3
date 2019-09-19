import Book1 from '../../images/bfg.jpg'
import Book2 from '../../images/ccf.jpg'
import Book3 from '../../images/fmf.jpg'
import Book4 from '../../images/gs.jpg'
import Book5 from '../../images/jgp.jpg'
import Book6 from '../../images/Matilda.jpg'
import Book7 from '../../images/gpm.png'


const initState = {
    books: [
        {title:'The BFG', author:"Roald Dahl", yearPublished: 1982, price:7.99, image:Book1, quantity: 1},
        {title:'Charlie and the Chocolate Factory', author:"Roald Dahl", yearPublished: 1964, price:12.99, image:Book2, quantity: 1},
        {title:'The Fantastic Mr. fox', author:"Roald Dahl", yearPublished: 1968 ,price:7.99, image:Book3, quantity: 1},
        {title:'Going Solo', author:"Roald Dahl", yearPublished: 1986 , price:6.99, image:Book4, quantity: 1},
        {title:'James and the Giant Peach', author:"Roald Dahl", yearPublished: 1961, price:9.99, image:Book5, quantity: 1},
        {title:'Matilda', author:"Roald Dahl", yearPublished: 1988,price:7.99, image:Book6, quantity: 1},
        {title:'The Giraffe, the Pelly and Me', author:"Roald Dahl", yearPublished: 1985, price:6.99, image:Book7, quantity: 1},
    ],
    addedBooks:[],
    total: 0
}
const cartReducer= (state = initState,action) => {
    
    return state;

}
export default cartReducer;

// // import './Menudata'
// import classes from './Menu.module.css'
// // import MenuButton from './MenuButton'
// import ItemcardData from './menuItem/Itemcarddata';
// import ItemCard from './menuItem/Itemcard';
// const MenuCard = (props) => {
//   const clickHandler = () => {
//     {ItemcardData.map((section, index) => (
//       <div key={index}>
//         <h2>{section.title}</h2>
//         <ul>
//           {section.items.map((item, itemIndex) => (
//             <ItemCard 
//             key={itemIndex}
//             id = {item.id}
//             title = {item.title}
//             price = {item.price}
//             info = {item.info}
//             imgsrc = {item.imgsrc}
//             />
//           ))}
//         </ul>
//       </div>
//     ))}
    
//   }
//   return (
//     <>
//       <div className={classes['card-container']}>
//         <div className={classes['card-carousel']}>
//           <div className={classes.slider}>
//             <img className={classes['slider-image']} id={classes['slide-1']}
//               src={props.imgsrc_1} alt='err' />
//             <img className={classes['slider-image']} id={classes['slide-2']}
//               src={props.imgsrc_2} alt='err' />
//             <img className={classes['slider-image']} id={classes['slide-3']}
//               src={props.imgsrc_3} alt='err' />
//           </div>
//         </div>
//         <div className={classes.category}>
//           <button onClick={clickHandler}>{props.title}</button>
//         </div>

//       </div>
//     </>
//   );
// };
// export default MenuCard;
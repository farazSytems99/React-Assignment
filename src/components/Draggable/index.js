// import React from 'react';

// export default Draggable = (props) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemTypes.BOX,
//     item: { name },
//     end: (item, monitor) => {
//       const dropResult = monitor.getDropResult();
//       if (item && dropResult) {
//         alert(`You dropped ${item.name} into ${dropResult.name}!`);
//       }
//     },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//       handlerId: monitor.getHandlerId(),
//     }),
//   }));

//   return <>{props.children}</>;
// };

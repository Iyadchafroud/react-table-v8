// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import { useTable, usePagination } from '@tanstack/react-table';
// import { FixedSizeList } from 'react-window';

// const VirtualizedPaginationTable = ({ data, columns }:any) => {
//   const {
//     getTableProps,
//     headerGroups,
//     prepareRow,
//     page,
//     state: { pageIndex, pageSize },
//     previousPage,
//     nextPage,
//     canPreviousPage,
//     canNextPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     usePagination
//   );

//   const rowCount = page.length;

//   return (
//     <div>
//       <table {...getTableProps()} className="table">
//         <thead>
//           {headerGroups.map((headerGroup:any) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column:any) => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//       </table>
//       <FixedSizeList
//         height={400} // Adjust the height as needed
//         itemCount={rowCount}
//         itemSize={50} // Adjust the row height as needed
//         width={'100%'}
//       >
//         {({ index, style }:any) => {
//           const row = page[index];
//           prepareRow(row);
//           return (
//             <div style={style}>
//               <table className="table">
//                 <tbody>
//                   <tr {...row.getRowProps()}>
//                     {row.cells.map((cell:any) => {
//                       return (
//                         <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                       );
//                     })}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           );
//         }}
//       </FixedSizeList>
//       <div className="pagination">
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           Previous Page
//         </button>
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           Next Page
//         </button>
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
//           </strong>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default VirtualizedPaginationTable;

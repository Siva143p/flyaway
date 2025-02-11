// import React from "react";
// import parse from "html-react-parser";
// import { Check } from "lucide-react"; // Tick icon

// const SearchCard = ({ data }) => {
//   // Function to format description (replace <li> bullets with tick icon)
//   const formatDescription = (htmlString) => {
//     return parse(htmlString, {
//       replace: (domNode) => {
//         if (domNode.name === "li") {
//           return (
//             <div className="flex items-center space-x-2 text-gray-700">
//               <Check className="h-4 w-4 text-green-500" />
//               <span>{parse(domNode.children[0].data)}</span>
//             </div>
//           );
//         }
//       },
//     });
//   };

//   // Function to format terms (remove table and keep only text)
//   const formatTerms = (htmlString) => {
//     return parse(htmlString, {
//       replace: (domNode) => {
//         if (domNode.name === "td") {
//           return (
//             <p className="text-gray-600">{parse(domNode.children[0].data)}</p>
//           );
//         }
//       },
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Description Section */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-3">
//           Description
//         </h3>
//         <div className="space-y-2">{formatDescription(data.description)}</div>
//       </div>

//       {/* Terms and Conditions Section */}
//       <div>
//         <h3 className="text-xl font-semibold text-gray-800 mb-3">
//           Terms & Conditions
//         </h3>
//         <div className="space-y-2">{formatTerms(data.term)}</div>
//       </div>
//     </div>
//   );
// };

// export default SearchCard;

// // SearchCard

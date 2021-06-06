// import React from "react";
// import { Link } from "react-router-dom";
// import NavBar from "./Navbar/NavBarComponent";
// import CarouselSlider from "./CarouselSlider";
// import Footer from "../FooterComponent";
// import "../App.css";
// import "bootstrap/dist/css/bootstrap.css";


// //A component to take input from search-bar component, return results from MongoDB and dsiplays the results.
// const SearchResult = (props) => (
//   <tr>
//     <td>{props.searchResult.title}</td>
//     <td>{props.searchResult.author}</td>
//     <td>{props.searchResult.description}</td>
//     <td>{props.searchResult.category}</td>
//     <td>
//       <Link to={"/edit/" + props.searchResult._id}>Go</Link>
//     </td>
//   </tr>
// );

// //perform search with mongoDB by taking the search value submitted by the user
// export default class SearchPage extends Component {
//   //create an empty array for the table of the search results
//   constructor(props) {
//     super(props);
//     this.state = { searchResult: [], searchTerms: this.getSearchTerms};
//   }

//   //testing how to put custom title's and placeholder texts
//   getSearchTerms() {
//     return Bar.props.searchTerm;
//   }
//   //Put the result in a list
//   searchResultList() {
//     return this.state.searchResult.map(function (currentFlashcardSet, i) {
//       return <SearchResult searchResult={currentFlashcardSet} key={i} />;
//     });
//   }

//   //return flashcard sets after user input the title of the set they want to search for, and it will return flashcard sets with same name
//   componentDidMount() {
//     console.log(JSON.stringify(this.props.location.search));
//     let value = JSON.stringify(this.props.location.search);
//     var n;
    
//     value = value.split("=").pop();

//     console.log(value)
//     value = value.substring(0, value.length - 1);
//     console.log(value)
//     if (value == "") {
//       value = "empty";
//     }
//     if (value.indexOf("%20") > -1) {
//       value = value.replace("%20", " ");
//     }
//     console.log("value = " + value);

//     //let value = this.props.location.search
//     //console.log(`flashcardSet_Title` + value)
//     axios
//       .get("http://localhost:4000/search/" + value)
//       .then((response) => {
//         console.log(response.data);
//         this.setState({ searchResult: response.data });
//         console.log("Search Result " + this.searchResult);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div className="page-container">
//         <h1 className="page-title">Search Results for "{this.state.searchTerms}"</h1>
//         <NavBar id="results-bar"></NavBar>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author</th>
//               <th>Description</th>
//               <th>Category</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>{this.searchResultList()}</tbody>
//         </table>
//       </div>
//     );
//   }
// }
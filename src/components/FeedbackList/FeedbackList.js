// import React, { Component } from 'react';

// import { ButtonGrupp, Button } from './FeedbackList.styled';
// import { Statistics } from '../Statistics/Statistics';

// export class FeedbackList extends Component {
//   render() {
//     return (
//       <>
//         <h2>Please leave feedback</h2>
//         <ButtonGrupp>
//           {Object.keys(this.state).map(option => (
//             <Button
//               type="button"
//               key={option}
//               onClick={() => this.hangleClick(option)}
//             >
//               {option}
//             </Button>
//           ))}
//         </ButtonGrupp>

//         <h2>Feedback statistics</h2>
//         <Statistics
//           good={this.props.good}
//           neutral={this.props.neutral}
//           bad={this.props.bad}
//           total={this.props.total}
//           positivePercentage={this.props.positivePercentage}
//         />
//       </>
//     );
//   }
// }

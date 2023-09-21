// import React, { useState } from 'react';
// import { Typography } from '@mui/material';

// function ReadMoreTypography({ text, limit, color }) {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = (e) => {
//     e.preventDefault();
//     setShowMore(!showMore);
//   };

//   const displayText = showMore ? text : `${text.slice(0, limit)}...`;
//   const shouldShowReadMore = text.length > limit;

//   return (
//     <Typography variant="body2" gutterBottom sx={{ color: color ? color : "#fff" }}>
//       {displayText}
//       {shouldShowReadMore && !showMore && (
//         <a href="#" onClick={toggleShowMore} style={{ color: "#2D9B2D", marginLeft: "20px", textTransform: "capitalize" }}>
//           read more
//         </a>
//       )}
//     </Typography>
//   );
// }

// export default ReadMoreTypography;


import React, { useState } from 'react';
import { Typography } from '@mui/material';

function ReadMoreTypography({ text, limit, color }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  const displayText = showMore ? text : `${text.slice(0, limit)}${text.length > limit ? '...' : ''}`;

  return (
    <Typography variant="body2" gutterBottom sx={{ color: color ? color : "#fff" }}>
      {displayText}
      {text.length > limit && !showMore && (
        <a href="#" onClick={toggleShowMore} style={{ color: "#2D9B2D", marginLeft: "20px", textTransform: "capitalize" }}>
          read more
        </a>
      )}
    </Typography>
  );
}

export default ReadMoreTypography;
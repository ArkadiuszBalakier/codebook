export const Rating = ({ rating }) => {
  let raitingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    raitingArray[i] = true;
  }

  return (
    <>
      {raitingArray.map((value, index) =>
        value ? (
          <i
            key={index}
            className="text-lg bi bi-star-fill text-yellow-500 mr-1"
          ></i>
        ) : (
          <i
            key={index}
            className="text-lg bi bi-star text-yellow-500 mr-1"
          ></i>
        )
      )}
    </>
  );
};

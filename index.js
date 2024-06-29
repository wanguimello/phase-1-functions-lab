const headquartersBlock = 42;
const feetPerBlock = 264;

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquartersBlock);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(start - destination);
  return blocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; 

  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 

  } else if (distance > 2000 && distance <= 2500) {
    return 25; 

  } else {
    return 'cannot travel that far'; 
  }
}


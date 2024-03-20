const freelancers = [
  { Name: "Alice", Occupation: "Writer", StartingPrice: "$30" },
  { Name: "Jim", Occupation: "Teacher", StartingPrice: "$80" },
  { Name: "Sam", Occupation: "Programmer", StartingPrice: "$57" }
];

function renderFreelancers() {
  const freelancersContainer = document.getElementById('freelancers');
  //freelancersContainer.innerHTML = ''; // Clear the container before rendering

  freelancers.forEach((freelancer) => {
    const freelancerElement = document.createElement('div');
    freelancerElement.classList.add('#freelancer');
    freelancerElement.innerHTML = `
      <p>${freelancer.Name}</p>
      <p>${freelancer.Occupation}</p>
      <p>${freelancer.StartingPrice}</p>
    `;
    freelancersContainer.appendChild(freelancerElement);
  });
}

function addRandomFreelancer() {
  const randomFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  freelancers.push(randomFreelancer);
  renderFreelancers();
}

const addFreelancerInterval = setInterval(addRandomFreelancer, 1000);

renderFreelancers();

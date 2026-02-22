// DOM Elements here
// get element id from dashboard section
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
// get element id from Tabs section
const tabAll = document.getElementById('tab-all');
const tabInterview = document.getElementById('tab-interview');
const tabRejected = document.getElementById('tab-rejected');
// id Job Cards section
const jobCardsContainer = document.getElementById('job-cards');
// Job Card 
const jobCards = document.querySelectorAll('.job-card');

// Update dashboard counts
function updateCounts() {
  const total = jobCardsContainer.querySelectorAll('.job-card').length;
  const interview = jobCardsContainer.querySelectorAll('.job-card[data-status="interview"]').length;
  const rejected = jobCardsContainer.querySelectorAll('.job-card[data-status="rejected"]').length;

  totalCount.innerText = total;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}

// Filter jobs by status
function showTab(tab) {
  jobCards.forEach(card => {
    if(tab === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = (card.dataset.status === tab) ? 'block' : 'none';
    }
  });
}

// Event delegation for buttons
jobCardsContainer.addEventListener('click', function(e) {
  const card = e.target.closest('.job-card');
  if(!card) return;

  // Interview button
  if(e.target.classList.contains('btn-interview')) {
    card.dataset.status = 'interview';
    updateCounts();
    showTab('all');
  }

  // Rejected button
  if(e.target.classList.contains('btn-rejected')) {
    card.dataset.status = 'rejected';
    updateCounts();
    showTab('all');
  }

  // Delete button
  if(e.target.closest('.btn-delete')) {
    card.remove();
    updateCounts();
  }
});

// Tab clicks
tabAll.addEventListener('click', () => showTab('all'));
tabInterview.addEventListener('click', () => showTab('interview'));
tabRejected.addEventListener('click', () => showTab('rejected'));

// Initial count
updateCounts();



// all status bar functional logic 
document.querySelectorAll('.job-card').forEach(card => {
  const btnInterview = card.querySelector('.btn-interview');
  const btnRejected = card.querySelector('.btn-rejected');
  const statusText = card.querySelector('.status-text');

  btnInterview.addEventListener('click', () => {
    statusText.textContent = 'INTERVIEW';
    statusText.classList.remove('text-red-500');
    statusText.classList.add('text-green-500');
  });

  btnRejected.addEventListener('click', () => {
    statusText.textContent = 'REJECTED';
    statusText.classList.remove('text-green-500');
    statusText.classList.add('text-red-500');
  });
});